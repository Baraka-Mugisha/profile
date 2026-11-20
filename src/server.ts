import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Contact form endpoint. Sends the message through Brevo's transactional email API.
 * Requires BREVO_API_KEY, CONTACT_TO_EMAIL (your inbox) and CONTACT_FROM_EMAIL (a sender verified in Brevo).
 */
app.use(express.json({ limit: '50kb' }));

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, message } = req.body ?? {};
  const valid =
    [name, email, message].every((v) => typeof v === 'string' && v.trim().length > 0) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    res.status(400).json({ ok: false, error: 'Invalid form data' });
    return;
  }

  const apiKey = process.env['BREVO_API_KEY'];
  const to = process.env['CONTACT_TO_EMAIL'];
  const from = process.env['CONTACT_FROM_EMAIL'];
  if (!apiKey || !to || !from) {
    res.status(500).json({ ok: false, error: 'Contact service is not configured' });
    return;
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone ?? ''}`,
    `Company: ${company ?? ''}`,
    '',
    message,
  ].join('\n');

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Portfolio contact form', email: from },
        to: [{ email: to }],
        replyTo: { email },
        subject: `New message from ${name}`,
        textContent: text,
      }),
    });
    if (!response.ok) {
      console.error('Brevo rejected the message:', response.status);
      res.status(502).json({ ok: false, error: 'Message could not be sent' });
      return;
    }
    res.json({ ok: true });
  } catch (error) {
    console.error('Contact send failed:', error);
    res.status(502).json({ ok: false, error: 'Message could not be sent' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);

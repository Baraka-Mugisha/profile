import { AppearDirective } from './appear';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, RouterModule } from '@angular/router';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { LicensesComponent } from './licenses/licenses.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    LicensesComponent,
    EducationComponent,
    ContactComponent,
    NavBarComponent,
    NotFoundComponent,
    HomeComponent,
    NavBarItemComponent,
    FooterComponent,
    AppearDirective,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent, outlet: 'home' },
        { path: 'about', component: AboutComponent, outlet: 'about' },
        { path: 'projects', component: ProjectsComponent, outlet: 'projects' },
        {
          path: 'experience',
          component: ExperienceComponent,
          outlet: 'experience',
        },
        { path: 'skills', component: SkillsComponent, outlet: 'skills' },
        { path: 'licenses', component: LicensesComponent, outlet: 'licenses' },
        {
          path: 'education',
          component: EducationComponent,
          outlet: 'education',
        },
        { path: 'contact', component: ContactComponent, outlet: 'contact' },
        // { path: '**', component: NotFoundComponent },
      ],
      routerOptions
    ),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

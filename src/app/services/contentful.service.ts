import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from 'src/environments/environment';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });
  constructor() {}

  logContent(content_type) {
    this.client.getEntries({ content_type }).then((entry) => {
      console.log(entry);
    });
  }

  getContent(content_type) {
    const promise = this.client.getEntries({ content_type });

    return from(promise)
      .pipe(map((res) => res.items))
      .pipe(
        map((items) =>
          items.map((item) => {
            var fields: Object = item.fields;
            return { ...fields, id: item.sys.id };
          })
        )
      );
  }
}

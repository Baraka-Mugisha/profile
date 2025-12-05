import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

interface ContentfulEntry {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: any;
}

interface ContentfulResponse<T> {
  items: ContentfulEntry[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private spaceId = environment.contentful.spaceId;
  private accessToken = environment.contentful.accessToken;
  private env = environment.contentful.environment;
  private baseUrl = `https://cdn.contentful.com/spaces/${this.spaceId}/environments/${this.env}`;

  constructor(private http: HttpClient) {}

  private getEntries<T>(contentType: string): Observable<T[]> {
    const url = `${this.baseUrl}/entries?access_token=${this.accessToken}&content_type=${contentType}`;

    return this.http.get<ContentfulResponse<T>>(url).pipe(
      map((response) =>
        response.items.map(
          (item) =>
            ({
              ...item.fields,
              id: item.sys.id,
            } as T)
        )
      )
    );
  }

  getSkills(): Observable<any[]> {
    return this.getEntries('skills');
  }

  getProjects(): Observable<any[]> {
    return this.getEntries('projects');
  }

  getExperience(): Observable<any[]> {
    return this.getEntries('experience');
  }

  getContent(contentType: string): Observable<any[]> {
    return this.getEntries(contentType);
  }
}

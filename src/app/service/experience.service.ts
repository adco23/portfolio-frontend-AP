import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  apiURL = 'http://localhost:3001/experience';

  constructor(
    private http: HttpClient
  ) { }

  getExperiences() {
    return this.http.get<Experience[]>(this.apiURL)
  }
}

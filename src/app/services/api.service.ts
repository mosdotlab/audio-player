import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAudio } from '../models/audio.models';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private API_PATH = '';
  
	constructor(private _http: HttpClient) { }
  
	public get(): Observable<IAudio[]> {
		const url = 'api/audio.json';
		return this._http.get<IAudio[]>(url);
	  }
  
}

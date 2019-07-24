import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll=()=>{
    return this._http.get('/api/movies');
  };
  getMovie=(id:string)=>{
    return this._http.get(`/api/movies/${id}`);
  };
  postMovie=(newMovie:any)=>{
    return this._http.post('/api/movies',newMovie);
  };
  addReview=(id:string,newReview:any)=>{
    console.log('new review from service: ', newReview);
    return this._http.put(`/api/movies/add/${id}`,newReview);
  };
  destroy=(id:string)=>{
    return this._http.delete(`/api/movies/${id}`);
  };
}

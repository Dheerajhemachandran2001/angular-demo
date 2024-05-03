import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http:HttpClient) { }

  getMeals(search:string):Observable<any>{
    return this.http.get(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }
}

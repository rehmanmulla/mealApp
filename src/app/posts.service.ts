import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  categoryList ='https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  categorySeafood = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(this.categoryList);
  }
  getEachCategory(type: string) {
    return this.http.get(this.categorySeafood + type);
  }
}

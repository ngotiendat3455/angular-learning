import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface ICategory {
  id: number;
  name: string;
}
export interface ICategoryGetApi {
  trivia_categories: ICategory[]

}
export interface ICategoryModel {
  id: number;
  name: string;
  subcategory: string | null;
}
@Injectable({
  providedIn: 'root'
})
export class TestCatergoryService {
  readonly #http = inject(HttpClient);
  getQuizCatory(): Observable<ICategoryModel[]>{
    return this.#http.get<ICategoryGetApi>("https://opentdb.com/api_category.php").pipe(
      map(responseApi => responseApi.trivia_categories.map((ele) => {
        const separator = ': ';

        if (ele.name.includes(separator)) {
          const splitData = ele.name.split(separator);
          return {
            id: ele.id,
            name: splitData[0],
            subcategory: splitData[1]
          } as ICategoryModel
        }
        return {
          id: ele.id,
          name: ele.name,
          subcategory: null
        } as ICategoryModel
      }))
    )
  }
}

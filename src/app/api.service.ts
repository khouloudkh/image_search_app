import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ImagesUrl = 'https://pixabay.com/api/?key=28047198-73fbf83cc999bd7f9bafb768d&image_type=photo';

  constructor(private httpClient: HttpClient) { }

  getImages(query?: string) {
    return this.httpClient.get(this.ImagesUrl + '&q=' + query);
  }
}

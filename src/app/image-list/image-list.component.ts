import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {

  images: any = [];
  searchQuery = "";

  constructor(private apiService: ApiService){}

  searchImages(query: string) {
    this.apiService.getImages(this.searchQuery)
    .subscribe((image) => {
      this.images = image;
      console.log(this.images.hits);
    });
  }

  ngOnInit(): void {
    this.searchImages(this.searchQuery);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPosts() {
    throw new Error('Method not implemented.');
  }
  private url = 'http://jsonplaceholder.typicode.com/posts'; 
  
  constructor(private h: HttpClient) { }


  getAPI()
  {
   return this.h.get(this.url) 
  }
}

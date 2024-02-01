import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-servicelayer',
  templateUrl: './servicelayer.component.html',
  styleUrls: ['./servicelayer.component.css']
})
export class ServicelayerComponent implements OnInit {
  posts:any;
  
  constructor(private ps:PostService) {
    

  }
  
  ngOnInit(){
      this.ps.getAPI()
        .subscribe(((response: any)  => {
          this.posts = response;
        }));
  }
}
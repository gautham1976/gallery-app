import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewGallery().subscribe(
      (r)=>{
        this.data=r
      }
    )
   }

  ngOnInit(): void {
  }
data:any=[ ]
}

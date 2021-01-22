import { PhotoService } from './../../services/photo.service';
import { Photo } from './../../Models/photo.model';
import { DeleteComponent } from './../delete/delete.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './../add/add.component';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photos?: Photo[];
  currentPhoto?: any;
  currentIndex = -1;
  label = '';
  
  url: string;
  searchInput: string;
  // photos = ["/assets/images/cat.jpg", "/assets/images/flower.jpg", "/assets/images/schweiz.jpg", "/assets/images/flower1.jpg", "/assets/images/forest.jpg",
  // "/assets/images/Waterfall.jpg", "/assets/images/dog.jpg", "/assets/images/cat.jpg"]
  // label: string;
  

  constructor(public dialog: MatDialog, private photoService: PhotoService) {
    this.label = "";

    this.photos = [];
    this.url= "";
    this.searchInput= "";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      height:'250px',width:'550px',
      data: this.currentPhoto
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
    });
  }
  

  ngOnInit(): void {
    this.retrievePhotos();
  }

  retrievePhotos(): void {
    this.photoService.getAll()
      .subscribe(
        data => {
          this.photos = data
          console.log("Photos received from the server :", data);
        },
        error => {
          console.log(error);
        });
  }

  setActivePhoto(photo: any, index: number): void {
    this.currentPhoto = photo;
    console.log("Current PHOTO :",this.currentPhoto)
    this.currentIndex = index;
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      height:'350px',width:'550px',
      data: {label: this.label, url: this.url}
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed', data);
      // this.animal = result;
    });
  }

  searchLabel(): void {
    this.photoService.findByLabel(this.searchInput)
      .subscribe(
        data => {
          this.photos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        })
  }

}

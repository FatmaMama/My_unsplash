import { HomeComponent } from './../home/home.component';
import { PhotoService } from './../../services/photo.service';
import { Photo } from '../../Models/photo.model'
import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  currentPhoto: any;
  label: string;
  id : any;
  labelDelete: string;
 

  constructor(private photoService: PhotoService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log ("Data Dialog :", data)
     
      this.label = data.label
      this.id = data.id
      console.log("DATA : ", this.id)
      this.labelDelete = '';
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    // this.getPhoto(this.route.snapshot.params.id);
  }

  changeBackgroundColor(x: any,y: any){
      let color = "#DCDCDC"
      if (x === y){
        color = "#ef5350"
      }
      return color;
  }

  changeColor(x: any,y: any){
    let color = "#808080"
    if (x === y){
      color = "white"
    }
    return color;
}

  // getPhoto(id: string): void {
  //   this.photoService.get(id)
  //     .subscribe(
  //       data => {
  //         this.currentPhoto = data;
  //         console.log("Photo received :",data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  deletePhoto(): void {
    this.dialogRef.close();
    this.photoService.delete(this.id)
      .subscribe(
        response => {
          console.log("delete photo",response);
          window.location.reload()
        },
        error => {
          console.log(error);
        });
  }
  
}

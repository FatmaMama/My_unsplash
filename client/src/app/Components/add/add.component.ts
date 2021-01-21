import { HomeComponent } from './../home/home.component';
import { PhotoService } from './../../services/photo.service';
import { Photo } from './../../Models/photo.model';
import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {

  label: string;
  url: string;
  submitted = false;
  refresh : any;

  constructor( private photoService : PhotoService,
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo) {
      this.label = data.label || '';
      this.url = data.url || '';
      // this.refresh = this.home.retrievePhotos()
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() : void {
    this.dialogRef.close(this.data);
    this.photoService.create(this.data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          window.location.reload()
        },
        error => {
          console.log(error);
        });
  }

  

}

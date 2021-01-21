import { Photo } from './../../Models/photo.model';
import { PhotoService } from './../../services/photo.service';
import { AddComponent } from './../add/add.component';
import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  photos?: Photo[];
  label: string;
  url: string;
  searchInput: string;

  constructor(public dialog: MatDialog, private photoService: PhotoService) {
    this.photos = [];
    this.label = "";
    this.url= "";
    this.searchInput= "";
  }

  openDialog(): void {
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

import { DeleteComponent } from './../delete/delete.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos = ["/assets/images/cat.jpg", "/assets/images/flower.jpg", "/assets/images/schweiz.jpg", "/assets/images/flower1.jpg", "/assets/images/forest.jpg",
  "/assets/images/Waterfall.jpg", "/assets/images/dog.jpg", "/assets/images/cat.jpg"]
  label: string;
  

  constructor(public dialog: MatDialog) {
    this.label = "";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      height:'250px',width:'550px',
      data: {label: this.label}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }
  

  ngOnInit(): void {
  }

}

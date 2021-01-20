import { AddComponent } from './../add/add.component';
import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  label: string;
  url: string;

  constructor(public dialog: MatDialog) {
    this.label = "";
    this.url= "";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      height:'350px',width:'550px',
      data: {label: this.label, url: this.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }


}

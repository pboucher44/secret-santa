import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-cgupopup',
  templateUrl: './cgupopup.component.html',
  styleUrls: ['./cgupopup.component.scss']
})
export class CgupopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppComponent>) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  closePop() {
    this.dialogRef.close();
  }
}

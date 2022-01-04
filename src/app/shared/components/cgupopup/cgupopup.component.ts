import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {HomePage} from '../../../secret-santa/pages/home-page/home.page';

@Component({
  selector: 'app-cgupopup',
  templateUrl: './cgupopup.component.html',
  styleUrls: ['./cgupopup.component.scss']
})
export class CgupopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HomePage>) { }

  ngOnInit(): void {
  }

  closePop() {
    this.dialogRef.close();
  }
}

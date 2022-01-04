import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../../metier/contact';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CgupopupComponent} from '../../../shared/components/cgupopup/cgupopup.component';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  title = 'santa';
  number = 0;
  contactForm: FormGroup;
  states = false;
  montant;

  constructor(public matDialog: MatDialog, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contacts: this.fb.array([this.createContact(), this.createContact(), this.createContact()])
    });
  }

  createContact() {
    return this.fb.group({
      nom: [''],
      email: ['']
    });
  }

  newContact() {
    (this.contactForm.controls.contacts as FormArray).push(this.createContact());
  }

  removeContact(i) {
    (this.contactForm.controls.contacts as FormArray).removeAt(i);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '80%';
    dialogConfig.width = '80%';
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CgupopupComponent, dialogConfig);
  }

  send() {
      const machin = (this.contactForm.get('contacts') as FormArray).getRawValue();
      this.http.post<any>('https://mail-sender-secretsanta.herokuapp.com/contacts/' + this.montant, machin)
        .subscribe(res => {
          console.log('it work', res.json());
        });
  }
}

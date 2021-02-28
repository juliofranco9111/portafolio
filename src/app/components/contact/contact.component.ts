import { message } from './../../models/message.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  public data: message = {
    name: '',
    email: '',
    phone: '',
    msg: ''
  };

  public formSubmitted = false;


  public loading = false;
  public sended = false;

  public contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', []],
    msg: ['', [Validators.required]]
  });
  constructor(
    private db: DatabaseService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submit() {

    this.loading = true;

    this.formSubmitted = true;

    const { value, valid } = this.contactForm;

    if (valid) {
      this.data = value;

      this.db.saveMessage(this.data).then(() => {





        setTimeout(() => {
          this.loading = false;
          this.sended = true;
          this.resetForm();
        }, 1000)
      })

    } else {
      this.loading = false;
      return
    }
  }

  notValid(campo: string): boolean {

    if (this.contactForm.get(campo).invalid && this.formSubmitted && !this.sended) {
      return true;
    } else {
      return false;
    }
  }

  resetForm(){
    this.contactForm.controls.name.setValue('');
    this.contactForm.controls.msg.setValue('');
    this.contactForm.controls.phone.setValue('');
    this.contactForm.controls.email.setValue('');
  }

}

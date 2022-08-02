import { Component, OnInit,  ElementRef } from '@angular/core';
import { ContactService } from '../../app/service/contact/contact.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactForm: FormGroup;

   // tslint:disable-next-line: max-line-length
   private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   private RegLN: any = /^[A-Za-z0-9]+$/;

   exito = false;

  constructor(private contactService: ContactService) {  this.contactForm = this.createForm(); }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get tel() { return this.contactForm.get('tel'); }
  get message() { return this.contactForm.get('message'); }

  plainText: string;


  createForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(this.RegLN)]),
      tel: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });
  }


  onResetForm(): void {
    this.contactForm.reset();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactForm.value.tel = this.plainText;
      //this.dbData.saveMessage(this.contactForm.value);
      console.log(this.contactForm.value);
      
      this.contactService.createContact(this.contactForm.value).subscribe(
        data => console.log('success', data),
        error => console.log('oops la Api no es real', error)
      )

    }
  }

  keyDownEvent(e){
    // Permitir la tecla para borrar
    if (e.key == 'Backspace') return true;

    // Permitir flecha izquierda
    if (e.key == 'ArrowLeft') return true;

    // Permitir flecha derecha
    if (e.key == 'ArrowRight') return true;

    // Bloquear tecla de espacio
    if (e.key == ' ') return false;

    // Bloquear tecla si no es un numero
    if (isNaN(e.key)) return false;
  }

  keyUpEvent(e){

    let numbers = e.target.value.replace(/\s/g, '');
   
    this.plainText = numbers;

    e.target.value = e.target.value.replace(/([0-9]{2})/g, '$1 ').trim();
    

  }

}

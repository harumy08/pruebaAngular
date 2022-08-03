import { Component, OnInit,  ElementRef } from '@angular/core';
import { ContactService } from '../../app/service/contact/contact.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
     // inicializo mi FormGroup
  public contactForm: FormGroup;

 // hago uso de algunos RegEx para las validaciones de mis campos
   private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   private RegLN: any = /^[A-Za-z0-9]+$/;

   //llamo a mi servicio que usare para guardar mis datos post

  constructor(private contactService: ContactService) {  this.contactForm = this.createForm(); }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get tel() { return this.contactForm.get('tel'); }
  get message() { return this.contactForm.get('message'); }

  plainText: string;

  //Creo mi form con sus validaciones

  createForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(this.RegLN)]),
      tel: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });
  }

//Creo una función para resetear el formulario en caso de que mi envío sea exitoso
  onResetForm(): void {
    this.contactForm.reset();
  }

  //Creo una función para enviar los datos a mi servicio
  onSubmit(): void {
    if (this.contactForm.valid) { //Si mi form es valido comienzo mi flujo de envio
      this.contactForm.value.tel = this.plainText;//Para evitar enviar el telefono con espacios, lo pasamos como texto plano y no mandar basura al servicio

      console.log(this.contactForm.value);//Imprimo en consola los datos a enviar para asegurarme que sean correctos
      //Envío mis datos al servicio, captando el error, que en este caso pasa ya que la URL de Api no existe
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
// Capturo el evento del input de telefono
  keyUpEvent(e){

    let numbers = e.target.value.replace(/\s/g, '');// Mando este texto plano al servicio
   
    this.plainText = numbers;

    e.target.value = e.target.value.replace(/([0-9]{2})/g, '$1 ').trim();//aqui separa cada dos numero el numero telefonico
    

  }

}

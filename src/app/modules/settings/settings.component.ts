import { Component, OnInit } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  userLastName = "Dounari"
  userFirstName = "Amanda"
  userMail = "amanda.dounari@etu.formaschool.com"
  userPhone = "06.78.34.89.18"

  ngOnInit(): void {
    document.querySelectorAll('input').forEach(element => {
      element.addEventListener('blur', (event : any) => {
        this.contentVerification(event.target)
      })
    });
  }

  contentVerification(input : any){
    console.dir(input.validity.valid)
    var errorSpan = document.getElementById(`${input.name}-error`)

    if(errorSpan){
    switch(input.name){
      case 'firstname':
        if(this.isNullOrWhitespace(input.value)){
          errorSpan.innerHTML= 'Nom invalide'
          errorSpan.style.opacity = '1'
        }
        else{
          this.userFirstName = input.value
          errorSpan.style.opacity = '0'
        }
        break;
      case 'lastname':
        if(this.isNullOrWhitespace(input.value)){
          errorSpan.innerHTML= 'Prénom invalide'
          errorSpan.style.opacity = '1'
        }
        else{
          this.userLastName = input.value
          errorSpan.style.opacity = '0'
        }
        break;
      case 'mail':
        if(this.isNullOrWhitespace(input.value) || !input.validity.valid){
          errorSpan.innerHTML= 'Mail invalide'
          errorSpan.style.opacity = '1'
        }
        else{
          this.userMail = input.value
          errorSpan.style.opacity = '0'
        }
        break;
      case 'phone':
        if(this.isNullOrWhitespace(input.value) || !input.validity.valid){
          errorSpan.innerHTML= 'Mail invalide'
          errorSpan.style.opacity = '1'
        }
        else{
          this.userMail = input.value
          errorSpan.style.opacity = '0'
        }
        break;
      default:
        console.error(`Invalid name for input : ${input.name}`)
        break;
    }
  }
  }

  isNullOrWhitespace(value : string ) {
    if (typeof value === 'undefined' || value == null) return true;
    return value.replace(/\s/g, '').length < 1;
}

}

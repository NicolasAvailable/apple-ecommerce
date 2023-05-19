import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  switchModal: boolean = false;

  openModal(event: boolean){
    this.switchModal = event
  }

  closeModal(){
    this.switchModal = false;
  }
}

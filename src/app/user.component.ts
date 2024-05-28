import {Component} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-user',
    template: `
    <input type="text" [(ngModel)]="name">   
    <p> Hello {{name}} !</p>
     <p> I'm the app component </p>`    
})
export class UserComponent {
    
    name = 'Max';
    
    onUserInput(event: any){

        this.name = event.target.value
    }
}

//<input type="text" (input)="onUserInput($event)">   
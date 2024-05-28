import {Component} from '@angular/core';

@Component({
    selector:'app-dashboard',
    template:`
            <input type="text" (input) = "onUserInput($event)">
            <p> This is the Dashboard app! </p>
            <p> Let's bind this {{what}} </p>
            <input type="button" (click)="onUserClick($event)">
            <p> Load State: {{loadState}} </p>
    `

})

export class DashboardComponent {

    what = ''//= 'thing'
    loadState = 'loading'
    onUserInput(event: any){
        this.what = event.target.value
    }

    onUserClick(event:any){
       this.loadState = 'Finished'
    }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assesment2';
  oddNumbers: number[] =[];
  evenNumbers: number[] = [];

  OnIntervalFired($event:number){
    if($event % 2===0)
    {
      this.evenNumbers.push($event);
    }else{
      this.oddNumbers.push($event);
    }

  }
}

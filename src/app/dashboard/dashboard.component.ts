import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showText:boolean = true;
  textClicked:boolean = false;
  defaultText:string = "Click on me and see the change";
  constructor() {};

 

  clickHandler(value:string){
    this.defaultText=value;
  }

  setStyles(): any {
    debugger
  if(this.textClicked){
     let styles = {            
        'color': 'red'
      }
      return styles;
   }      
   
}

  ngOnInit(): void {
    
  };
    
}





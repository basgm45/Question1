import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  title = 'Question1';
  

  constructor(public http: HttpClient) { }

  //http request
  //  thisIsSyncFunction() {
  //   this.number1 = this.http
  //   .get('/data').pipe(map(res => {
  //     console.log(res);
      
  //   })).subscribe()
    
  // }

  ngOnInit() {
  
    
  }
   
}


function thisIsSyncFunction() {
  let result = 0;

  fetch('/data')
  .then(res => res.json())
  .then((response) =>   {
      result = response.data;
      const number1 = result;
      console.log(number1);
      const calculation = number1 * 10;
      console.log(calculation);
  });
  return result;
}

thisIsSyncFunction()
 
 




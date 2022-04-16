import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],styles:['color:red;']
})
export class AppComponent {
  title = 'democomponents';
  isDisabled = false;
  active = true;
  n1= 0;
  n2 = 0;

  add(n1:number,n2?:number){
    if(n2)
    {
      return n1 + n2;
    }
    return n1;
  }
  like(){
    
  }

}

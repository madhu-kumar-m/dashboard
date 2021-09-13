import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMe:boolean = true;
  window: any;

  constructor() { }

  ngOnInit(): void {

    var screen_size:number|undefined = $(window).width();
    if (screen_size == undefined){
      this.showMe = false;
    } else {
      if(screen_size < 830)
    {
      console.log(screen_size + "true")
      this.showMe = false;
    } else {
      console.log(screen_size + "false")
      this.showMe = true;
    }
    }


  }



  toggleMe(){
    this.showMe =!this.showMe;
  }

  

}

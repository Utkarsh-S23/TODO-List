import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fname: number;
  sname: number;
  fullname: boolean;

  constructor() { }
    myfun(a:any,b:any){
      this.fname=parseInt(a);
      this.sname=parseInt(b);
      this.fullname=(this.fname>this.sname);
    }

  ngOnInit(): void {
  }

}
function ab(ab: any): void {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  user:any = {}

  constructor() { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.user.userName = "Sanjib Mallik";
    this.user.role = "Software Engineer";
    this.user.phone = "+91 7250550530"
    this.user.emailId = "Sanjibmallik.prof@gmail.com";
    this.user.address = "#1257, Idhga road, Varthur, Bangalore-87, Karnataka, India"
  }

}

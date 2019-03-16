import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  skills = [
    {
      name: 'Angular',
      rate: 80
    },
    {
      name: 'JavaScript',
      rate: 80
    },
    {
      name: 'TypeScript',
      rate: 60
    },
    {
      name: 'HTML',
      rate: 70
    },
    {
      name: 'CSS',
      rate: 60
    },
    {
      name: 'Bootstrap',
      rate: 60
    },
    {
      name: 'SpringBoot',
      rate: 60
    },
    {
      name: 'MySql',
      rate: 60
    },
    {
      name: 'NodeJS',
      rate: 60
    }

  ]

  link = "https://firebasestorage.googleapis.com/v0/b/sanjibmallikportfolio.appspot.com/o/SanjibMallik_FE_Engineer.pdf?alt=media&token=0c2d0e7a-ff28-47a9-87f2-faa8767f0315"

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  public navListItems = [
    {
      title: "Home",
      link: "home"
    },
    {
      title: "Education",
      link: "profile"
    },
    {
      title: "Research",
      link: "research"
    },
    {
      title: "Academic Activities",
      link: "publications"
    },
    {
      title: "Teaching",
      link: "teaching"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

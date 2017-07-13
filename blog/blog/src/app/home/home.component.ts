import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('AppIgniton Blog');

    meta.addTags([
        {
          name: 'author', content: 'AppIgnition'
        },
        {
          name: 'keywords', content: 'big data consulting services, big data service providers, big data solution providers, big data analytics solutions, big data security solutions'
        },
        {
          name: 'description', content: 'Big Data Expert Advice from AppIgnition, provider of Big Data Consulting Services that enable enterprises to quickly and efficiently build streaming or batch processing big data solutions supporting your decision science and predictive analytics initiatives.'
        }
      ])
  }

  ngOnInit() {
  }

}

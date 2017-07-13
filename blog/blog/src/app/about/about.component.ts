import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
        name: 'description', content: 'AppIgnition provides Big Data Consulting Services that enable enterprises to quickly and efficiently build streaming or batch processing big data solutions supporting your decision science and predictive analytics initiatives.'
      }
    ])
}

  ngOnInit() {
  }

}

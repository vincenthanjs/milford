import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Ctoa } from './models';
import { products } from './products';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'ctoa-web';
  ctoas = [];
  vms = [];
  articles: [];


  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.vms = VMS;
    this.getArticles();
  }

  getArticles(){
    this.httpClient.get<any>('http://localhost:10000/articles').subscribe(
      response => {
        console.log(response);
        this.articles = response;
      }
    )
  }

}

export interface Articles {
  Title: string,
  desc: string,
  content: string
}

export interface Vms {
  name:string;
  location:string;
  environment:string;
}

export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}

var VMS: Vms[] = [
  {
    "name" : "ocp-east-m66c5-master-1",
    "location" : "Singapore-DC-East",
    "environment" : "Dev-Test"
  },
  {
    "name" : "ocp-east-m66c5-master-2",
    "location" : "Singapore-DC-East",
    "environment" : "Dev-Test"
  },
  {
    "name" : "ocp-east-m66c5-worker-mkrxx",
    "location" : "Singapore-DC-West",
    "environment" : "Dev-Test"
  }
]


    /**
 export class Article {
  constructor(
    public title: string,
    public description: string,
    public content: string
  ) {
  }
}

  #constructor(public myService: MyserviceService) { }
 ngOnInit() {
   this.myService.getCtoas().subscribe(data => {console.log(data); this.ctoas = data} )

   this.vms = VMS;
 }


  refresh() {
    this.myService.getCtoas().subscribe(data => {console.log(data); this.vms = data} )
  }
}
 */











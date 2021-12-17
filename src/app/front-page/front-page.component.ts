import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  newsPanels = [
    {src:"https://jedlik.eu/images/hirek/img/elvitelre.jpg", title:"Tájékoztatás téli szünidei étkezéssel kapcsolatban"},
    {src:"https://jedlik.eu/images/hirek/img/matek_verseny.jpg", title:"LEVEL-ezz!"},
    {src:"https://jedlik.eu/images/eh_2021_szavazas_300300_v1.gif", title:"Év honlapja 2021"},
    {src:"https://jedlik.eu/images/jedlik_120_evfordulo/DSC_1681.jpg", title:"120 éves az iskola"},
    {src:"https://jedlik.eu/images/hirek/img/felvettek.jpg", title:"Nyitott kapuk napja"},
    {src:"https://jedlik.eu/images/hirek/img/matek.png", title:"Matematika kapcsolatépítő csapatverseny - eredmények"},
  ]

  pictures:string[] = [
    'https://jedlik.eu/images/kepzeseink/gepesztechnikus_v1.png',
    'https://jedlik.eu/images/kepzeseink/gepgyartastechnologiai_technikus_v1.png',
    'https://jedlik.eu/images/kepzeseink/altalanos_post_v2.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

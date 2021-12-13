import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'news-panel',
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.css']
})
export class NewsPanelComponent implements OnInit {

  @Input() content:any[] = [{src:"", title:""}];

  constructor() { }

  ngOnInit(): void {
  }

}

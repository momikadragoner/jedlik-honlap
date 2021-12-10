import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

}

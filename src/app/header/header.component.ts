import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faChevronDown, faTh, faChalkboard, faInfoCircle, faEnvelopeOpenText, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
  faTh = faTh;
  faChalkboard = faChalkboard;
  faInfoCircle = faInfoCircle;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faCloudDownloadAlt = faCloudDownloadAlt;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}

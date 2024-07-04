import { Component, OnInit } from '@angular/core';

import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import {
  faHeart
} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faFacebook = faFacebookF;
  public faInstagram = faInstagram;
  public faWhatsapp = faWhatsapp;
  public faHeart = faHeart;
  public linkInstagram: string = 'https://www.instagram.com/venus.shoop/';
  public linkWhatsapp: string = 'https://api.whatsapp.com/send?phone=573174552388&text=hola%20%F0%9F%91%8B%20quisiera%20informaci%C3%B3n%20';
  public linkFacebook: string = 'https://drive.google.com/drive/u/4/folders/1h9YPi-L7AfdygIbTQ7_IgZonMs-6UKuq';

  constructor() { }

  ngOnInit(): void {
  }

}

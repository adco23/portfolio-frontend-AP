import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub, faGithubAlt, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoAP = '../../../assets/images/logoAP.jpg';
  faLinkedinIn = faLinkedinIn;
  faGithubAlt = faGithubAlt;

  constructor() { }

  ngOnInit(): void {
  }

}

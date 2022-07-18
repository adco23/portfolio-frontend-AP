import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  // startDate: string = 'May 2019';
  // endDate: string = 'Present';
  // title: string = 'Experience';
  // description: string = 'I am a full-stack developer with a passion for building web applications. I have a background in electrical engineering and a passion for learning new technologies. I am currently working as a software engineer at a startup called "Crowdy".';
  // type: string = 'laboral';

  @Input() experience: Experience = {
    startDate: '',
    endDate: '',
    company: '',
    title: '',
    description: '',
    type: '',
    location: '',
    id: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}

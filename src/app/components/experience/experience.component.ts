import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(
    private experienceService: ExperienceService
  ) { }

  ngOnInit(): void {
    this.experienceService.getExperiences()
      .subscribe(data => this.experiences = data);
  }

}

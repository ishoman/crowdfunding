import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers: [ProjectService]
})
export class DonateComponent implements OnInit {
  @Input() childProjectToDisplay;
  @Input() childProjectId;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  supportCause(childProjectToDisplay, support) {
    console.log(this.childProjectId);
    this.projectService.updateGoal(childProjectToDisplay, support, this.childProjectId)
  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay;


  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectService.getProjectbyId(this.projectId).subscribe(dataLastEmmittedFromObserver => {
      this.projectToDisplay = new Project(dataLastEmmittedFromObserver.title,
                                          dataLastEmmittedFromObserver.owner,
                                          dataLastEmmittedFromObserver.description,
                                          dataLastEmmittedFromObserver.goal,
                                          dataLastEmmittedFromObserver.swag,
                                          dataLastEmmittedFromObserver.category
                                          )
    })
  }

  // supportCause(support: number) {
  //   let modifiedGoal: number = parseInt(this.projectToDisplay.goal) - support;
  //   if(confirm("Are you sure you want to donate $" + support)) {
  //     this.projectService.updateGoal(modifiedGoal, this.projectToDisplay);
  //     let projectEntryInFirebase = this.getProjectById(projectToDisplay.$key);
  //     projectEntryInFirebase.goal.update(modifiedGoal);
  //   }
  // }
  // saveDonation(projectToDisplay){
  //   projectEntryInFirebase.goal.update(100);
  // }
}

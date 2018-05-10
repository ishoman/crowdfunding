import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})

export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  viewForm: boolean = false;

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }

  showForm(){
    this.viewForm = true;
  }

  submitProject(title: string, owner: string, description: string, goal: number, swag: boolean, category: string){
    let newProject: Project = new Project(title, owner, description, goal, swag, category);
    this.projectService.addProject(newProject);
  }
}

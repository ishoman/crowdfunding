import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  followedProjects: Project[] = [];

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectbyId(projectId: string) {

    return this.database.object('projects/' + projectId);
  }

  updateGoal(projectToUpdate, support, projectId){
    let projectEntryInFirebase = this.getProjectbyId(projectId);
    projectEntryInFirebase.update({goal: (projectToUpdate.goal - support)});
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
  }

  followProject(followedProject: Project) {
    this.followedProjects.push(followedProject);
    console.log(this.followedProjects);
  }

}

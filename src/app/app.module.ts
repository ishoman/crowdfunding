import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AdminComponent } from './admin/admin.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { DonateComponent } from './donate/donate.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    AdminComponent,
    EditProjectComponent,
    DonateComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  routing,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ApiService } from './services/api.service';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { TopicsComponent } from './topics/topics.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReposgridComponent } from './reposgrid/reposgrid.component';
import { TopicsComponent } from './topics/topics.component';
import { FormComponent } from './form/form.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    PaginatorComponent,
    ReposgridComponent,
    TopicsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatChipsModule,
    MatPaginatorModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

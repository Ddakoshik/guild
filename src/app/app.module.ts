import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

// angular - Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// carusel slider
import { NguCarouselModule } from '@ngu/carousel';


import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainComponent } from './dashboard/main/main.component';
import { RulesComponent } from './dashboard/rules/rules.component';
import { CompositionComponent } from './dashboard/composition/composition.component';
import { TimetableComponent } from './dashboard/timetable/timetable.component';
import { BlogComponent } from './dashboard/blog/blog.component';
import { ChatComponent } from './core/chat/chat.component';
import { UserDataService } from './shared/services/user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './core/chat/message/message.component';
import { UploadImgComponent } from './core/upload-img/upload-img.component';
import { BlogPageComponent } from './dashboard/blog-page/blog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RulesComponent,
    CompositionComponent,
    TimetableComponent,
    BlogComponent,
    ChatComponent,
    MessageComponent,
    UploadImgComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    NguCarouselModule
  ],
  providers: [AuthService, AuthGuard, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

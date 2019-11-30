import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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

// pipes
import { PipesModule } from './shared/pipes';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '../../node_modules/@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { effects } from './Store/effects';


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
import { EditorComponent } from './core/editor/editor.component';
import { EditorQuillComponent } from './core/editor-quill/editor-quill.component';
import { BlogEditPageComponent } from './dashboard/blog-edit-page/blog-edit-page.component';
import { BlogAddPageComponent } from './dashboard/blog-add-page/blog-add-page.component';
import { BlogShowPostsComponent } from './dashboard/blog-show-posts/blog-show-posts.component';
import { reducers } from './Store/reducers';
import { CoreStoreModule } from './Store/core-store.module';
import { LuxonModule } from 'luxon-angular';
import { TimeTableLuxonContainerComponent } from './dashboard/time-table-luxon-container/time-table-luxon-container.component';
import { AddEventPopupComponent } from './dashboard/components/add-event-popup/add-event-popup.component';



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
    BlogPageComponent,
    EditorComponent,
    EditorQuillComponent,
    BlogEditPageComponent,
    BlogAddPageComponent,
    BlogShowPostsComponent,
    TimeTableLuxonContainerComponent,
    AddEventPopupComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CoreStoreModule,
    LuxonModule,
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
    QuillModule,
    NguCarouselModule,
    PipesModule,
    NguCarouselModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  providers: [AuthService, AuthGuard, UserDataService],
  entryComponents: [AddEventPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

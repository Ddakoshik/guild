import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { QuillModule } from 'ngx-quill';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CoreStoreModule } from './store/core-store.module';
import { LuxonModule } from 'luxon-angular';

// angular - Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

// pipes
import { PipesModule } from './shared/pipes';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '../../node_modules/@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RulesComponent } from './dashboard/rules/rules.component';
import { CompositionComponent } from './dashboard/composition/composition.component';
import { TimetableComponent } from './dashboard/timetable/timetable.component';
import { ChatComponent } from './core/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './core/chat/message/message.component';
import { UploadImgComponent } from './core/upload-img/upload-img.component';
import { EditorComponent } from './core/editor/editor.component';
import { EditorQuillComponent } from './core/editor-quill/editor-quill.component';
import { BlogEditPageComponent } from './dashboard/blog-edit-page/blog-edit-page.component';
import { BlogAddPageComponent } from './dashboard/blog-add-page/blog-add-page.component';
import { TimeTableLuxonContainerComponent } from './dashboard/time-table-luxon-container/time-table-luxon-container.component';
import { CoreModule } from './core/core.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserProfileContainerComponent } from './dashboard/containers/user-profile-container/user-profile-container.component';
import { UserProfileComponent } from './dashboard/components/user-profile/user-profile.component';
import { EventsContainerComponent } from './dashboard/containers/events-container/events-container.component';
import { EventsTableComponent } from './dashboard/components/events-table/events-table.component';
import { EventPopupJoinComponent } from './dashboard/components/event-popup-join/event-popup-join.component';
import { EventPopupAddComponent } from './dashboard/components/event-popup-add/event-popup-add.component';
import { GameCharactersTileComponent } from './dashboard/components/game-characters-tile/game-characters-tile.component';
import { CharacterModalComponent } from './dashboard/components/character-modal/character-modal.component';
import { MainPageContainerComponent } from './dashboard/containers/main-page-container/main-page-container.component';
import { BlogPageContainerComponent } from './dashboard/containers/blog-page-container/blog-page-container.component';
import { BlogSmallCardComponent } from './dashboard/components/blog-small-card/blog-small-card.component';
import { BlogBigCardComponent } from './dashboard/components/blog-big-card/blog-big-card.component';
import { BlogContainerComponent } from './dashboard/containers/blog-container/blog-container.component';
import { EventInfoTableComponent } from './dashboard/components/event-info-table/event-info-table.component';
import { RaidGroupListComponent } from './dashboard/components/raid-group-list/raid-group-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    RulesComponent,
    CompositionComponent,
    TimetableComponent,
    ChatComponent,
    MessageComponent,
    UploadImgComponent,
    EditorComponent,
    EditorQuillComponent,
    BlogEditPageComponent,
    BlogAddPageComponent,
    TimeTableLuxonContainerComponent,
    UserProfileContainerComponent,
    UserProfileComponent,
    EventsContainerComponent,
    EventsTableComponent,
    EventPopupAddComponent,
    EventPopupJoinComponent,
    GameCharactersTileComponent,
    CharacterModalComponent,
    MainPageContainerComponent,
    BlogPageContainerComponent,
    BlogSmallCardComponent,
    BlogBigCardComponent,
    BlogContainerComponent,
    EventInfoTableComponent,
    RaidGroupListComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoreStoreModule,
    LuxonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule,
    QuillModule,
    PipesModule,
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
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
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  entryComponents: [
    EventPopupAddComponent,
    EventPopupJoinComponent,
    CharacterModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

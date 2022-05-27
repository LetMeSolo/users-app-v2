import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { CommentsUserComponent } from './components/comments-user/comments-user.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';
import { AlbumsUserComponent } from './components/albums-user/albums-user.component';
import { PhotosUserComponent } from './components/photos-user/photos-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserPostComponent,
    CommentsUserComponent,
    UserTodosComponent,
    AlbumsUserComponent,
    PhotosUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

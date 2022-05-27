import {Component, OnInit} from '@angular/core';
import {UserService} from "./shared/service/user.service";
import {IAlbums, IComments, IPhotos, IPost, ITodos, IUser} from "./shared/model/user-app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  users: IUser[] = [];
  userInfo!: IUser;
  posts: IPost[] = [];
  comments: IComments[] = [];
  todos: ITodos[] = [];
  albums: IAlbums[] = [];
  photos: IPhotos[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((users: IUser[]) => {
      this.users = users;
    })
  }

  getUserInfo(id: number): void {
    this.userService.getUserById(id).subscribe((user: IUser) => {
      this.userInfo = user;
      this.posts = [];
      this.comments = [];
      this.todos = [];
      this.photos = [];
      this.albums = [];
    })
  }

  getPosts(id: number): void {
    this.userService.getPostsByUserId(id).subscribe((posts: IPost[]) => {
      this.posts = posts;
      this.todos = [];
      this.photos = [];
      this.albums = [];
    })
  }

  getTodos(id: number): void {
    this.userService.getTodosByUserId(id).subscribe((todos: ITodos[]) => {
      this.todos = todos;
      this.albums = [];
      this.posts = [];
      this.comments = [];
      console.log(todos);
    })
  }

  getAlbums(id: number): void {
    this.userService.getAlbumsByUserId(id).subscribe((albums: IAlbums[]) => {
      this.albums = albums;
      this.posts = [];
      this.comments = [];
      this.todos = [];
    })
  }
}

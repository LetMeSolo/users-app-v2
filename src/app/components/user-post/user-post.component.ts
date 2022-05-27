import { Component, Input, OnInit } from '@angular/core';
import { IComments, IPost } from 'src/app/shared/model/user-app.model';
import {UserService} from "../../shared/service/user.service";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  @Input() post!: IPost;
  @Input() comment!: IComments;

  constructor(protected userService: UserService) { }

  comments: IComments[] = [];
  isCommentsVisible: boolean = false;

  ngOnInit(): void {
  }

  getComments(id: number): void {
    this.userService.getCommentsByPostId(id).subscribe((comments: IComments[]) => {
      this.comments = comments;
      console.log(comments);
      if (!this.isCommentsVisible) {
        this.isCommentsVisible = true;
      }else if (this.isCommentsVisible){
        this.isCommentsVisible = false;
      }
    })
  }

}

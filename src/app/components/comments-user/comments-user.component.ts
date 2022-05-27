import { Component, Input, OnInit } from '@angular/core';
import { IComments } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-comments-user',
  templateUrl: './comments-user.component.html',
  styleUrls: ['./comments-user.component.scss']
})
export class CommentsUserComponent implements OnInit {

  @Input() comment!: IComments;

  constructor() { }

  ngOnInit(): void {
  }

}

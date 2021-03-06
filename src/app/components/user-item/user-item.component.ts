import { Component, Input, OnInit } from '@angular/core';
import {IUser} from "../../shared/model/user-app.model";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}

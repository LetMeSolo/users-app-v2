import {Component, Input, OnInit} from '@angular/core';
import {ITodos} from "../../shared/model/user-app.model";

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.scss']
})
export class UserTodosComponent implements OnInit {

  constructor() { }

  @Input() todo!: ITodos;

  ngOnInit(): void {
  }

}

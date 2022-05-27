import { Component, Input, OnInit } from '@angular/core';
import { IPhotos } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-photos-user',
  templateUrl: './photos-user.component.html',
  styleUrls: ['./photos-user.component.scss']
})
export class PhotosUserComponent implements OnInit {

  constructor() { }

  @Input() photo!: IPhotos;

  ngOnInit(): void {
  }

}

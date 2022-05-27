import { Component, Input, OnInit } from '@angular/core';
import { IAlbums, IPhotos } from 'src/app/shared/model/user-app.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-albums-user',
  templateUrl: './albums-user.component.html',
  styleUrls: ['./albums-user.component.scss']
})

export class AlbumsUserComponent implements OnInit {

  photos: IPhotos[] = [];
  isPhotosVisible = false;

  constructor(private userService: UserService) { }

  @Input() album!: IAlbums;
  @Input() photo!: IPhotos;

  ngOnInit(): void {
  }

  getPhotos(id: number): void {
    this.userService.getPhotosByAlbumId(id).subscribe((photos: IPhotos[]) => {
      this.photos = photos;
      if (!this.isPhotosVisible) {
        this.isPhotosVisible = true;
      }else if (this.isPhotosVisible){
        this.isPhotosVisible = false;
      }
    })
  }

}

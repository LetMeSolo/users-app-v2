export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface IComments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface ITodos {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface IAlbums {
  userId: number,
  id: number,
  title: string
}

export interface IPhotos {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

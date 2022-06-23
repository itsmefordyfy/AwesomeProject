export interface IPixbay {
  total: number;
  totalHits: number;
  hits: Array<IPhotoDetails>;
}

export interface IPhotoDetails {
  id: number;
  largeImageURL: string;
  tags: string;
  user: string;
}

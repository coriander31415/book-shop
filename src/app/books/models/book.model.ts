export interface IBook {
  id: number;
  name: string;
  description: string;
  price: number;
  category: EBookCategory;
  author: string;
  createDate: Date;
  isAvailable: boolean;
  img: string;
}

export enum EBookCategory {
  biographies = 'Biographies & Memoirs',
  business = 'Business & Money',
  children = "Children's Books",
  comics = 'Comics & Graphic Novels',
  fantasy = 'Science Fiction & Fantasy',
  fiction = 'Literature & Fiction',
  historical = 'Historical',
  humor = 'Humor & Entertainment',
  travel = 'Travel',
  thriller = 'Mystery, Thriller & Suspense',
  romance = 'Romance',
}

import { EBookCategory, IBook } from '../../books/models/book.model';

export const booksCatalogue: IBook[] = [
  {
    id: 1,
    name: 'Believe It',
    description: 'Are you ready to believe in you?',
    price: 19.08,
    category: EBookCategory.biographies,
    author: 'Jamie Kern Lima',
    createDate: 2021,
    isAvailable: true,
    img: '/assets/book_covers/book_believe_it.jpg',
  },
  {
    id: 2,
    name: 'A Promised Land',
    description:
      'A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy',
    price: 23.97,
    category: EBookCategory.biographies,
    author: 'Barack Obama',
    createDate: 2020,
    isAvailable: false,
    img: './assets/book_covers/book_a_promised_land.jpg',
  },
  {
    id: 3,
    name: 'Becoming',
    description: 'An intimate, powerful, and inspiring memoir by the former First Lady of the United States',
    price: 12.83,
    category: EBookCategory.biographies,
    author: 'Michelle Obama',
    createDate: 2018,
    isAvailable: true,
    img: './assets/book_covers/book_becoming.jpg',
  },
  {
    id: 4,
    name: 'Nomadland: Surviving America in the Twenty-First Century',
    description: 'The inspiration for Chloé Zhao 2020 Golden Lion award-winning film starring Frances McDormand.',
    price: 16.35,
    category: EBookCategory.travel,
    author: 'Jessica Bruder',
    createDate: 2017,
    isAvailable: true,
    img: './assets/book_covers/book_nomadland.jpg',
  },
];

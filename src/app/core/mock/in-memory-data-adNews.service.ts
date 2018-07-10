import {InMemoryDbService} from 'angular-in-memory-web-api';
import { AdNewsModel } from "../models";

export class InMemoryDataAdNewsService implements InMemoryDbService {
  createDb() {
    const adNews: AdNewsModel[] = [
      {
        id: 1,
        imgUrl: 'https://felt.co.nz/listing-images/full/408093',
        title: ' Bold animal print, Minimal art, Wall art',
        subTitle: 'Fox portrait, Geometric print, Original illustration'
      },
      {
        id: 2,
        imgUrl: 'http://d111vui60acwyt.cloudfront.net/product_photos/53265464/breath_of_the_wild_by_adamscythe-dami9up_original.jpg',
        title: ' Breath of the Wild - Zelda Fan Art ',
        subTitle: 'Original Watercolor Painting'
      },
      {
        id: 3,
        imgUrl: 'https://i2.wp.com/www.cartwheelart.com/site/wp-content/uploads/2018/01/49-Romero.jpg?w=600',
        title: ' Breath of the Wild - Zelda Fan Art ',
        subTitle: 'Original Watercolor Painting'
      },
    ];
    return {adNews};
  }
}

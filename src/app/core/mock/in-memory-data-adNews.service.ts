import {InMemoryDbService} from 'angular-in-memory-web-api';
import {AdNewsModel} from '../models';

export class InMemoryDataAdNewsService implements InMemoryDbService {
  createDb() {
    const adNews: AdNewsModel[] = [
      {
        id: 1,
        imgUrl: 'http://www.wtcf.org.cn/uploadfile/2017/1207/20171207102646187.jpg',
        title: ' Macao Launches Light Festival',
        subTitle: 'Macao Light Festival 2017 was unveiled at the Ruins of St.'
      },
      {
        id: 2,
        imgUrl: 'http://d111vui60acwyt.cloudfront.net/product_photos/53265464/breath_of_the_wild_by_adamscythe-dami9up_600w.jpg',
        title: ' Breath of the Wild - Zelda Fan Art ',
        subTitle: 'Original Watercolor Painting'
      },
      {
        id: 3,
        imgUrl: 'https://i2.wp.com/www.cartwheelart.com/site/wp-content/uploads/2018/01/49-Romero.jpg?w=600',
        title: 'Amazing Landscape Photography of Mongolia',
        subTitle: 'Original Watercolor Painting'
      },
    ];
    return {adNews};
  }
}

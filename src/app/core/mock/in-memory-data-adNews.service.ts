import {InMemoryDbService} from 'angular-in-memory-web-api';
import {AdNewsModel, ApiModel, NewsModel, MemoModel} from '../models';

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
    const APIs: ApiModel[] = [
      {
        name: 'Flight Information Board',
        url: './fib',
        icon: 'https://png.icons8.com/cotton/2x/travel-by-plane.png'
      },
      {
        name: 'OA',
        url: './oa',
        icon: 'https://png.icons8.com/color/2x/blockchain-technology.png'
      },
      {
        name: 'DMS',
        url: './oa',
        icon: 'https://png.icons8.com/color/2x/document-footer.png'
      },
      {
        name: 'ILearning',
        url: './oa',
        icon: 'https://png.icons8.com/color/2x/graduation-cap.png'
      },
      {
        name: 'ETickets',
        url: './oa',
        icon: 'https://png.icons8.com/dusk/2x/passenger-with-baggage.png'
      },
      {
        name: 'EHR',
        url: './oa',
        icon: 'https://png.icons8.com/dusk/2x/groups.png'
      },
    ];
    const News: NewsModel[] = [
      {
        id: 1,
        title: 'Merkel Asks Mueller If There’s Anything She Can Do to Help',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 2,
        title: 'World Cup 2018: The Tragicomic Opera of Croatia’s Mario Mandzukic',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 3,
        title: 'Merkel Asks Mueller If There’s Anything She Can Do to Help',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 4,
        title: 'How Trump\'s disdain for NATO could help Putin',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 5,
        title: 'Merkel Asks Mueller If There’s Anything She Can Do to Help',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 6,
        title: 'FBI lawyer Page threatened to be held in contempt for defying subpoena',
        url: '/',
        time: '2018-08-26',
      },
    ];
    const Memos: MemoModel[] = [
      {
        id: 1,
        title: 'Lisa Page and Taylor Swift were both no-shows at US Capitol',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 2,
        title: 'Martin Duberman on What the Gay-Rights Movement Has Lost\n',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 3,
        title: 'Ottessa Moshfegh’s Otherworldly Fiction',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 4,
        title: 'My Grandmother’s Desperate Choice',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 5,
        title: 'She Can Do to Help',
        url: '/',
        time: '2018-08-26',
      },
      {
        id: 6,
        title: 'Love, War, and Sandwiches',
        url: '/',
        time: '2018-08-26',
      },
    ];
    return {adNews, APIs, News, Memos};
  }
}

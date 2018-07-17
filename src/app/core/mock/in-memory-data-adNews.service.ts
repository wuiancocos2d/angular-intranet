import {InMemoryDbService} from 'angular-in-memory-web-api';
import {AdNewsModel, ApiModel, NewsModel, MemoModel, ContactModel} from '../models';

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
    const Contacts: ContactModel[] = [
      {
        id: '04652',
        cn_name: 'Chen Hong',
        en_name: '',
        gender: 'male',
        job_title: 'Chief Executive Officer',
        job_level: 22,
        telephone: '8396 6111',
        apt: '8898 3288',
        cell: '6386 2299',
        department: 'CEO Office',
        division: '',
        email: 'chenhong@airmacau.com.mo',
        address: 'MFM HDQ 18-A MFM NXOB 2F'
      },
      {
        id: '04632',
        cn_name: 'Cheong Siu Peng, Lorita ',
        en_name: '',
        gender: 'female',
        department: 'CEO Office',
        division: '',
        job_title: 'Chief Executive Officer',
        job_level: 21,
        telephone: '8396 6111',
        apt: '8898 3288',
        cell: '6386 2299',
        email: 'chenhong@airmacau.com.mo',
        address: 'MFM HDQ 18-A'
      },
      {
        id: '04852',
        cn_name: 'Wen Dexin',
        en_name: '',
        gender: 'mail',
        department: 'CEO Office',
        division: 'Corporate Quality',
        job_title: 'General Manager - Corporate Quality (ACEO)',
        job_level: 22,
        telephone: '8396 6070',
        apt: '',
        cell: '6650 8877',
        email: 'dexin@airmacau.com.mo',
        address: 'MFM HDQ 18-A'
      },
      {
        id: '04622',
        cn_name: 'Noronha ',
        en_name: 'Ana Maria',
        gender: 'female',
        department: 'CEO Office',
        division: 'Corporate Quality',
        job_title: 'Corporate Quality Executive (AOC/Operations Specification)',
        job_level: 21,
        telephone: '8396 6249',
        apt: '',
        cell: '6527 7739',
        email: 'ana.noronha@airmacau.com.mo',
        address: 'MFM HDQ 18-A'
      },
      {
        id: '04332',
        cn_name: 'Liao Hanxi ',
        en_name: '',
        gender: 'female',
        department: 'Commercial',
        division: '',
        job_title: 'Vice President, Commercial',
        job_level: 22,
        telephone: '8396 6200',
        apt: '',
        cell: '6356 5577',
        email: 'liaohanxi@airmacau.com.mo',
        address: ''
      },
      {
        id: '03652',
        cn_name: 'Wang Yu',
        en_name: '',
        gender: 'mail',
        department: 'Commercial',
        division: 'Cargo Sales',
        job_title: 'General Manager - Corporate Quality (ACEO)',
        job_level: 22,
        telephone: '8396 6190',
        apt: '',
        cell: '6388 6737',
        email: 'dexin@airmacau.com.mo',
        address: 'MFM HDQ 18-A'
      },
      {
        id: '02652',
        cn_name: 'Noronha ',
        en_name: 'Ana Maria',
        gender: 'female',
        department: 'CEO Office',
        division: 'Corporate Quality',
        job_title: 'Corporate Quality Executive (AOC/Operations Specification)',
        job_level: 21,
        telephone: '8396 6249',
        apt: '',
        cell: '6527 7739',
        email: 'ana.noronha@airmacau.com.mo',
        address: 'MFM HDQ 18-A'
      },
    ];
    return {adNews, APIs, News, Memos, Contacts};
  }
}

import {App, IonicApp, Platform} from 'ionic/ionic';

import {SearchPage} from './pages/search/search';
import {MostPopularPage} from './pages/mostPopular/mostPopular';
import {FavouritesPage} from './pages/favourites/favourites';

import {GifSearch} from './providers/gif-search';

@App({
    templateUrl: 'build/app.html',
    providers: [GifSearch]
})
class MyApp {
    constructor(app:IonicApp, platform:Platform) {
        this.app = app;
        this.platform = platform;
        this.initializeApp();

        // set our app's pages
        this.pages = [
            {title: 'Top GIFs', component: MostPopularPage},
            {title: 'Search', component: SearchPage},
            {title: 'Favourites', component: FavouritesPage}
        ];

        this.rootPage = SearchPage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            if (typeof StatusBar !== 'undefined') {
                StatusBar.styleDefault();
            }
        });
    }

    openPage(page) {
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component).then(() => {
            this.app.getComponent('leftMenu').close();
        });
    }
}

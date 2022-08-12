import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbChartModule } from 'mdb-angular-ui-kit/charts';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbInfiniteScrollModule } from 'mdb-angular-ui-kit/infinite-scroll';
import { MdbLazyLoadingModule } from 'mdb-angular-ui-kit/lazy-loading';
import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbLoadingModule } from 'mdb-angular-ui-kit/loading';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';
import { MdbPopconfirmModule } from 'mdb-angular-ui-kit/popconfirm';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRatingModule } from 'mdb-angular-ui-kit/rating';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbSmoothScrollModule } from 'mdb-angular-ui-kit/smooth-scroll';
import { MdbStepperModule } from 'mdb-angular-ui-kit/stepper';
import { MdbStickyModule } from 'mdb-angular-ui-kit/sticky';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTimepickerModule } from 'mdb-angular-ui-kit/timepicker';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbCalendarModule } from 'mdb-angular-calendar';
import { MdbWysiwygModule } from 'mdb-angular-wysiwyg';
import { MdbDragAndDropModule } from 'mdb-angular-drag-and-drop';
import { MdbVectorMapModule } from 'mdb-angular-vector-maps';
import { MdbFileUploadModule } from 'mdb-angular-file-upload';
import { MdbTreeviewModule } from 'mdb-angular-treeview';
import { MdbTransferModule } from 'mdb-angular-transfer';
import { MdbMentionModule } from 'mdb-angular-mention';
import { MdbCookiesManagementService } from 'mdb-angular-cookies-management';
import { MdbStorageManagementService } from 'mdb-angular-storage-management';
import { WeatherPanelComponent } from './components/home/weather-panel/weather-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { NewsComponent } from './components/news/news.component';

import { MenuComponent } from './components/menu/menu.component';

import { HotNewsComponent } from './components/home/hot-news/hot-news.component';

import { NewsRowComponent } from './components/news-row/news-row.component';


import { NewsItemComponent } from './components/home/box-news-content/box-news/news-item/news-item.component';


import { VietlottComponent } from './components/home/box-news-content/box-cate-content/vietlott/vietlott.component';



import { BoxCateContentComponent } from './components/home/box-news-content/box-cate-content/box-cate-content.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { BoxNewsContentComponent } from './components/home/box-news-content/box-news-content.component';
import { BoxNewsComponent } from './components/home/box-news-content/box-news/box-news.component';

import { BoxCateHomeComponent } from './components/home/box-cate-home/box-cate-home.component';

import { BoxHomeNgangComponent } from './components/home/box-home-ngang/box-home-ngang.component';
import { BoxNewsItemComponent } from './components/home/box-home-ngang/box-news-item/box-news-item.component';
import { BoxLocationsComponent } from './components/home/box-locations/box-locations.component';
import { BoxMediaComponent } from './components/home/box-media/box-media.component';
import { ItemComponent } from './components/news-row/item/item.component';

import { BoxNewsDetailComponent } from './components/box-news-detail/box-news-detail.component';
import { HeaderNewsDetailComponent } from './components/box-news-detail/header-news-detail/header-news-detail.component';
import { RelatedNewsComponent } from './components/box-news-detail/related-news/related-news.component';

import { BoxSameCategoryNewsComponent } from './components/box-news-detail/box-same-category-news/box-same-category-news.component';
import {ServerService} from "./services/server.service";
import { NewsListComponent } from './components/news/news-list/news-list.component';
import {NewsDetailComponent} from "./components/news/news-detail/news-detail.component";
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';








@NgModule({
  declarations: [
    AppComponent,
    WeatherPanelComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    MenuComponent,
    NewsDetailComponent,
      HotNewsComponent,
    BoxCateContentComponent,
      NewsRowComponent,
        NewsItemComponent,


        VietlottComponent,
                  BoxNewsContentComponent,
                  BoxNewsComponent,

                  BoxCateHomeComponent,

                  BoxHomeNgangComponent,
                  BoxNewsItemComponent,
                  BoxLocationsComponent,
                  BoxMediaComponent,
                  ItemComponent,

                  BoxNewsDetailComponent,
                  HeaderNewsDetailComponent,

                  BoxMediaComponent,
                  ItemComponent,

                  RelatedNewsComponent,
                    BoxSameCategoryNewsComponent,
                    NewsListComponent,
                    LoginComponent,
                    ErrorComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbAutocompleteModule,
    MdbCarouselModule,
    MdbChartModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDatepickerModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbInfiniteScrollModule,
    MdbLazyLoadingModule,
    MdbLightboxModule,
    MdbLoadingModule,
    MdbModalModule,
    MdbNotificationModule,
    MdbPopconfirmModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRatingModule,
    MdbRippleModule,
    MdbScrollbarModule,
    MdbScrollspyModule,
    MdbSelectModule,
    MdbSidenavModule,
    MdbSmoothScrollModule,
    MdbStepperModule,
    MdbStickyModule,
    MdbTableModule,
    MdbTabsModule,
    MdbTimepickerModule,
    MdbTooltipModule,
    MdbValidationModule,
    MdbCalendarModule,
    MdbWysiwygModule,
    MdbDragAndDropModule,
    MdbVectorMapModule,
    MdbFileUploadModule,
    MdbTreeviewModule,
    MdbTransferModule,
    MdbMentionModule,
    AppRoutingModule,
    LoadingBarRouterModule
  ],
  providers: [MdbCookiesManagementService, MdbStorageManagementService,ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

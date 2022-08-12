import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewsComponent} from "./components/news/news.component";
import {NewsDetailComponent} from "./components/news/news-detail/news-detail.component";
import {AdvertismentComponent} from "./components/advertisment/advertisment.component";
import {LoginComponent} from "./components/login/login.component";
import {ErrorComponent} from "./components/error/error.component";
// import {BoxNewsDetailComponent} from "./components/box-news-detail/box-news-detail.component";

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'home/:id', component:NewsDetailComponent},
  {path: 'signup', component:LoginComponent},
  {path: '**', component:ErrorComponent}
  // { path: 'home',
  //   component: HomeComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'domestic', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'international', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // //cong doan
  // { path: 'union', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // //ban doc
  // { path: 'reader', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'economic', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'health', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'education', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'law', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'arts', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'entertainment', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'sport', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'technology', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'green-tour', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'women', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
  // { path: 'real-estate', component:NewsComponent,
  //   children :[
  //     {
  //       path: ':id',
  //       component: NewsDetailComponent
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

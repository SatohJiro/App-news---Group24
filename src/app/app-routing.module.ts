
import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, RouteReuseStrategy} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewsDetailComponent} from "./components/news/news-detail/news-detail.component";
import {LoginComponent} from "./components/login/login.component";
import {ErrorComponent} from "./components/error/error.component";

import {BoxNewsDetailComponent} from "./components/box-news-detail/box-news-detail.component";
import {RedirectDetailComponent} from "./components/redirect-detail/redirect-detail.component";
import {CustomRouteReuseStrategy} from "./custom-route-reuse-strategy.service";
import {TrongNuocComponent} from "./components/trong-nuoc/trong-nuoc.component";

const routes: Routes = [
  {path: '', redirectTo:'trang-chu',pathMatch:'full'},
  {path: 'trang-chu', component:HomeComponent},
  {path: 'trang-chu/:id', component:NewsDetailComponent},
  {path: 'trong-nuoc', component:TrongNuocComponent},
  {path: 'dang-nhap', component:LoginComponent},
  {path: '**', component:ErrorComponent},
  {path: 'detail/:link', component: BoxNewsDetailComponent},
  {path: 'mostView/:link', component: RedirectDetailComponent},
  {path: 'signup', component: LoginComponent},
  {path: '**', component: ErrorComponent},

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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy,
  }],
})
export class AppRoutingModule {
}

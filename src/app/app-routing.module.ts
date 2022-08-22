
import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, RouteReuseStrategy} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewsDetailComponent} from "./components/news/news-detail/news-detail.component";
import {LoginComponent} from "./components/login/login.component";
import {ErrorComponent} from "./components/error/error.component";

import {BoxNewsDetailComponent} from "./components/box-news-detail/box-news-detail.component";
import {RedirectDetailComponent} from "./components/redirect-detail/redirect-detail.component";
import {TrongNuocComponent} from "./components/trong-nuoc/trong-nuoc.component";
import {CanReadVipNewsGuard} from "./can-read-vip-news.guard";
import {CatNewsPageComponent} from "./components/cat-news-page/cat-news-page.component";
import {SearchComponent} from "./components/search/search.component";
import {RedirectCategoryComponent} from "./components/redirect-category/redirect-category.component";



const routes: Routes = [
  {path: '', redirectTo:'trang-chu',pathMatch:'full'},
  {path: 'trang-chu', component:HomeComponent},
  {path: 'dang-nhap', component:LoginComponent},
  {path: 'chi-tiet/:link', component: BoxNewsDetailComponent},
  {path: 'chi-tiet/vip/:link', component: BoxNewsDetailComponent, canActivate: [CanReadVipNewsGuard]},
  {path: 'mostView/:link', component: RedirectDetailComponent},
  {path: 'tim-kiem', component: SearchComponent},



  {path: 'the-loai-redirect/:RSS', component:RedirectCategoryComponent},
  {path: 'the-loai/:RSS', component:CatNewsPageComponent},

  {path: '**', component:ErrorComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {
}

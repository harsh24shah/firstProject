import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { NewsComponent } from './news/news.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

const routes: Routes = [
{
  path: '',
  component: ListingComponent
},
{
  path:'news',
  component: NewsComponent
},
{
  path:'custompipe',
  component: CustomPipeComponent
},
{
  path:'directive',
  component: CustomDirectiveComponent
}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

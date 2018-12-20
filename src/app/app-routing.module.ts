import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingComponent } from './listing/listing.component';
import { ApicallComponent } from './apicall/apicall.component';


const routes: Routes = [
{
  path: '',
  component: ListingComponent
},
{ path: 'apicall',
  component: ApicallComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './mycomponents/about/about.component';

export const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

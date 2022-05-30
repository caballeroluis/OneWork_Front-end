import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ // TODO: meter role guards
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
  },
  {
    path: 'board',
    loadChildren: () => import('./sections/board/board.module').then( m => m.BoardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./sections/admin/admin.module').then( m => m.AdminModule)
  },
  {
    path: 'session',
    loadChildren: () => import('./sections/session/session.module').then( m => m.SessionModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

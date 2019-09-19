import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './framework/components/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      /*{
        path: 'users',
        component: UserViewComponent
      },
      {
        path: 'users/new',
        component: UserCreateComponent
      },
      {
        path: 'users/:id',
        component: UserEditComponent
      },*/
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

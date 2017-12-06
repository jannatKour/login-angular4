import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component'
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';

const appRoutes:Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    children: [
      {
        path: ':name',
        component: UserComponent
      },
      {
         path: ':name/:id',
         component: UserComponent
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: 'login',
    // redirectTo: 'login',
    pathMatch: 'full',
    component: LoginFormComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    AuthguardGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

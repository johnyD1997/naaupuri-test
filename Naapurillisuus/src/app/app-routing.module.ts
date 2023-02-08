import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { HelperFormComponent } from './helper-form/helper-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HelperDashboardComponent } from './helper-dashboard/helper-dashboard.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'helper-form', component: HelperFormComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'helper-dashboard', component: HelperDashboardComponent, canActivate: [AuthGuard] },
  { path: 'my-tasks', component: MyTasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormuleListComponent } from './formule-list/formule-list.component';
import { LoggingComponent } from './logging/logging.component';
import { AuthGuardService } from './shared/auth-guard.service';


const routes: Routes = [
  { path: 'clientlogin', component: LoggingComponent },
  { path: 'gerervoyage', component: FormuleListComponent,canActivate:[AuthGuardService] },
  { path: 'formulelist', component: FormuleListComponent },
  { path: '**', redirectTo: 'formulelist' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

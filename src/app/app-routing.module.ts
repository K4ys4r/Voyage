import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormuleListComponent } from './formule-list/formule-list.component';
import { LoggingComponent } from './logging/logging.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { FormuleDetailsComponent } from './formule-details/formule-details.component';


const routes: Routes = [
  { path: 'clientlogin', component: LoggingComponent },
  { path: 'gerervoyage', component: FormuleListComponent,canActivate:[AuthGuardService] },
  { path: 'formulelist', component: FormuleListComponent },
  {path: 'formule/:id',component: FormuleDetailsComponent},
  { path: '**', redirectTo: 'formulelist' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

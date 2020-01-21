import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormuleListComponent } from './formule-list/formule-list.component';
import { LoggingComponent } from './logging/logging.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { FormuleDetailsComponent } from './formule-details/formule-details.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PaiementComponent } from './paiement/paiement.component';
import { GererMesVoyagesComponent } from './gerer-mes-voyages/gerer-mes-voyages.component';


const routes: Routes = [
  { path: 'clientlogin', component: LoggingComponent },
  { path: 'reservervoyage/:id', component: FormulaireComponent },
  { path: 'gerervoyage', component: GererMesVoyagesComponent, canActivate:[AuthGuardService] },
  { path: 'formulelist', component: FormuleListComponent },
  {path: 'formule/:id',component: FormuleDetailsComponent},
  {path:'paiement',component:PaiementComponent},
  { path: '**', redirectTo: 'formulelist' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

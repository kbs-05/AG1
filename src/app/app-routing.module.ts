import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./fruits/fruits.module').then( m => m.FRUITSPageModule)
  },
  {
    path: 'legumes',
    loadChildren: () => import('./legumes/legumes.module').then( m => m.LEGUMESPageModule)
  },
  {
    path: 'viande',
    loadChildren: () => import('./viande/viande.module').then( m => m.VIANDEPageModule)
  },
  {
    path: 'poisson',
    loadChildren: () => import('./poisson/poisson.module').then( m => m.POISSONPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.PRODUITSPageModule)
  },
  {
    path: 'cereales',
    loadChildren: () => import('./cereales/cereales.module').then( m => m.CEREALESPageModule)
  },
  {
    path: 'epices',
    loadChildren: () => import('./epices/epices.module').then( m => m.EPICESPageModule)
  },
  {
    path: 'boissons',
    loadChildren: () => import('./boissons/boissons.module').then( m => m.BOISSONSPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.CONNEXIONPageModule)
  },
  {
    path: 'c-compte',
    loadChildren: () => import('./c-compte/c-compte.module').then( m => m.CCOMPTEPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.PROFILPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'pv',
    loadChildren: () => import('./pv/pv.module').then( m => m.PVPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then( m => m.CLIENTSPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./commandes/commandes.module').then( m => m.COMMANDESPageModule)
  },
  {
    path: 'npv',
    loadChildren: () => import('./npv/npv.module').then( m => m.NPVPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

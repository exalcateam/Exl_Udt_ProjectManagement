import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path:'auth-module',
    loadChildren:() => import('./auth-module/auth-module.module').then(a => a.AuthModuleModule)
  },
 
  {
    path:'webpage-module',
    loadChildren:()=>import('./webpage-module/webpage-module.module').then(a=>a.WebpageModuleModule)
  },
  
  {
    path:'',
    redirectTo:'auth-module',
    pathMatch:'full'
  },
  {
    path:'create',
    component:CreateComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
  
}

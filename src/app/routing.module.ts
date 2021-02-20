import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorksComponent } from './components/works/works.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'acerca', component: AboutComponent },
  { path: 'proyectos', component: WorksComponent  },
  { path: 'habilidades', component: SkillsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo:'about' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}

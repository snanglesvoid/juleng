import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/pages/home/home.component'
import { ProjectsComponent } from './components/pages/projects/projects.component'
import { CvComponent } from './components/pages/cv/cv.component'
import { ClayBodyComponent } from './components/pages/projects/clay-body/clay-body.component'
import { PasteInPlaceComponent } from './components/pages/projects/paste-in-place/paste-in-place.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/clay-body',
    component: ClayBodyComponent,
  },
  {
    path: 'projects/paste-in-place',
    component: PasteInPlaceComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

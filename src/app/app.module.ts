import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/pages/home/home.component'
import { CvComponent } from './components/pages/cv/cv.component'
import { ProjectsComponent } from './components/pages/projects/projects.component'
import { ClayBodyComponent } from './components/pages/projects/clay-body/clay-body.component'
import { NavComponent } from './components/nav/nav.component'
import { LayoutComponent } from './components/layout/layout.component'
import { ThreeDHeadingComponent } from './components/three-d-heading/three-d-heading.component';
import { TextFlipComponent } from './components/common/text-flip/text-flip.component';
import { PasteInPlaceComponent } from './components/pages/projects/paste-in-place/paste-in-place.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    ProjectsComponent,
    ClayBodyComponent,
    NavComponent,
    LayoutComponent,
    ThreeDHeadingComponent,
    TextFlipComponent,
    PasteInPlaceComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

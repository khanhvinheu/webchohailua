import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { ShareModule } from 'src/app/share/share.module';
import { PageRoutingModule } from '../page-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlideComponent } from './slide/slide.component';
import { SanphammoiComponent } from './sanphammoi/sanphammoi.component';
import { LoadingModule } from '../loading/loading.module';
import { SlidenhacungcapComponent } from './slidenhacungcap/slidenhacungcap.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SlideComponent,
    SanphammoiComponent,
    SlidenhacungcapComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    PageRoutingModule,
    SlickCarouselModule,
    LoadingModule
  ],
  exports:[
    HomepageComponent,
    SlideComponent,
    SanphammoiComponent
  ]
})
export class HomepageModule { }

import { Component } from '@angular/core';
import { LandingHomeHeroComponent } from './ui/landing-home-hero/landing-home-hero.component';
import { LandingHomeDescriptionComponent } from './ui/landing-home-description/landing-home-description.component';
import { LandingHomeContactComponent } from './ui/landing-home-contact/landing-home-contact.component';
import { LandingHomeFooterComponent } from './ui/landing-home-footer/landing-home-footer.component';

@Component({
  selector: 'app-landing-home',
  imports: [
    LandingHomeHeroComponent,
    LandingHomeDescriptionComponent,
    LandingHomeContactComponent,
    LandingHomeFooterComponent,
  ],
  template: `
    <section class="flex flex-col">
      <app-landing-home-hero />
      <app-landing-home-description />
      <app-landing-home-contact />
      <app-landing-home-footer />
    </section>
  `,
  styles: ``,
})
export class LandingHomeComponent {}

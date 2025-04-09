import { Component } from '@angular/core';
import { LandingHomeHeroHeaderComponent } from '../landing-home-hero-header/landing-home-hero-header.component';
import { LandingHomeHeroContentComponent } from '../landing-home-hero-content/landing-home-hero-content.component';
import { LandingHomeHeroCtaComponent } from '../landing-home-hero-cta/landing-home-hero-cta.component';

@Component({
  selector: 'app-landing-home-hero',
  imports: [
    LandingHomeHeroHeaderComponent,
    LandingHomeHeroContentComponent,
    LandingHomeHeroCtaComponent,
  ],
  template: `
    <section
      class="flex flex-col items-center h-screen  lg:gap-20 md:gap-5 justify-between md:justify-start"
      style='background-image: url(&apos;data:image/svg+xml;utf8,<svg width="1440" height="716" viewBox="0 0 1440 716" fill="none" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode:soft-light"><path d="M648.5 355.5C331.88 563.187 134.4 406.927 -2.2169e-05 507.167L7.8844e-06 716L1440 716L1440 6.29444e-05C1260.48 13.3367 1242.29 143.949 1194.51 241.053C1109.6 509.717 804 253.5 648.5 355.5Z" fill="url(%23paint0_linear_9_685)"/></g><defs><linearGradient id="paint0_linear_9_685" x1="340.295" y1="417.561" x2="445.314" y2="-267.573" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFA3ED"/><stop offset="0.401042" stop-color="%23AF93FF"/><stop offset="0.703125" stop-color="%236FD4FF"/><stop offset="1" stop-color="%2351A6FF"/></linearGradient></defs></svg>&apos;); background-position: right bottom; background-repeat: no-repeat; background-size: cover;'
    >
      <app-landing-home-hero-header class="w-full " />
      <app-landing-home-hero-content />
      <app-landing-home-hero-cta />
    </section>
  `,
  styles: ``,
})
export class LandingHomeHeroComponent {}

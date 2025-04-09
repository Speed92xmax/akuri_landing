import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-home-hero-content',
  imports: [],
  template: `
    <section
      class="flex flex-col md:flex-row container justify-between w-full gap-10 mt-10"
    >
      <div
        class="flex flex-col gap-3 md:gap-0 md:w-3/6 text-center md:text-left px-3 md:justify-between"
      >
        <h1 class="text-[40px] md:text-[50px] lg:text-[60px] font-hoves-demi">
          Transforma tu empresa con soluciones tecnológicas a medida
        </h1>
        <p class="text-[18px] md:text-[24px] lg:text-[32px]">
          Conectamos, optimizamos y potenciamos tus sistemas operativos con
          innovación y escalabilidad.
        </p>
      </div>

      <img
        class="w-2/3 md:w-2/6 h-full object-contain self-center"
        src="assets/images/hero_content_img.png"
        alt=""
      />
    </section>
  `,
  styles: ``,
})
export class LandingHomeHeroContentComponent {}

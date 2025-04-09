import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-home-hero-header',
  imports: [],
  template: `
    <section class="flex flex-col items-center">
      <div class="w-full h-[35px] bg-base-black"></div>
      <div class="flex flex-col relative">
        <img
          class=" absolute bottom-3 left-1/2 -translate-x-1/2 w-1/3"
          src="assets/images/hero_logo.png"
          alt=""
        />
        <svg
          class="lg:w-[433px] lg:h-[56px] w-[233px] h-[26px]"
          viewBox="0 0 433 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C10.0782 0 19.7437 4.00356 26.87 11.1299L60.6102 44.8701C67.7366 51.9965 77.402 56 87.4802 56H345C355.078 56 364.744 51.9965 371.87 44.8701L405.61 11.1299C412.737 4.00356 422.402 0 432.48 0H0Z"
            fill="#151515"
          />
        </svg>
      </div>
    </section>
  `,
  styles: ``,
})
export class LandingHomeHeroHeaderComponent {}

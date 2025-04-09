import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-home-footer',
  imports: [],
  template: `
    <section class="flex flex-col items-center">
      <img
        src="assets/images/notch_bottom.png"
        class="w-3/4 sm:w-auto"
        alt=""
      />
      <div class="bg-base-black w-full flex justify-center py-4">
        <div
          class="container flex flex-col gap-6 items-center justify-center text-white"
        >
          <h3 class="text-2xl font-hoves-demi text-[#26BEFF]">Akuri</h3>
          <p class="text-center text-sm sm:text-lg px-5 sm:px-0">
            Tu aliado en innovación tecnológica, donde las soluciones se adaptan
            a tus desafíos.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-around items-center gap-y-4 w-full sm:w-1/2"
          >
            <div class="flex gap-2 items-center">
              <span class="icon-[tabler--mail]"></span>
              <p>Contacto&#64;akuri.com</p>
            </div>

            <div class="flex gap-2 items-center">
              <span class="icon-[hugeicons--internet]"></span>
              <a
                href="http://www.akuri.io"
                target="_blank"
                rel="noopener noreferrer"
                >www.akuri.io</a
              >
            </div>
          </div>
          <p class="text-sm text-center">
            Copyright 2025 Akuri. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class LandingHomeFooterComponent {}

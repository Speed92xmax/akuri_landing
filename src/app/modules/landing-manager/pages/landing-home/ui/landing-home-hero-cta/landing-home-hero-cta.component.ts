import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-home-hero-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="scrollToDescription()"
      class="flex items-center justify-between 
             gap-3 sm:gap-5 md:gap-8 lg:gap-10
             px-5 sm:px-6 md:px-8 lg:px-10 
             py-3 sm:py-4 md:py-5
             bg-light-dark rounded-lg sm:rounded-xl
             text-white 
             text-lg sm:text-xl md:text-2xl
             transition-all duration-300 ease-in-out
             hover:bg-opacity-90 hover:scale-105
             active:scale-95 focus:outline-none"
    >
      <p>¡Conócenos!</p>

      <svg
        class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 arrow-animation"
        viewBox="0 0 47 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_9_702)">
          <path
            d="M9.08208 23.3734C9.08208 31.3361 15.5371 37.7911 23.4998 37.7911C31.4625 37.7911 37.9175 31.3361 37.9175 23.3734C37.9175 15.4107 31.4625 8.95569 23.4998 8.95569C15.5371 8.95569 9.08208 15.4107 9.08208 23.3734Z"
            fill="#151515"
          />
          <path
            d="M10.0863 39.3666C6.7091 36.5342 4.3152 32.7055 3.2477 28.429C2.1801 24.1525 2.4937 19.6479 4.1435 15.5606C5.7933 11.4733 8.69461 8.01313 12.4317 5.67598C16.1687 3.33883 20.5497 2.24465 24.9468 2.55024C29.3439 2.85583 33.5314 4.5455 36.9092 7.37711C40.2871 10.2087 42.6818 14.0369 43.7504 18.3132C44.8189 22.5894 44.5064 27.0941 42.8576 31.1818C41.2087 35.2695 38.3082 38.7303 34.5717 41.0683"
            stroke="#26BEFF"
            stroke-width="4"
          />
          <path
            d="M23.2842 14.5505L23.2842 32.1961"
            stroke="#FFA3ED"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M29.7397 26.1707L23.4381 32.4724L17.1364 26.1707"
            stroke="#FFA3ED"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_702">
            <rect
              width="43"
              height="46"
              fill="white"
              transform="translate(46.5 0.5) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  `,
  styles: `
    :host {
      display: block;
    }

    @keyframes subtleArrowBounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(3px);
      }
    }

    .arrow-animation {
      animation: subtleArrowBounce 2s ease-in-out infinite;
    }

    button:hover .arrow-animation {
      animation-duration: 1.5s;
    }
  `,
})
export class LandingHomeHeroCtaComponent {
  // Método para desplazarse a la sección de descripción
  scrollToDescription(): void {
    const element = document.getElementById('contact_us');
    if (element) {
      this.smoothScrollTo(element);
    }
  }

  // Implementación personalizada de scroll suave con más control sobre la animación
  private smoothScrollTo(element: HTMLElement): void {
    const startPosition = window.pageYOffset;
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Mayor duración para scroll más suave (milisegundos)
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuart(
        timeElapsed,
        startPosition,
        distance,
        duration
      );
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Función de aceleración para una animación más suave
    function easeInOutQuart(
      t: number,
      b: number,
      c: number,
      d: number
    ): number {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t * t + b;
      t -= 2;
      return (-c / 2) * (t * t * t * t - 2) + b;
    }

    requestAnimationFrame(animation);
  }
}

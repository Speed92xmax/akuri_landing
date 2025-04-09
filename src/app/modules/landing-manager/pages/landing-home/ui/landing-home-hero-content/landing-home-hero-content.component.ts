import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-home-hero-content',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section
      class="flex flex-col md:flex-row 
             container mx-auto px-4 sm:px-6 lg:px-8
             justify-between w-full 
             gap-6 sm:gap-8 md:gap-10 
             mt-6 sm:mt-8 md:mt-10"
    >
      <div
        class="flex flex-col 
               gap-3 sm:gap-4 md:gap-5 
               w-full md:w-1/2 lg:w-3/5 
               text-center md:text-left 
               md:justify-between
               animate-text"
      >
        <h1
          class="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 
                   font-hoves-demi leading-[38px] sm:leading-[75px] "
        >
          <span class="text-[#ffc4f3]">Transforma</span> tu empresa con
          soluciones tecnológicas
          <span class="text-[#335de6bd]">a medida</span>
        </h1>
        <p
          class="text-[20px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[32px] 
                  mt-3 md:mt-5 lg:mt-8 
                  "
        >
          Conectamos, optimizamos y potenciamos tus sistemas operativos con
          innovación y escalabilidad.
        </p>
      </div>

      <div
        class="flex justify-center md:justify-end items-center md:w-1/2 lg:w-2/5"
      >
        <div
          class="w-2/3 sm:w-3/5 md:w-4/5 lg:w-5/6 animate-image lottie-container"
        >
          <dotlottie-player
            src="https://lottie.host/d22d69ed-659a-47f6-ae0a-186ed00b4cb1/fipR2uCPYQ.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    .animate-text {
      animation: fade-in-text 0.9s ease-out forwards;
      opacity: 0;
    }

    @keyframes fade-in-text {
      0% {
        opacity: 0;
        transform: translateY(15px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-image {
      animation: fade-in-image 0.9s ease-out forwards;
      animation-delay: 0.6s;
      opacity: 0;
    }

    @keyframes fade-in-image {
      0% {
        opacity: 0;
        transform: translateX(20px) scale(0.98);
      }
      100% {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }

    .lottie-container {
      max-height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 640px) {
      .lottie-container {
        max-height: 350px;
      }
    }

    @media (min-width: 768px) {
      .lottie-container {
        max-height: none;
      }
    }

    dotlottie-player {
      width: 100%;
      height: 100%;
      min-height: 250px;
    }
  `,
})
export class LandingHomeHeroContentComponent implements OnDestroy {
  // Implementación del método OnDestroy para garantizar la limpieza adecuada
  ngOnDestroy(): void {
    // Ayuda a Angular a manejar la limpieza del elemento dotlottie-player
    console.log('Hero content component destroyed properly');

    // Obtener y limpiar referencias a elementos de animación si existen
    const lottieElements = document.querySelectorAll('dotlottie-player');
    if (lottieElements && lottieElements.length > 0) {
      // Intentar detener las animaciones antes de eliminar
      lottieElements.forEach((element) => {
        try {
          // Usar una interfaz para acceder a los métodos de dotlottie-player
          const lottieElement = element as unknown as { stop: () => void };
          if (lottieElement && typeof lottieElement.stop === 'function') {
            lottieElement.stop();
          }
        } catch (e) {
          console.log('Error al detener animación:', e);
        }
      });
    }
  }
}

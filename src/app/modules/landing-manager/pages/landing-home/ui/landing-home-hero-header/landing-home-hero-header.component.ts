import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-home-hero-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="flex flex-col items-center w-full">
      <div class="top-bar-container">
        <div class="top-bar animate-circle-to-bar"></div>
      </div>
      <div class="flex flex-col relative w-full items-center svg-container">
        <img
          class="absolute bottom-1 sm:bottom-2 md:bottom-3 left-1/2 transform -translate-x-1/2 
                 w-[28%] sm:w-[21%] md:w-[17%] lg:w-[10%] xl:w-[8.5%]
                 max-h-[34px] sm:max-h-[51px] md:max-h-[68px] lg:max-h-[60px] xl:max-h-[71px]
                 object-contain z-10 animate-fade-in"
          src="assets/images/hero_logo.png"
          alt="Akuri logo"
        />
        <svg
          class="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[433px]
                 h-[20px] sm:h-[30px] md:h-[40px] lg:h-[56px] animate-emerge"
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
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    /* Contenedor de la barra superior */
    .top-bar-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      overflow: hidden;
    }

    @media (min-width: 640px) {
      .top-bar-container {
        height: 30px;
      }
    }

    @media (min-width: 768px) {
      .top-bar-container {
        height: 30px;
      }
    }

    /* Barra superior con animación */
    .top-bar {
      background-color: #151515;
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      animation: circle-to-bar 1.4s ease-in-out forwards;
      transform-origin: center;
    }

    @keyframes circle-to-bar {
      0% {
        width: 30px;
        border-radius: 15px;
        opacity: 0.7;
      }
      25% {
        width: 30px;
        border-radius: 15px;
        opacity: 1;
      }
      100% {
        width: 100%;
        border-radius: 0;
        opacity: 1;
      }
    }

    /* Contenedor del SVG con posicionamiento relativo */
    .svg-container {
      margin-top: -1px; /* Superposición ligera con la barra superior */
    }

    /* Animación para el logo - aparecer con fade */
    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
      animation-delay: 2s; /* Aparece después de la barra y el SVG */
      opacity: 0;
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: translate(-50%, 20px) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
      }
    }

    /* Animación para el SVG - emerger desde detrás de la barra */
    .animate-emerge {
      animation: emerge 0.8s ease-out forwards;
      animation-delay: 1.3s; /* Empieza después de que la barra esté visible */
      transform-origin: center top;
      transform: scaleY(0);
      opacity: 0;
      position: relative;
      z-index: 1;
    }

    @keyframes emerge {
      0% {
        transform: scaleY(0);
        opacity: 0;
      }
      100% {
        transform: scaleY(1);
        opacity: 1;
      }
    }
  `,
})
export class LandingHomeHeroHeaderComponent {}

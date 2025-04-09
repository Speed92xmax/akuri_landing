import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHomeHeroHeaderComponent } from '../landing-home-hero-header/landing-home-hero-header.component';
import { LandingHomeHeroContentComponent } from '../landing-home-hero-content/landing-home-hero-content.component';
import { LandingHomeHeroCtaComponent } from '../landing-home-hero-cta/landing-home-hero-cta.component';
import { AnimatedBackgroundComponent } from '../../../../../../shared/components/animated-background/animated-background.component';

/**
 * Componente principal de la sección Hero de la landing page.
 * Contiene el header, contenido principal y llamada a la acción.
 * Incluye una animación de fondo con curvas que fluyen desde abajo a la izquierda hacia arriba a la derecha.
 */
@Component({
  selector: 'app-landing-home-hero',
  standalone: true,
  imports: [
    CommonModule,
    LandingHomeHeroHeaderComponent,
    LandingHomeHeroContentComponent,
    LandingHomeHeroCtaComponent,
    AnimatedBackgroundComponent,
  ],
  template: `
    <section class="hero-section">
      <!-- Elementos de fondo animados reutilizables -->
      <app-animated-background variant="hero"></app-animated-background>

      <!-- Contenido principal -->
      <div class="content-wrapper">
        <app-landing-home-hero-header class="header" />

        <div class="main-content">
          <app-landing-home-hero-content class="animate-content" />
        </div>

        <div class="cta-container">
          <app-landing-home-hero-cta class="animate-cta" />
        </div>
        <div class="footer-svg">
          <img
            class="w-3/5 sm:w-3/5 h-[30px] sm:h-[40px]"
            src="assets/images/curve_up.png"
            alt=""
          />
        </div>
      </div>
    </section>
  `,
  styleUrls: ['../../../../../../../assets/custom/_backgroundAnimated.scss'],
  styles: [
    `
      /* Estilos principales */
      .hero-section {
        width: 100%;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      /* Contenedor de contenido con z-index para estar por encima del fondo */
      .content-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        position: relative;
        z-index: 1;
        gap: 1.25rem;
        justify-content: space-between;

        @media (min-width: 640px) {
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          gap: 1.5rem;
        }
      }

      /* Header, contenido principal y CTA */
      .header {
        width: 100%;
        flex-shrink: 0;
      }

      .main-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      .cta-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: end;
        width: 100%;
        flex-grow: 1;

        @media (min-width: 640px) {
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          margin-bottom: 2rem;
        }

        @media (min-width: 1024px) {
          margin-bottom: 2.5rem;
        }
      }

      /* Estilo para el SVG del pie de página */
      .footer-svg {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-top: auto;
        flex-shrink: 0;
        overflow: hidden;
        position: relative;
        bottom: -2px;
      }

      .footer-svg svg.half-width-svg {
        width: 50%;
        max-width: 50%;
        height: auto;
        display: block;
      }

      /* Animaciones para el contenido principal */
      .animate-content {
        animation: fade-slide-up 1s ease-out forwards;
        animation-delay: 2.2s; /* Comienza después de las animaciones del header */
        opacity: 0;
      }

      @keyframes fade-slide-up {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Animación para el botón CTA */
      .animate-cta {
        animation: fade-in-cta 0.8s ease-out forwards;
        animation-delay: 3s; /* Comienza después del contenido principal */
        opacity: 0;
      }

      @keyframes fade-in-cta {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `,
  ],
})
export class LandingHomeHeroComponent implements OnDestroy {
  // Implementación para limpiar cualquier referencia al destruir el componente
  ngOnDestroy(): void {
    // Esta implementación ayuda a Angular a manejar la limpieza de recursos
    // especialmente con las animaciones y estilos
    console.log('Hero component destroyed properly');
  }
}

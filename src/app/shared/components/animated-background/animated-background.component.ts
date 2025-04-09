import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="background-elements">
      <div class="curved-bg curved-bg-1" [ngStyle]="variant === 'contact' ? contactStyle1 : {}"></div>
      <div class="curved-bg curved-bg-2" [ngStyle]="variant === 'contact' ? contactStyle2 : {}"></div>
      <div class="curved-bg curved-bg-3" [ngStyle]="variant === 'contact' ? contactStyle3 : {}"></div>
    </div>
  `,
  styles: `
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    }

    /* Contenedor de los elementos de fondo */
    .background-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    /* Estilos base para los elementos curvos */
    .curved-bg {
      position: absolute;
      border-radius: 50%;
      transform-origin: bottom left;
      pointer-events: none;
    }

    /* Estilos específicos para cada elemento curvo */
    .curved-bg-1 {
      width: 150vw;
      height: 150vw;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(120, 186, 255, 0.7) 100%);
      bottom: -125vw;
      left: -50vw;
      opacity: 0.6;
      animation: curve-float 8s ease-in-out infinite alternate;
    }

    .curved-bg-2 {
      width: 100vw;
      height: 100vw;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(87, 172, 255, 0.6) 100%);
      bottom: -75vw;
      left: -25vw;
      opacity: 0.55;
      animation: curve-float 6s ease-in-out infinite alternate-reverse;
    }

    .curved-bg-3 {
      width: 75vw;
      height: 75vw;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(49, 150, 255, 0.5) 100%);
      bottom: -50vw;
      left: 0vw;
      opacity: 0.5;
      animation: curve-float 4s ease-in-out infinite alternate;
    }

    /* Animación para los elementos curvos */
    @keyframes curve-float {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      100% {
        transform: translateY(-25vh) rotate(15deg);
      }
    }
  `
})
export class AnimatedBackgroundComponent implements OnDestroy, OnInit {
  @Input() variant: 'hero' | 'contact' = 'hero';

  // Estilos específicos para el componente de contacto
  contactStyle1 = {
    'background': 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 163, 237, 0.7) 100%)',
    'top': '-125vw',
    'right': '-50vw',
    'bottom': 'auto',
    'left': 'auto',
    'transform-origin': 'top right'
  };

  contactStyle2 = {
    'background': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(243, 114, 212, 0.6) 100%)',
    'top': '-75vw',
    'right': '-25vw',
    'bottom': 'auto',
    'left': 'auto',
    'transform-origin': 'top right'
  };

  contactStyle3 = {
    'background': 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(205, 67, 171, 0.5) 100%)',
    'top': '-50vw',
    'right': '0vw',
    'bottom': 'auto',
    'left': 'auto',
    'transform-origin': 'top right'
  };

  private animationElements: HTMLElement[] = [];

  ngOnInit(): void {
    // Almacenar referencias a los elementos animados para limpiarlos después
    setTimeout(() => {
      const elements = document.querySelectorAll('.curved-bg');
      elements.forEach(el => {
        this.animationElements.push(el as HTMLElement);
      });
    }, 0);
  }

  // Implementación de OnDestroy para garantizar la limpieza adecuada
  ngOnDestroy(): void {
    // Detener animaciones antes de la destrucción del componente
    if (this.animationElements && this.animationElements.length > 0) {
      this.animationElements.forEach(el => {
        if (el && el.style) {
          el.style.animation = 'none';
        }
      });
    }
    
    // Limpiar referencias
    this.animationElements = [];
    
    console.log('AnimatedBackground component destroyed properly');
  }
}

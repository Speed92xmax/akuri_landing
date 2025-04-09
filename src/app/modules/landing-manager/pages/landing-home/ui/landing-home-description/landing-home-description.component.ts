import { Component } from '@angular/core';
import {
  LandingHomeDescriptionCardComponent,
  CardContent,
} from '../landing-home-description-card/landing-home-description-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-home-description',
  standalone: true,
  imports: [LandingHomeDescriptionCardComponent, CommonModule],
  template: `
    <section class="bg-base-black py-16 flex flex-col items-center">
      <div class="w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="flex flex-col gap-12 items-center">
          <div class="flex flex-col gap-5 text-center sm:text-left">
            <h2
              class="text-white text-3xl sm:text-6xl  font-bold font-hoves-demi"
            >
              ¿Por qué Akuri?
            </h2>
            <p class="text-[#26BEFF] text-base sm:text-lg">
              Impulsamos tu negocio desde la tecnología y profesionalismo
            </p>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-8 sm:gap-y-24 justify-items-center mx-auto pt-6"
          >
            <app-landing-home-description-card
              *ngFor="let card of cards"
              [card]="card"
            ></app-landing-home-description-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LandingHomeDescriptionComponent {
  cards: CardContent[] = [
    {
      title: 'Expertos en integración tecnológica',
      titleHtml:
        'Expertos en integración <span class="text-[#5EB2D4]">tecnológica</span>',
      items: [
        'Sistemas satélite para ERP, CRM, manufactura y gestión de personal. ',
        'Desarrollo de aplicaciones web/móviles escalables y centradas en el usuario.',
        'IA, IoT, Blockchain y Analytics para automatización y toma de decisiones.',
      ],
      imageSrc: 'assets/images/description_tech.png',
    },
    {
      title: 'Flexibilidad y adaptación a tu medida',
      titleHtml:
        '<span class="text-[#6659D4]">Flexibilidad</span> y adaptación a tu medida',
      items: [
        'Proyectos personalizados',
        'Equipos dedicados',
        'Consultoría estratégica',
        'Formación especializada',
      ],
      imageSrc: 'assets/images/description_flex.png',
    },
    {
      title: 'Cobertura global con enfoque local',
      titleHtml:
        'Cobertura global con <span class="text-[#4CC1BA]">enfoque local</span>',
      items: [
        'Clientes en Europa, Asia, Australia y Latinoamérica.',
        'Expansión activa en Venezuela y próximamente en más países hispanohablantes.',
      ],
      imageSrc: 'assets/images/description_focus.png',
    },
    {
      title: 'Filosofía abierta y colaborativa',
      titleHtml:
        'Filosofía abierta y <span class="text-[#3E7897]">colaborativa</span>',
      items: [
        'Tecnologías open-source y transferencia de conocimiento.',
        'Acompañamiento continuo desde la idea hasta la evolución iterativa.',
      ],
      imageSrc: 'assets/images/description_colab.png',
    },
  ];
}

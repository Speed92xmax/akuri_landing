import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardContent {
  title: string;
  titleHtml?: string;
  items: string[];
  imageSrc: string;
}

@Component({
  selector: 'app-landing-home-description-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative rounded-3xl transition-all duration-300 hover:scale-105 bg-[#212121] mt-20 gap-6 flex flex-col "
    >
      <img
        [src]="card.imageSrc"
        alt="{{ card.title }}"
        class="w-[150px] h-[150px] object-contain absolute left-1/2 transform -translate-x-1/2 -translate-y-[50%] z-10 drop-shadow-lg"
      />
      <div class="card-container">
        <div
          class="flex flex-col gap-4 text-center w-full flex-grow mt-10 relative z-10"
        >
          <h3
            class="text-white text-xl font-bold font-hoves-demi"
            *ngIf="!card.titleHtml"
          >
            {{ card.title }}
          </h3>
          <h3
            class="text-white text-2xl font-bold leading-tight mb-2 tracking-wide"
            *ngIf="card.titleHtml"
            [innerHTML]="card.titleHtml"
          ></h3>

          <div class="text-gray-300 flex flex-col gap-4 px-4 ">
            <p
              *ngFor="let item of card.items"
              class="text-sm transition-all font-extrabold duration-300 hover:translate-x-1"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .card-container {
      margin-top: 2.5rem;
      max-width: 300px;
      height: 420px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0.5rem;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid transparent;
      transition: all 0.3s;
      position: relative;
    }

    .card-container::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 0.5rem;
      background: linear-gradient(to right, rgba(102, 89, 212, 0.05), rgba(94, 178, 212, 0.05));
      opacity: 0;
      transition: opacity 0.5s;
    }

    .card-container:hover {
      border-color: rgba(62, 120, 151, 0.2);
    }

    .card-container:hover::before {
      opacity: 1;
    }

    @media (min-width: 640px) {
      .card-container {
        max-width: 320px;
      }
    }

    @media (min-width: 1024px) {
      .card-container {
        max-width: 360px;
        padding: 1rem;
        padding-top: 3.5rem;
        border-radius: 0.75rem;
      }

      .card-container::before {
        border-radius: 0.75rem;
      }
    }
  `,
})
export class LandingHomeDescriptionCardComponent {
  @Input() card!: CardContent;
}

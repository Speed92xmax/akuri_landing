import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-home-hero-cta',
  imports: [],
  template: `
    <button
      class=" flex gap-10 px-10 py-5 items-center bg-light-dark rounded-xl text-white text-2xl pb"
    >
      <p>!Conocenos!</p>

      <svg
        width="47"
        height="44"
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
  styles: ``,
})
export class LandingHomeHeroCtaComponent {}

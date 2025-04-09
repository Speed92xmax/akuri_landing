import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedBackgroundComponent } from '../../../../../../shared/components/animated-background/animated-background.component';

@Component({
  selector: 'app-landing-home-contact',
  standalone: true,
  imports: [CommonModule, AnimatedBackgroundComponent],
  template: `
    <section class="contact-section relative">
      <!-- Fondo animado reutilizable con variante "contact" -->
      <app-animated-background variant="contact"></app-animated-background>
      <img
        src="assets/images/curve_down.png"
        alt=""
        class="w-3/5 sm:w-3/5 h-[30px] sm:h-[40px] absolute top-[-1px] right-0"
      />

      <!-- Contenido del formulario de contacto -->

      <article
        class="flex flex-col gap-10 sm:gap-14 items-center z-10 sm:py-10"
        id="contact_us"
      >
        <h2
          class="text-black text-3xl sm:text-6xl  font-bold font-hoves-demi sm:w-3/5 text-center"
        >
          Tecnología abierta, conocimiento compartido,
          <span class="text-white">crecimiento</span> continuo.
        </h2>

        <div
          class="flex flex-col lg:flex-row justify-between w-full container gap-10"
        >
          <div class="content-container">
            <h3
              class="text-white font-hoves-demi text-2xl sm:text-4xl text-center sm:text-left"
            >
              Conócenos, y deja tu negocio en nuestras manos
            </h3>
            <div class="form-container ">
              <form class="contact-form mt-10">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    class="form-input"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    class="form-input"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    placeholder="Teléfono (opcional)"
                    class="form-input"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    placeholder="¿Cómo podemos ayudarte?"
                    rows="1"
                    class="form-textarea"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="submit-button">
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="content-container flex flex-col gap-4">
            <h3
              class="text-white font-hoves-demi text-2xl sm:text-4xl text-center sm:text-left"
            >
              Visitanos y descubre cómo
              <span class="text-base-purple">impulsamos</span> tu transformación
              digital
            </h3>

            <div
              class="flex flex-col gap-3 flex-1 justify-center items-center sm:items-start mt-10 sm:mt-0"
            >
              <p
                class="text-white text-xl sm:text-3xl font-interfaces-medium  text-center sm:text-left"
              >
                Soluciones tecnológicas a medida
              </p>
              <div class="flex items-center gap-2">
                <span
                  class="icon-[hugeicons--internet] text-base-purple text-lg text-[#ffc4f3]"
                ></span>
                <a
                  href="https://www.serrotconsultores.com"
                  target="_blank"
                  class="text-[#ffc4f3] sm:text-xl"
                  >www.serrotconsultores.com</a
                >
              </div>
            </div>

            <div
              class="flex flex-col gap-3 flex-1 justify-center items-center sm:items-start"
            >
              <p class="text-white text-xl sm:text-3xl font-interfaces-medium ">
                Soluciones Blockchain & IA
              </p>
              <div class="flex items-center gap-2">
                <span
                  class="icon-[hugeicons--internet] text-base-purple text-xl text-[#ffc4f3]"
                ></span>
                <a
                  href="https://www.akuri.io"
                  target="_blank"
                  class="text-[#ffc4f3] sm:text-xl"
                  >www.akuri.io</a
                >
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  `,
  styles: `
    .contact-section {
      position: relative;
      min-height: 80vh;
      padding: 4rem 0;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content-container {
      z-index: 1;
      max-width: 1200px;
      width: 90%;
      margin: 0 auto;
      background-color: rgba(21, 21, 21, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      padding: 2.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header-container {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .title {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
      font-family: 'hoves-demi', sans-serif;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #26BEFF;
      max-width: 600px;
      margin: 0 auto;
    }

    .form-container {
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-input, .form-textarea {
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background-color: rgba(255, 255, 255, 0.05);
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        border-color: #FFA3ED;
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 163, 237, 0.3);
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-button {
      padding: 1rem 2rem;
      background: #ffc4f3;
      color: var(--base-light-dark);
      border: none;
      border-radius: 0.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 163, 237, 0.4);
      }

      &:active {
        transform: translateY(1px);
      }
    }

    @media (max-width: 768px) {
      .content-container {
        padding: 1.5rem;
      }

      .title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }
    }
  `,
})
export class LandingHomeContactComponent implements OnDestroy {
  // Implementación para limpiar cualquier referencia al destruir el componente
  ngOnDestroy(): void {
    // Esta implementación ayuda a Angular a manejar la limpieza de recursos
    console.log('Contact component destroyed properly');
  }
}

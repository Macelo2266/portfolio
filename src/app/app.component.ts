
import { Component } from '@angular/core';

import {
  PROFILE,
  TECH_GROUPS,
  PROJECTS,
  JOURNEY
} from './data';

import { ProjectCardComponent } from './components/project-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <header class="site-header">
      <a class="brand mono" href="#inicio" aria-label="Macelo.dev início">
        macelo<span>.dev</span>
      </a>

      <nav aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#stack">Stack</a>
        <a href="#trajetoria">Trajetória</a>
        <a href="#projetos">Projetos</a>
        <a class="nav-contact" href="#contato">Contato <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section id="inicio" class="hero section-shell">
        <div class="hero-copy">
          <div class="eyebrow">
            <span class="status-dot"></span>
            {{ p.location }}
            <span class="eyebrow-divider">/</span>
            PORTFÓLIO 2026
          </div>

          <p class="hero-kicker mono">OLÁ, EU SOU</p>

          <h1>{{ p.name }}<span class="accent">.</span></h1>

          <div class="hero-role">
            DESENVOLVEDOR <span>BACK-END</span><br>
            JAVA DEVELOPER<span class="accent">_</span>
          </div>

          <p class="hero-description">
            Desenvolvo soluções back-end com Java e Spring Boot, criando APIs REST,
            trabalhando com bancos de dados e aplicando boas práticas de desenvolvimento.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#projetos">
              Explorar projetos <span>↗</span>
            </a>

            <a class="button button-ghost" [href]="p.github" target="_blank" rel="noopener noreferrer">
              GitHub <span>↗</span>
            </a>

            <a class="button button-ghost" [href]="p.linkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn <span>↗</span>
            </a>
          </div>

          <p class="availability">
            <span class="status-dot"></span>
            Aberto a oportunidades de Desenvolvedor Java Júnior
          </p>
        </div>

        <div class="hero-visual">
          <div class="visual-topline mono">
            <span>macelo&#64;backend:~</span>
            <span>● ● ●</span>
          </div>

          <div class="terminal-window mono">
            <div class="terminal-request">
              <span class="terminal-method">GET</span>
              /api/developer/profile
            </div>

            <div class="terminal-response">
              HTTP/1.1 <span>200 OK</span>
            </div>

            <div class="terminal-code">
              <span class="brace">{{ '{' }}</span>

              <div><span class="key">"name"</span>: <span class="value">"{{ p.name }}"</span>,</div>
              <div><span class="key">"role"</span>: <span class="value">"Backend Developer"</span>,</div>
              <div><span class="key">"main_stack"</span>: <span class="value">["Java", "Spring Boot"]</span>,</div>
              <div><span class="key">"database"</span>: <span class="value">"PostgreSQL"</span>,</div>
              <div><span class="key">"education"</span>: <span class="value">"Sistemas de Informação"</span>,</div>
              <div><span class="key">"looking_for"</span>: <span class="value">"Junior opportunity"</span></div>

              <span class="brace">{{ '}' }}</span>
              <span class="terminal-cursor"></span>
            </div>

            <div class="terminal-footer">
              <span>● API online</span>
              <span>UTF-8</span>
              <span>JSON</span>
            </div>
          </div>

          <div class="floating-chip chip-java">
            <span class="chip-symbol">☕</span> Java
          </div>

          <div class="floating-chip chip-spring">
            <span class="chip-symbol">✳</span> Spring Boot
          </div>

          <div class="visual-index mono">01 <span>—</span> 04</div>
        </div>
      </section>

      <section class="ticker" aria-label="Tecnologias principais">
        <div class="ticker-track mono">
          <span>JAVA</span><i>✳</i>
          <span>SPRING BOOT</span><i>✳</i>
          <span>REST API</span><i>✳</i>
          <span>POSTGRESQL</span><i>✳</i>
          <span>DOCKER</span><i>✳</i>
          <span>GIT</span><i>✳</i>

          <span>JAVA</span><i>✳</i>
          <span>SPRING BOOT</span><i>✳</i>
          <span>REST API</span><i>✳</i>
          <span>POSTGRESQL</span><i>✳</i>
          <span>DOCKER</span><i>✳</i>
          <span>GIT</span><i>✳</i>
        </div>
      </section>

      <section id="sobre" class="content-section section-shell">
        <div class="section-heading">
          <p class="section-index mono">01 / SOBRE</p>
          <h2>
            Construindo conhecimento.<br>
            <span class="muted-heading">Uma linha de código por vez.</span>
          </h2>
        </div>

        <div class="about-layout">
          <div class="about-copy">
            @for (paragraph of p.about; track paragraph) {
              <p>{{ paragraph }}</p>
            }

            <div class="about-focus">
              <span class="focus-label mono">MEU FOCO ATUAL</span>
              <strong>Desenvolvimento Back-end com Java</strong>
              <span>APIs REST · Spring Boot · Banco de dados · Segurança</span>
            </div>
          </div>

          <aside class="profile-panel">
            <div class="panel-label mono">/ developer.card</div>
            <div class="profile-monogram">M<span>.</span></div>
            <h3>{{ p.name }}</h3>
            <p>Desenvolvedor Back-end Java</p>
            <div class="profile-divider"></div>

            <div class="profile-detail">
              <span>LOCALIZAÇÃO</span>
              <strong>{{ p.location }}</strong>
            </div>

            <div class="profile-detail">
              <span>FORMAÇÃO</span>
              <strong>Sistemas de Informação</strong>
            </div>

            <div class="profile-detail">
              <span>OBJETIVO</span>
              <strong>Java Developer Jr.</strong>
            </div>

            <a [href]="p.linkedin" target="_blank" rel="noopener noreferrer" class="panel-link">
              Conectar no LinkedIn ↗
            </a>
          </aside>
        </div>
      </section>

      <section id="stack" class="content-section section-shell stack-section">
        <div class="section-heading">
          <p class="section-index mono">02 / TECNOLOGIAS</p>
          <h2>
            Ferramentas que uso<br>
            <span class="muted-heading">para transformar ideias em código.</span>
          </h2>
          <p class="section-intro">
            Tecnologias estudadas e aplicadas nos meus projetos práticos e acadêmicos.
          </p>
        </div>

        <div class="stack-groups">
          @for (group of techGroups; track group.title) {
            <article class="stack-group">
              <div class="stack-group-title">
                <span class="stack-group-icon">{{ group.icon }}</span>
                <h3>{{ group.title }}</h3>
                <span class="stack-count mono">
                  {{ group.items.length.toString().padStart(2, '0') }}
                </span>
              </div>

              <div class="stack-items">
                @for (item of group.items; track item) {
                  <span class="stack-item">{{ item }}</span>
                }
              </div>
            </article>
          }
        </div>
      </section>

      <section id="trajetoria" class="content-section section-shell">
        <div class="section-heading">
          <p class="section-index mono">03 / TRAJETÓRIA</p>
          <h2>
            Minha jornada<br>
            <span class="muted-heading">de aprendizado e evolução.</span>
          </h2>
        </div>

        <div class="timeline">
          @for (item of journey; track item.title) {
            <article class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date mono">{{ item.period }}</div>

              <div class="timeline-content">
                <span class="timeline-type">{{ item.type }}</span>
                <h3>{{ item.title }}</h3>
                <p class="timeline-place">{{ item.place }}</p>
                <p>{{ item.description }}</p>
              </div>
            </article>
          }
        </div>
      </section>

      <section id="projetos" class="content-section section-shell projects-section">
        <div class="projects-heading">
          <div class="section-heading">
            <p class="section-index mono">04 / PROJETOS</p>
            <h2>
              Código na prática<span class="accent">.</span><br>
              <span class="muted-heading">Projetos que representam minha evolução.</span>
            </h2>
          </div>

          <a class="text-link mono" [href]="p.github" target="_blank" rel="noopener noreferrer">
            VER GITHUB COMPLETO ↗
          </a>
        </div>

        <div class="projects-grid">
          @for (project of projects; track project.name; let i = $index) {
            <app-project-card
              [project]="project"
              [number]="(i + 1).toString().padStart(2, '0')"
            />
          }
        </div>
      </section>

      <section id="contato" class="contact-section section-shell">
        <p class="section-index mono">05 / CONTATO</p>

        <div class="contact-inner">
          <div>
            <p class="contact-kicker mono">TEM UMA OPORTUNIDADE?</p>
            <h2>
              Vamos construir<br>
              algo <span class="accent">juntos.</span>
            </h2>

            <p class="contact-copy">
              Estou em busca da minha primeira oportunidade como Desenvolvedor
              Back-end Java Júnior. Será um prazer conversar sobre tecnologia,
              projetos e oportunidades.
            </p>
          </div>

          <div class="contact-links">
            <a class="contact-link" [href]="p.linkedin" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <b>Conecte-se comigo ↗</b>
            </a>

            <a class="contact-link" [href]="p.github" target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
              <b>Veja meus repositórios ↗</b>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer section-shell">
      <a class="brand mono" href="#inicio">macelo<span>.dev</span></a>
      <span>Desenvolvido com Angular · Java no coração ☕</span>
      <span class="mono">© 2026 {{ p.name }}</span>
    </footer>

    <a class="back-top mono" href="#inicio" aria-label="Voltar ao topo">↑</a>
  `
})
export class AppComponent {
  p = PROFILE;
  techGroups = TECH_GROUPS;
  projects = PROJECTS;
  journey = JOURNEY;
}

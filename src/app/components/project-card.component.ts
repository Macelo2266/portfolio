
import { Component, Input } from '@angular/core';
import { Project } from '../data';

@Component({
  selector: 'app-project-card',
  standalone: true,

  template: `
    <article class="project-card">

      <div class="project-card-top">
        <span class="project-number mono">{{ number }}</span>
        <span class="project-status">{{ project.status }}</span>
      </div>

      <div class="project-visual" aria-hidden="true">
        <div class="visual-window">

          <div class="window-bar">
            <span class="mono">project.json</span>
          </div>

          <div class="code-lines mono">
            <span><b>const</b> project = {{ '{' }}</span>
            <span>&nbsp;&nbsp;name: <em>'{{ project.name }}'</em>,</span>
            <span>&nbsp;&nbsp;type: <em>'{{ project.category }}'</em>,</span>
            <span>&nbsp;&nbsp;status: <em>'{{ project.status }}'</em></span>
            <span>{{ '}' }};</span>
          </div>

        </div>
      </div>

      <div class="project-content">

        <p class="project-category mono">
          {{ project.category }}
        </p>

        <h3>{{ project.name }}</h3>

        <p class="project-description">
          {{ project.description }}
        </p>

        <div class="project-stack">
          @for (tech of project.stack; track tech) {
            <span>{{ tech }}</span>
          }
        </div>

        @if (project.repo) {
          <a
            class="project-link"
            [href]="project.repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver repositório <span>↗</span>
          </a>
        } @else {
          <span class="project-private-note">
            Projeto acadêmico
          </span>
        }

      </div>
    </article>
  `,

  styles: [`
    :host {
      display: block;
      height: 100%;
      min-width: 0;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-width: 0;
      overflow: hidden;
      background: var(--surface);
      border: 1px solid var(--line);
      transition: transform .25s, border-color .25s;
    }

    .project-card:hover {
      transform: translateY(-5px);
      border-color: rgba(255, 111, 44, .7);
    }

    .project-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.2rem 1.4rem;
      border-bottom: 1px solid var(--line);
    }

    .project-number {
      color: var(--orange);
      font-size: 1.1rem;
      font-weight: 700;
    }

    .project-status {
      color: var(--muted);
      font-size: 1rem;
    }

    .project-visual {
      padding: 1.5rem;
      background:
        radial-gradient(
          ellipse at 50% 10%,
          rgba(255, 111, 44, .15),
          transparent 70%
        ),
        #111113;
    }

    .visual-window {
      min-height: 175px;
      border: 1px solid #343238;
      background: #151518;
    }

    .window-bar {
      display: flex;
      align-items: center;
      padding: .8rem 1rem;
      border-bottom: 1px solid #343238;
    }

    .window-bar span {
      color: #aaa5ad;
      font-size: .95rem;
    }

    .code-lines {
      display: grid;
      gap: .5rem;
      padding: 1.2rem;
      color: #c9c5cc;
      font-size: 1rem;
      line-height: 1.5;
      overflow-wrap: anywhere;
    }

    .code-lines b {
      color: #e89a64;
      font-weight: 600;
    }

    .code-lines em {
      color: #a8c98e;
      font-style: normal;
    }

    .project-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.6rem;
    }

    .project-category {
      margin: 0 0 .7rem;
      color: var(--orange);
      font-size: .95rem;
      font-weight: 700;
      letter-spacing: .08em;
    }

    h3 {
      margin: 0 0 .9rem;
      font-size: clamp(1.7rem, 2.5vw, 2rem);
      line-height: 1.25;
      letter-spacing: -.035em;
    }

    .project-description {
      margin: 0 0 1.4rem;
      color: var(--muted);
      font-size: 1.15rem;
      line-height: 1.8;
    }

    .project-stack {
      display: flex;
      flex-wrap: wrap;
      gap: .55rem;
      margin-bottom: 1.6rem;
    }

    .project-stack span {
      padding: .45rem .7rem;
      border: 1px solid var(--line);
      color: #d2cdd4;
      font-size: .95rem;
    }

    .project-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      margin-top: auto;
      padding-top: 1.2rem;
      border-top: 1px solid var(--line);
      color: var(--text);
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 700;
    }

    .project-link span {
      color: var(--orange);
      font-size: 1.3rem;
    }

    .project-link:hover {
      color: var(--orange);
    }

    .project-private-note {
      width: 100%;
      margin-top: auto;
      padding-top: 1.2rem;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 1rem;
    }

    @media (max-width: 600px) {
      .project-content {
        padding: 1.2rem;
      }

      .project-description {
        font-size: 1.05rem;
      }

      h3 {
        font-size: 1.6rem;
      }

      .project-visual {
        padding: 1rem;
      }

      .code-lines {
        font-size: .9rem;
      }
    }
  `]
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  @Input({ required: true }) number = '01';
}

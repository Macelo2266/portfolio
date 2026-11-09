import { Component, Input } from '@angular/core';
import { Project } from '../data';
import { SpotlightDirective } from '../directives';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [SpotlightDirective],
  template: `
    <article class="card" appSpotlight>
      <div class="bar">
        <i></i><i></i><i></i>
        <span class="mono">~/projetos/{{ slug }}</span>
      </div>
      <div class="body">
        <span class="tag mono">{{ project.tag }}</span>
        <h3>{{ project.name }}</h3>
        <p class="desc">{{ project.description }}</p>
        @if (project.highlights.length) {
          <ul class="hl">@for (h of project.highlights; track h) { <li>{{ h }}</li> }</ul>
        }
        @if (project.stack.length) {
          <ul class="stack">@for (s of project.stack; track s) { <li class="mono">{{ s }}</li> }</ul>
        }
        <a class="repo" [href]="project.repo" target="_blank" rel="noopener">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.22 1.88.87 2.34.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          Ver código no GitHub
        </a>
      </div>
    </article>`,
  styles: [`
    .card { position:relative; display:flex; flex-direction:column; height:100%; overflow:hidden;
      background:linear-gradient(160deg, #1c1c20, #131315); border:1px solid var(--line); border-radius:14px;
      transition:border-color .25s, transform .25s, box-shadow .25s; }
    .card::before { content:''; position:absolute; inset:0; opacity:0; transition:opacity .3s; pointer-events:none;
      background:radial-gradient(380px circle at var(--mx,50%) var(--my,0%), rgba(255,106,26,.14), transparent 70%); }
    .card:hover { border-color:rgba(255,106,26,.65); transform:translateY(-4px); box-shadow:0 18px 50px -20px rgba(255,106,26,.35); }
    .card:hover::before { opacity:1; }
    .bar { display:flex; align-items:center; gap:.4rem; padding:.7rem 1rem; border-bottom:1px solid var(--line); background:#0f0f11; }
    .bar i { width:9px; height:9px; border-radius:50%; background:#34343a; }
    .bar i:first-child { background:var(--orange); }
    .bar span { margin-left:.6rem; font-size:.75rem; color:var(--muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .body { position:relative; display:flex; flex-direction:column; gap:1rem; padding:1.6rem; flex:1; }
    .tag { font-size:.75rem; color:var(--orange); }
    h3 { margin:0; font-size:1.6rem; letter-spacing:-.02em; }
    .desc { margin:0; color:var(--muted); line-height:1.65; }
    ul { list-style:none; padding:0; margin:0; }
    .hl { display:grid; gap:.55rem; }
    .hl li { position:relative; padding-left:1.3rem; font-size:.93rem; line-height:1.5; }
    .hl li::before { content:'›'; position:absolute; left:0; color:var(--orange); font-weight:800; }
    .stack { display:flex; flex-wrap:wrap; gap:.4rem; }
    .stack li { font-size:.74rem; padding:.28rem .65rem; border-radius:6px; background:var(--orange-soft); color:#ff9a5c; border:1px solid rgba(255,106,26,.2); }
    .repo { margin-top:auto; display:inline-flex; align-items:center; gap:.55rem; align-self:flex-start; padding:.65rem 1rem;
      border:1px solid var(--line); border-radius:8px; color:var(--text); font-weight:600; text-decoration:none;
      transition:border-color .2s, color .2s, background .2s; }
    .repo:hover { border-color:var(--orange); color:var(--orange); background:var(--orange-soft); }
  `]
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  get slug() { return this.project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
}

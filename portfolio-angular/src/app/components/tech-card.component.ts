import { Component, Input } from '@angular/core';
import { Tech } from '../data';
import { SpotlightDirective } from '../directives';

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [SpotlightDirective],
  template: `
    <div class="tech" appSpotlight>
      @if (tech.icon && !failed) {
        <img [src]="tech.icon" alt="" width="30" height="30" loading="lazy" (error)="failed = true">
      } @else {
        <span class="mono">{{ tech.name.slice(0, 2) }}</span>
      }
      <span class="name">{{ tech.name }}</span>
    </div>`,
  styles: [`
    .tech { position:relative; display:flex; align-items:center; gap:.85rem; padding:.9rem 1rem; overflow:hidden;
      background:var(--surface); border:1px solid var(--line); border-radius:10px; transition:border-color .25s, transform .25s; }
    .tech::before { content:''; position:absolute; inset:0; opacity:0; transition:opacity .25s;
      background:radial-gradient(160px circle at var(--mx,50%) var(--my,50%), rgba(255,106,26,.18), transparent 70%); }
    .tech:hover { border-color:rgba(255,106,26,.6); transform:translateY(-2px); }
    .tech:hover::before { opacity:1; }
    img, .mono { position:relative; width:30px; height:30px; flex:none; }
    .mono { display:grid; place-items:center; border-radius:8px; background:var(--orange-soft); color:var(--orange); font:500 .78rem var(--mono); }
    .name { position:relative; font-weight:600; }
  `]
})
export class TechCardComponent {
  @Input({ required: true }) tech!: Tech;
  failed = false;
}

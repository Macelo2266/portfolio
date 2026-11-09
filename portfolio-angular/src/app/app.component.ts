import { Component, OnDestroy, OnInit } from '@angular/core';
import { PROFILE, TECH_GROUPS, PROJECTS } from './data';
import { TechCardComponent } from './components/tech-card.component';
import { ProjectCardComponent } from './components/project-card.component';
import { RevealDirective } from './directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TechCardComponent, ProjectCardComponent, RevealDirective],
  template: `
    <div class="bg" aria-hidden="true"></div>
    <header class="top">
      <a href="#inicio" class="logo mono">macelo<b>.dev</b></a>
      <nav>
        <a href="#sobre">Sobre</a><a href="#tecnologias">Tecnologias</a>
        <a href="#projetos">Projetos</a><a class="pill" href="#contato">Contato</a>
      </nav>
    </header>

    <main>
      <section id="inicio" class="hero wrap">
        <div class="intro">
          <span class="status"><i></i> Aberto a oportunidades como Java Júnior</span>
          <h1>{{ p.name }}</h1>
          <p class="role mono">&gt; {{ typed }}<span class="cursor"></span></p>
          <p class="lead">Construo APIs REST seguras com Java e Spring Boot, com foco em banco de dados, autenticação e arquitetura de aplicações.</p>
          <div class="cta">
            <a class="btn primary" href="#projetos">Ver projetos</a>
            <a class="btn" [href]="p.github" target="_blank" rel="noopener">GitHub</a>
            <a class="btn" [href]="p.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <div class="terminal">
          <div class="tbar"><i></i><i></i><i></i><span class="mono">DeveloperController.java</span></div>
<pre class="mono" aria-label="Resumo do perfil em formato de código Java"><span class="c">&#64;RestController</span>
<span class="c">&#64;RequestMapping</span>(<span class="s">"/api/desenvolvedor"</span>)
<span class="kw">public class</span> <span class="t">Macelo</span> {{ '{' }}

  <span class="kw">String</span> funcao   = <span class="s">"{{ p.role }}"</span>;
  <span class="kw">String</span> formacao = <span class="s">"Sistemas de Informação · UFRPE"</span>;
  <span class="kw">String</span> local    = <span class="s">"{{ p.location }}"</span>;
  <span class="kw">String</span> busco    = <span class="s">"Desenvolvedor Java Júnior"</span>;

  <span class="c">&#64;GetMapping</span>
  <span class="kw">public</span> <span class="t">Macelo</span> perfil() {{ '{' }}
    <span class="kw">return this</span>;
  {{ '}' }}
{{ '}' }}</pre>
        </div>
      </section>

      <section id="sobre" class="wrap">
        <h2 appReveal><span class="mono">//</span> Sobre mim</h2>
        <div class="about">
          <div appReveal class="texts">@for (t of p.about; track t) { <p>{{ t }}</p> }</div>
          <aside appReveal class="edu">
            <h3 class="mono">formação</h3>
            @for (e of p.education; track e.title) {
              <div class="step"><b>{{ e.title }}</b><span>{{ e.place }} · {{ e.period }}</span></div>
            }
          </aside>
        </div>
      </section>

      <section id="tecnologias" class="wrap">
        <h2 appReveal><span class="mono">//</span> Tecnologias</h2>
        <div class="groups">
          @for (g of groups; track g.title) {
            <div appReveal class="group">
              <div class="ghead"><h3>{{ g.title }}</h3><span class="mono">{{ g.hint }}</span></div>
              <div class="techs">@for (t of g.items; track t.name) { <app-tech-card [tech]="t" /> }</div>
            </div>
          }
        </div>
      </section>

      <section id="projetos" class="wrap">
        <h2 appReveal><span class="mono">//</span> Projetos</h2>
        <div class="projects">@for (pr of projects; track pr.name) { <div appReveal class="pwrap"><app-project-card [project]="pr" /></div> }</div>
      </section>

      <section id="contato" class="wrap">
        <div appReveal class="contact">
          <h2>Vamos conversar?</h2>
          <p>Estou buscando minha primeira oportunidade como Desenvolvedor Java Júnior. Me chame pelo LinkedIn ou veja meu código no GitHub.</p>
          <div class="cta">
            <a class="btn primary" [href]="p.linkedin" target="_blank" rel="noopener">Falar no LinkedIn</a>
            <a class="btn" [href]="p.github" target="_blank" rel="noopener">Ver GitHub</a>
          </div>
        </div>
      </section>
    </main>
    <footer class="wrap mono">© 2026 {{ p.name }} · {{ p.location }}</footer>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  p = PROFILE;
  groups = TECH_GROUPS;
  projects = PROJECTS;
  typed = '';
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    const full = this.p.role;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { this.typed = full; return; }
    let i = 0;
    this.timer = setInterval(() => {
      this.typed = full.slice(0, ++i);
      if (i >= full.length) clearInterval(this.timer);
    }, 55);
  }
  ngOnDestroy() { clearInterval(this.timer); }
}

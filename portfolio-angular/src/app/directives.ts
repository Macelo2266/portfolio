import { Directive, ElementRef, HostListener, OnDestroy, OnInit, inject } from '@angular/core';

/** Revela o elemento quando ele entra na tela. */
@Directive({ selector: '[appReveal]', standalone: true, host: { class: 'reveal' } })
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;
  ngOnInit() {
    if (typeof IntersectionObserver === 'undefined') { this.el.classList.add('in'); return; }
    this.io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { this.el.classList.add('in'); this.io?.disconnect(); }
    }, { threshold: 0.12 });
    this.io.observe(this.el);
  }
  ngOnDestroy() { this.io?.disconnect(); }
}

/** Luz laranja que acompanha o mouse dentro do card. */
@Directive({ selector: '[appSpotlight]', standalone: true })
export class SpotlightDirective {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  @HostListener('mousemove', ['$event']) move(e: MouseEvent) {
    const r = this.el.getBoundingClientRect();
    this.el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    this.el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
}

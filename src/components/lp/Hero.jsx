import React from 'react';
import { Container } from './ui';

// Topo compartilhado das páginas de obrigado: foto da Eliane sobre o brilho dourado,
// depois a chamada curta, o título e o que cada página coloca embaixo (children).
export default function Hero({ eyebrow, titulo, tituloDestaque, children }) {
  return (
    <section className="relative overflow-hidden">
      {/* Foto sobre o brilho dourado, sumindo pro fundo */}
      <div className="relative mx-auto flex w-full max-w-2xl justify-center overflow-hidden pt-4 sm:pt-6">
        <div className="gold-glow absolute inset-x-[-10%] top-[-4%] -z-10 aspect-square rounded-full sm:inset-x-[5%] sm:top-[2%]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-[18%] top-[2%] -z-10 aspect-square rounded-full border border-accent/25" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-[26%] top-[10%] -z-10 aspect-square rounded-full border border-accent/15" aria-hidden="true" />
        <img
          src="/assets/eliane-hero.webp"
          alt="Eliane Moreira, a Rainha do Crédito, fazendo o gesto de dinheiro com as mãos"
          width="2000"
          height="1227"
          className="hero-photo photo-fade mx-auto w-[120%] max-w-none relative left-[5.1%] shrink-0 object-contain sm:left-[4.25%] sm:w-full"
          fetchpriority="high"
        />
      </div>

      <Container>
        <div className="mx-auto -mt-12 max-w-2xl pb-12 text-center sm:-mt-16">
          <p className="hero-in font-display text-[1.75rem] font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">{eyebrow}</p>
          <h1 className="hero-in mt-1 font-display text-xl font-bold uppercase leading-tight tracking-wide text-ivory/90 sm:text-3xl md:text-4xl">
            {titulo} <span className="text-accent">{tituloDestaque}</span>
          </h1>
          {children}
        </div>
      </Container>
    </section>
  );
}

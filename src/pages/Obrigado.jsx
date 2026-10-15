import React, { useEffect } from 'react';
import { Crown, MessageCircle } from 'lucide-react';
import { obrigado, obrigadoWhatsappHref } from '../content';
import { Container, Button } from '../components/lp/ui';
import Footer from '../components/lp/Footer';

export default function Obrigado() {
  useEffect(() => {
    document.title = `Quase lá | ${obrigado.produto} com a Rainha do Crédito`;
  }, []);

  return (
    <div className="min-h-screen bg-background text-ivory">
      <div className="noise-overlay" aria-hidden="true" />

      <section className="relative overflow-hidden">
        <Container>
          <header className="flex justify-center py-5 sm:py-6">
            <p className="flex items-center gap-2 font-display text-sm font-bold text-white sm:text-base">
              <Crown size={18} className="text-accent" aria-hidden="true" />
              Rainha do Crédito
            </p>
          </header>
        </Container>

        {/* Foto sobre o brilho dourado, sumindo pro fundo */}
        <div className="relative mx-auto flex w-full max-w-2xl justify-center overflow-hidden">
          <div className="gold-glow absolute inset-x-[-10%] top-[-4%] -z-10 aspect-square rounded-full sm:inset-x-[5%] sm:top-[2%]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-[18%] top-[2%] -z-10 aspect-square rounded-full border border-accent/25" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-[26%] top-[10%] -z-10 aspect-square rounded-full border border-accent/15" aria-hidden="true" />
          <img
            src="/assets/eliane-hero.webp"
            alt="Eliane Moreira, a Rainha do Crédito, fazendo o gesto de dinheiro com as mãos"
            width="2000"
            height="1227"
            className="hero-photo photo-fade mx-auto w-[150%] max-w-none object-contain sm:w-full"
            fetchpriority="high"
          />
        </div>

        <Container>
          <div className="mx-auto -mt-10 max-w-2xl pb-16 text-center sm:-mt-16">
            <p className="hero-in font-display text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">{obrigado.eyebrow}</p>
            <h1 className="hero-in mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-ivory/90 sm:text-3xl md:text-4xl">
              {obrigado.titulo} <span className="text-accent">{obrigado.tituloDestaque}</span>
            </h1>

            <div className="hero-in-2 mt-8 space-y-4 text-base leading-relaxed text-ivory/80 sm:text-lg">
              {obrigado.atencao.map((a) => (
                <p key={a.forte}>
                  {a.antes}
                  <strong className="font-bold text-white">{a.forte}</strong>
                </p>
              ))}
              <p>{obrigado.furarFila}</p>
            </div>

            <div className="hero-in-3 mt-8">
              <Button href={obrigadoWhatsappHref} size="lg" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={22} aria-hidden="true" />
                {obrigado.cta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

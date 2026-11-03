import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { corretores, rodapeCorretores } from '../content';
import { Container, Button, CheckItem } from '../components/lp/ui';
import Hero from '../components/lp/Hero';
import Footer from '../components/lp/Footer';

const c = corretores.reprovado;

export default function CorretoresReprovado() {
  useEffect(() => {
    document.title = `Obrigado pelo interesse | ${corretores.produto}`;
    window.dataLayer?.push({ event: 'thanks_reprovado' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-ivory">
      <div className="noise-overlay" aria-hidden="true" />

      <Hero eyebrow={c.eyebrow} titulo={c.titulo} tituloDestaque={c.tituloDestaque}>
        <div className="hero-in-2 mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ivory/80 sm:mt-8 sm:space-y-4 sm:text-lg">
          {c.corpo.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Hero>

      {/* ========================== PORTA ABERTA ========================== */}
      <section className="bg-primary py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">{c.encaixeTitulo}</h2>
            <ul className="mt-8 space-y-4">
              {c.encaixe.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-ivory/80">{c.encaixeFecho}</p>
            <div className="mt-6">
              <Button href={corretores.formularioUrl} variant="dark">{c.ctaFormulario}</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================== CONSOLAÇÃO ========================== */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="leading-relaxed text-ivory/80">{c.consolacao}</p>
            <div className="mt-6">
              <Button href={corretores.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram size={22} aria-hidden="true" />
                {c.ctaInstagram}
              </Button>
            </div>
            <p className="mt-10 text-sm leading-relaxed text-ivory/60">{c.fecho}</p>
          </div>
        </Container>
      </section>

      <Footer dados={rodapeCorretores} />
    </div>
  );
}

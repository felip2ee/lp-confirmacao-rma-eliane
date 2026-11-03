import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { corretores, rodapeCorretores, whatsappHref } from '../content';
import { Container, Button } from '../components/lp/ui';
import Hero from '../components/lp/Hero';
import Footer from '../components/lp/Footer';

const c = corretores.aprovado;
const zap = whatsappHref(corretores.whatsappNumero, c.whatsappMensagem);

export default function CorretoresAprovado() {
  useEffect(() => {
    document.title = `Seu perfil passou | ${corretores.produto}`;
    // Evento distinto do reprovado, pra campanha otimizar só pelo lead aprovado
    window.dataLayer?.push({ event: 'thanks_aprovado' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-ivory">
      <div className="noise-overlay" aria-hidden="true" />

      <Hero eyebrow={c.eyebrow} titulo={c.titulo} tituloDestaque={c.tituloDestaque}>
        <div className="hero-in-2 mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ivory/80 sm:mt-8 sm:space-y-4 sm:text-lg">
          <p>{c.subtitulo}</p>
          {c.atencao.map((a) => (
            <p key={a.forte}>
              {a.antes}
              <strong className="font-bold text-white">{a.forte}</strong>
            </p>
          ))}
          <p>{c.furarFila}</p>
        </div>

        <div className="hero-in-3 mt-6 sm:mt-8">
          <Button href={zap} size="lg" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={22} aria-hidden="true" />
            {c.cta}
          </Button>
        </div>
      </Hero>

      {/* ========================== COMBINADO ========================== */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-accent/40 bg-primary/40 p-6 sm:p-8">
            <p className="font-display text-lg font-extrabold text-white sm:text-xl">{c.combinadoTitulo}</p>
            <p className="mt-3 leading-relaxed text-ivory/80">{c.combinado}</p>
          </div>
          <p className="mt-8 text-center">
            <a href={zap} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline-offset-4 hover:underline">
              {c.duvidas}
            </a>
          </p>
        </Container>
      </section>

      <Footer dados={rodapeCorretores} />
    </div>
  );
}

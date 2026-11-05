import React, { useEffect } from 'react';
import { MessageCircle, ScanSearch, ClipboardList } from 'lucide-react';
import { obrigado, obrigadoWhatsappHref } from '../content';
import { Container, Button } from '../components/lp/ui';
import Hero from '../components/lp/Hero';
import Footer from '../components/lp/Footer';

const entregaIcones = [ScanSearch, ClipboardList];

export default function Obrigado() {
  useEffect(() => {
    document.title = `Quase lá | ${obrigado.produto} com a Rainha do Crédito`;
  }, []);

  return (
    <div className="min-h-screen bg-background text-ivory">
      <div className="noise-overlay" aria-hidden="true" />

      <Hero eyebrow={obrigado.eyebrow} titulo={obrigado.titulo} tituloDestaque={obrigado.tituloDestaque}>
        <div className="hero-in-2 mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ivory/80 sm:mt-8 sm:space-y-4 sm:text-lg">
          {obrigado.atencao.map((a) => (
            <p key={a.forte}>
              {a.antes}
              <strong className="font-bold text-white">{a.forte}</strong>
            </p>
          ))}
          <p>{obrigado.furarFila}</p>
        </div>

        <div className="hero-in-3 mt-6 sm:mt-8">
          <Button href={obrigadoWhatsappHref} size="lg" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={22} aria-hidden="true" />
            {obrigado.cta}
          </Button>
        </div>
      </Hero>

      {/* ========================== PROVAS ========================== */}
      <section className="pb-14 md:pb-20">
        <Container>
          <h2 className="mx-auto max-w-2xl text-center font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {obrigado.provasTitulo}
          </h2>
          <div className="mx-auto mt-10 max-w-5xl gap-6 sm:columns-2 lg:columns-3">
            {obrigado.provas.map((p) => (
              <figure key={p.imagem} className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-accent/30 bg-primary/60">
                <img src={p.imagem} alt={`Print de conversa no WhatsApp: ${p.valor}`} className="w-full" loading="lazy" />
                <figcaption className="p-4 font-display text-lg font-extrabold leading-tight text-accent">{p.valor}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-ivory/60">{obrigado.provasAviso}</p>
          <div className="mt-8 text-center">
            <Button href={obrigadoWhatsappHref} size="lg" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={22} aria-hidden="true" />
              {obrigado.cta}
            </Button>
          </div>
        </Container>
      </section>

      {/* ========================== PROMESSA ========================== */}
      <section className="bg-primary py-14 md:py-20">
        <Container>
          <h2 className="mx-auto max-w-2xl text-center font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {obrigado.promessaTitulo}
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {obrigado.entregas.map((e, i) => {
              const Icone = entregaIcones[i];
              return (
                <article key={e.titulo} className="rounded-2xl border border-accent/30 bg-background/60 p-6 sm:p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-dark">
                    <Icone size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extrabold text-white sm:text-2xl">{e.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-ivory/80">{e.texto}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

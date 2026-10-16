# LP · Confirmação da Mentoria RMA

Página única de "obrigado": destino do formulário de aplicação da Mentoria RMA (yayforms, link em `obrigado.formularioUrl` dentro de `src/content.js`). Modelo "quase lá": agradece, manda confirmar o horário no WhatsApp, avisa que sem confirmação a vaga vai pra outro, botão de WhatsApp e os dois blocos do que a Rainha entrega (análise 360° + plano de ação). Irmã das LPs do Beabá e da Consulta: mesma stack, mesma identidade, mesmo deploy.

## Stack
- Vite 5 + React 18 + Tailwind 3. Ícones: lucide-react. Fontes via @fontsource (Montserrat 700/800, Open Sans 400/600/700), sem Google Fonts.
- `npm install` → `npm run dev` (local) → `npm run build` (gera `dist/`).
- Deploy: Dockerfile (node → nginx), workflow em `.github/workflows/docker-image.yml` publica `ghcr.io/felip2ee/lp-confirmacao-rma-eliane` a cada push na `main`, `docker-stack.yml` sobe no Swarm atrás do Traefik.

## Onde mexer
- **Toda a copy está em `src/content.js`**, no objeto `obrigado`: nome do produto, número e mensagem do WhatsApp, textos de atenção, blocos da promessa. Rodapé e termos em `rodape`.
- Layout: `src/pages/Obrigado.jsx`. Rodapé em `src/components/lp/Footer.jsx`.
- Imagens em `public/assets/` (cutout da Eliane fazendo o gesto de dinheiro, logo Nova Digital).

## Identidade visual (tailwind.config.js)
- primary `#063A29` · secondary `#105B41` · accent (dourado) `#DCA452` · background `#04281C` · dark `#02150E` · ivory `#F3EEE4`
- Display: Montserrat · Corpo: Open Sans

## Regras de copy
- **Sem travessão** em lugar nenhum.
- **Nunca prometer aprovação nem vaga garantida.** Quem aprova é o banco. O formulário é aplicação, não agendamento confirmado.
- Vocabulário do empresário. A Eliane é "a Rainha" nas frases curtas.

## Pendências pra publicar
- Domínio no `docker-stack.yml` (está `confirmacao.elianearainhadocredito.com`).
- Configurar o redirect final do yayforms pra esse domínio.
- GTM: container próprio desta página, GTM-MG96VGS3 (em `index.html`).

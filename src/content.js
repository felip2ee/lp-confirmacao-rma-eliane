// =====================================================================
// CONTEÚDO DA PÁGINA
// Tudo que é texto ou número da página mora aqui. Nada de travessão.
// =====================================================================

// ---------------------------------------------------------------------
// OBRIGADO (página /obrigado, destino do formulário de aplicação da RMA)
// Tela única, no modelo "quase lá": foto, agradece, manda confirmar no WhatsApp,
// avisa que sem confirmação a vaga vai pra outro, botão de WhatsApp.
// A promessa (análise 360° + plano de ação) fica só no rodapé, em letra pequena.
// ---------------------------------------------------------------------
export const obrigado = {
  produto: 'Mentoria RMA',
  formularioUrl: 'https://yayforms.link/m3kXj2l',
  whatsappNumero: '556381089024',
  whatsappMensagem: 'Olá, acabei de me aplicar pra Mentoria RMA e quero adiantar a confirmação do meu horário.',

  eyebrow: 'Quase lá!',
  titulo: 'Sua aplicação',
  tituloDestaque: 'foi enviada.',
  atencao: [
    { antes: 'Atenção: fique de olho no seu WhatsApp, pois ', forte: 'você vai precisar confirmar o seu horário com o nosso time.' },
    { antes: 'Se não confirmar, ', forte: 'a vaga pode ir pra outro empresário.' },
  ],
  furarFila: 'Pra furar a fila e falar com o time o quanto antes, clique no botão abaixo:',
  cta: 'Quero falar com o time',

};

export const obrigadoWhatsappHref = obrigado.whatsappNumero
  ? `https://wa.me/${obrigado.whatsappNumero}?text=${encodeURIComponent(obrigado.whatsappMensagem)}`
  : '#';

// ---------------------------------------------------------------------
// RODAPÉ
// ---------------------------------------------------------------------
export const rodape = {
  marca: 'Rainha do Crédito',
  descricao: 'Mentoria RMA: orientação em crédito empresarial com Eliane Moreira.',
  promessa: 'Na consulta, a Rainha faz uma análise 360° da sua empresa e entrega um plano de ação personalizado pra você ser bem visto no banco e ter acesso aos melhores créditos. Preencher o formulário não garante uma das vagas: elas são limitadas e cada interessado é avaliado com cuidado.',
  aviso: 'Esta página não é de um banco, não concede empréstimos e não garante aprovação de crédito. Quem decide é a instituição financeira. A consulta é orientação profissional sobre o seu caso.',
  termos: {
    titulo: 'Termos de uso',
    texto: 'A Mentoria RMA e a consulta com a Rainha do Crédito são serviços de orientação em crédito empresarial prestados por Eliane Moreira. Não constituem concessão de crédito, intermediação com resultado garantido nem promessa de aprovação: a decisão é sempre da instituição financeira. O envio do formulário de aplicação não garante vaga. As vagas são limitadas e cada interessado é avaliado individualmente.',
  },
  privacidade: {
    titulo: 'Política de privacidade',
    texto: 'Os dados que você informa (nome, contato e as informações da empresa enviadas no formulário pré-consulta) são usados apenas pra avaliar a sua aplicação, entrar em contato e, se aceita, preparar e realizar a consulta. Não compartilhamos seus dados com terceiros. O pagamento é processado por plataforma segura; não armazenamos dados de cartão.',
  },
};

// =====================================================================
// CONTEÚDO DA PÁGINA
// Tudo que é texto ou número da página mora aqui. Nada de travessão.
// =====================================================================

// ---------------------------------------------------------------------
// OBRIGADO (página /obrigado, destino do formulário de aplicação da RMA)
// Tela única, no modelo "quase lá": agradece, manda confirmar no WhatsApp,
// avisa que sem confirmação a vaga vai pra outro, botão de WhatsApp e a
// promessa do que a Rainha entrega. Preencher não garante vaga nem crédito.
// ---------------------------------------------------------------------
export const obrigado = {
  produto: 'Mentoria RMA',
  vagasPorSemana: 8, // igual ao formulário
  formularioUrl: 'https://yayforms.link/m3kXj2l',
  whatsappNumero: '556381089024',
  whatsappMensagem: 'Olá, acabei de me aplicar pra Mentoria RMA e quero adiantar a confirmação do meu horário.',

  eyebrow: 'Quase lá!',
  titulo: 'Sua aplicação foi enviada.',
  atencao: [
    { antes: 'Atenção: fique de olho no seu WhatsApp, pois ', forte: 'você vai precisar confirmar o seu horário com o nosso time.' },
    { antes: 'Se não confirmar, ', forte: 'a vaga pode ir pra outro empresário.' },
  ],
  furarFila: 'Pra furar a fila e falar com o time o quanto antes, clique no botão abaixo:',
  cta: 'Quero falar com o time',

  promessaTitulo: 'O que a Rainha vai entregar na sua consulta',
  entregas: [
    {
      titulo: 'Análise 360° da sua empresa',
      texto: 'A Rainha olha a empresa do jeito que o banco olha: faturamento, tempo de CNPJ, histórico de pagamento da empresa e dos sócios, dívidas, garantias e o que já foi pedido e negado.',
    },
    {
      titulo: 'Plano de ação personalizado',
      texto: 'O que ajustar, em que ordem e qual linha pedir pra ser bem visto no banco e ter acesso aos melhores créditos, com o teto que a sua empresa sustenta.',
    },
  ],

  aviso: 'Preencher o formulário não garante uma das vagas e não é promessa de crédito. Quem aprova é o banco. As vagas são limitadas, por isso cada interessado é avaliado com cuidado.',
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

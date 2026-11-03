// =====================================================================
// CONTEÚDO DA PÁGINA
// Tudo que é texto ou número da página mora aqui. Nada de travessão.
// =====================================================================

// ---------------------------------------------------------------------
// OBRIGADO (página /obrigado, destino do formulário de aplicação da RMA)
// Tela única, no modelo "quase lá": foto, agradece, manda confirmar no WhatsApp,
// avisa que sem confirmação a vaga vai pra outro, botão de WhatsApp e, abaixo,
// os dois blocos do que a Rainha entrega (análise 360° + plano de ação).
// ---------------------------------------------------------------------
export const obrigado = {
  produto: 'Mentoria RMA',
  formularioUrl: 'https://yayforms.link/m3kXj2l',
  whatsappNumero: '556381089024',
  whatsappMensagem: 'Olá, quero confirmar o meu agendamento para a reunião estratégica.',

  eyebrow: 'Quase lá!',
  titulo: 'Sua aplicação',
  tituloDestaque: 'foi enviada.',
  atencao: [
    { antes: 'Atenção: fique de olho no seu WhatsApp, pois ', forte: 'o nosso time vai entrar em contato pra você confirmar o seu horário.' },
    { antes: 'O contato segue a ordem de chegada das aplicações. Se não confirmar quando chegar a sua vez, ', forte: 'a vaga pode ir pra outro empresário.' },
  ],
  furarFila: 'Pra furar a fila e confirmar o seu agendamento agora, clique no botão abaixo:',
  cta: 'Quero confirmar meu agendamento',

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
};

export const whatsappHref = (numero, mensagem) =>
  numero ? `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}` : '#';

export const obrigadoWhatsappHref = whatsappHref(obrigado.whatsappNumero, obrigado.whatsappMensagem);

// ---------------------------------------------------------------------
// RODAPÉ
// ---------------------------------------------------------------------
export const rodape = {
  marca: 'Rainha do Crédito',
  descricao: 'Orientação em crédito empresarial com Eliane Moreira.',
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

// ---------------------------------------------------------------------
// CORRETORES DE DINHEIRO (páginas /corretores/aprovado e /corretores/reprovado,
// destinos do formulário de aplicação pra Reunião Estratégica 1 a 1)
// Aprovado: ele já escolheu o horário no formulário, só falta confirmar com o time.
// Reprovado: encerra sem queimar a ponte. Sem link de agenda em hipótese alguma.
// ---------------------------------------------------------------------
export const corretores = {
  produto: 'Corretores de Dinheiro',
  formularioUrl: '#', // TROCAR: link do formulário de aplicação dos corretores
  instagramUrl: 'https://www.instagram.com/', // TROCAR: perfil que mostra a análise de crédito derrubando vendas
  whatsappNumero: '556381089024',

  aprovado: {
    whatsappMensagem: 'Olá, quero confirmar a minha Reunião Estratégica.',
    eyebrow: 'Seu perfil passou!',
    titulo: 'Agora falta um passo:',
    tituloDestaque: 'confirmar a sua reunião.',
    subtitulo: 'Na reunião, a gente vai calcular quanto de comissão você já deixou na mesa com clientes reprovados e desenhar como colocar a comissão do financiamento no seu bolso na próxima venda.',
    atencao: [
      { antes: 'Fique de olho no seu WhatsApp, pois ', forte: 'o nosso time vai entrar em contato pra confirmar o horário que você escolheu.' },
      { antes: 'Horário escolhido é horário travado. Se não confirmar, ', forte: 'a vaga vai pra outro corretor.' },
    ],
    furarFila: 'Pra confirmar agora e garantir o seu horário, clique no botão abaixo:',
    cta: 'Quero confirmar minha reunião',

    combinadoTitulo: 'Um combinado antes da reunião:',
    combinado: 'Essa agenda é disputada. Se não puder comparecer, remarque com pelo menos 24 horas de antecedência pelo WhatsApp. Quem falta sem avisar perde a vaga e não entra em nova agenda.',
    duvidas: 'Dúvidas antes da reunião? Chama no WhatsApp.',
  },

  reprovado: {
    eyebrow: 'Obrigado pelo interesse.',
    titulo: 'Neste momento, seu perfil',
    tituloDestaque: 'não entra na agenda das Reuniões Estratégicas.',
    corpo: [
      'As vagas de reunião são poucas e priorizamos corretores que já estão fechando vendas financiadas todo mês, porque é nesse cenário que o processo gera resultado mais rápido: cliente aprovado na análise e comissão do financiamento entrando na mesma venda.',
      'Isso não é um "não" definitivo. É um "ainda não".',
    ],
    encaixeTitulo: 'Quando você se encaixa:',
    encaixe: [
      'Fechou sua primeira venda de imóvel financiado (MCMV ou SBPE)',
      'Está com CRECI ativo',
      'Teve cliente travado ou reprovado na análise do banco',
    ],
    encaixeFecho: 'Bateu esses três pontos? Preencha o formulário de novo que sua aplicação será reavaliada.',
    ctaFormulario: 'Refazer a aplicação',
    consolacao: 'Enquanto isso, siga o Instagram: é lá que mostramos, na prática, como a análise de crédito derruba vendas e o que dá pra fazer antes de mandar o cliente pro banco.',
    ctaInstagram: 'Seguir no Instagram',
    fecho: 'Guarde esta página. O mercado de financiado está crescendo e a sua primeira venda financiada pode estar mais perto do que parece.',
  },
};

export const rodapeCorretores = {
  ...rodape,
  descricao: 'Crédito imobiliário na prática pra corretores, com Eliane Moreira.',
  termos: {
    ...rodape.termos,
    texto: 'A Reunião Estratégica do Corretores de Dinheiro é um serviço de orientação prestado por Eliane Moreira. Não constitui concessão de crédito nem promessa de aprovação de financiamento: a decisão é sempre da instituição financeira. O envio do formulário de aplicação não garante vaga. As vagas são limitadas e cada corretor é avaliado individualmente.',
  },
  privacidade: {
    ...rodape.privacidade,
    texto: 'Os dados que você informa (nome, contato e as respostas do formulário de aplicação) são usados apenas pra avaliar a sua aplicação, entrar em contato e, se aceita, preparar e realizar a reunião. Não compartilhamos seus dados com terceiros.',
  },
};

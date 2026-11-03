import React from 'react';
import Obrigado from './pages/Obrigado';
import CorretoresAprovado from './pages/CorretoresAprovado';
import CorretoresReprovado from './pages/CorretoresReprovado';

// Sem router: a página é escolhida pelo caminho da URL. O nginx devolve o
// index.html pra qualquer caminho, então os slugs funcionam direto.
const paginas = {
  '/corretores/aprovado': CorretoresAprovado,
  '/corretores/reprovado': CorretoresReprovado,
};

function App() {
  const Pagina = paginas[window.location.pathname.replace(/\/$/, '')] || Obrigado;
  return <Pagina />;
}

export default App;

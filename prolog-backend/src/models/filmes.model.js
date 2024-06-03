// Simulação das funções Prolog
let filmes = [
    { filme: 'Bacurau', diretor: 'Kleber Mendonça Filho', ano: 2019 },
    // outros filmes...
  ];
  
  exports.filmes_por_diretor = (diretor) => {
    return filmes.filter(f => f.diretor === diretor).map(f => f.filme);
  };
  
  exports.filmes_por_ano = (ano) => {
    return filmes.filter(f => f.ano === parseInt(ano)).map(f => f.filme);
  };
  
  exports.diretores_por_filme = (filme) => {
    return filmes.filter(f => f.filme === filme).map(f => f.diretor);
  };
  
  exports.adicionar_filme = (filme, diretor, ano) => {
    filmes.push({ filme, diretor, ano: parseInt(ano) });
  };
  
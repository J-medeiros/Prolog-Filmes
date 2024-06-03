 % Base de Conhecimento de Filmes Brasileiros

 % Fatos sobre os filmes
 % filme(Título, Diretor, Ano)
 filme('Cidade de Deus', 'Fernando Meirelles', 2002).
 filme('Cidade de Deus', 'Kátia Lund', 2002).
 filme('Central do Brasil', 'Walter Salles', 1998).
 filme('Tropa de Elite', 'José Padilha', 2007).
 filme('O Auto da Compadecida', 'Guel Arraes', 2000).
 filme('Aquarius', 'Kleber Mendonça Filho', 2016).
 filme('Que Horas Ela Volta?', 'Anna Muylaert', 2015).
 filme('O Pagador de Promessas', 'Anselmo Duarte', 1962).
 filme('Bacurau', 'Kleber Mendonça Filho', 2019).
 filme('Bacurau', 'Juliano Dornelles', 2019).
 filme('Carandiru', 'Hector Babenco', 2003).
 filme('O Homem que Copiava', 'Jorge Furtado', 2003).
 filme('teste', 'teste' , 2001).
 filme('teste', 'teste' , 2001).
 % Regras de Inferência


 % Encontrar filmes por um determinado diretor
 % Exemplo de uso: filmes_por_diretor('José Padilha', Filme).
 filmes_por_diretor(Diretor, Filme) :-
     filme(Filme, Diretor, _).
 % Encontrar filmes lançados em um determinado ano
 % Exemplo de uso: filmes_por_ano(2003, Filme).
 filmes_por_ano(Ano, Filme) :-
     filme(Filme, _, Ano).
 % Encontrar diretores de um determinado filme
 % Exemplo de uso: diretores_por_filme('Bacurau', Diretor).
 diretores_por_filme(Filme, Diretor) :-
     filme(Filme, Diretor, _).
 % Adicionar um novo filme dinamicamente
 % Exemplo de uso: adicionar_filme('Novo Filme', 'Novo Diretor', 2024).
 adicionar_filme(Filme, Diretor, Ano) :-
     assertz(filme(Filme, Diretor, Ano)).
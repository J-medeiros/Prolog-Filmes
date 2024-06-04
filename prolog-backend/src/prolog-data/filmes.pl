% Declarar que filme/5 é dinâmico
:- dynamic(filme/5).

% Diretiva para indicar que as cláusulas do predicado filme/5 não estão contíguas
:- discontiguous(filme/5).

% Fatos sobre os filmes
% filme(Título, Diretor, Ano, Imagem, Categoria)
filme('Cidade de Deus', 'Fernando Meirelles', 2002, 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/CidadedeDeus.jpg/220px-CidadedeDeus.jpg', 'acao').
filme('Central do Brasil', 'Walter Salles', 1998, 'https://miro.medium.com/v2/resize:fit:720/1*UorJOPaviKxp_i2ApzRyHw.jpeg', 'drama').
filme('Tropa de Elite', 'José Padilha', 2007, 'https://br.web.img3.acsta.net/medias/nmedia/18/87/22/38/19873277.jpg', 'acao').
filme('O Auto da Compadecida', 'Guel Arraes', 2000, 'https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg', 'comedia').
filme('Aquarius', 'Kleber Mendonça Filho', 2016, 'https://m.media-amazon.com/images/M/MV5BNDI3NzYyMDQtY2VjOC00ZThhLWE4ZDktYjljZDI5NGViMzA4XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_.jpg', 'drama').
filme('Que Horas Ela Volta?', 'Anna Muylaert', 2015, 'https://upload.wikimedia.org/wikipedia/pt/7/78/Que_horas_ela_volta_ver3_xlg.jpg', 'drama').
filme('O Pagador de Promessas', 'Anselmo Duarte', 1962, 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/27/69/19873833.jpg', 'drama').
filme('Bacurau', 'Kleber Mendonça Filho', 2019, 'https://br.web.img3.acsta.net/pictures/19/07/25/20/52/1819461.jpg', 'acao').
filme('Carandiru', 'Hector Babenco', 2003, 'https://m.media-amazon.com/images/M/MV5BMmQzY2RmYzMtYzRiOS00ZTMzLTgxMGYtZjRkNzAzYjA2MmVkXkEyXkFqcGdeQXVyNDc2MTA2NDg@._V1_.jpg', 'drama').
filme('O Homem que Copiava', 'Jorge Furtado', 2003, 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/07/87/19871796.jpg', 'comedia').

% Regras de Inferência

filmes_por_diretor(Diretor, Titulo, Ano, Imagem, Categoria) :-
    filme(Titulo, Diretor, Ano, Imagem, Categoria).

filmes_por_ano(Ano, Titulo, Diretor, Imagem, Categoria) :-
    filme(Titulo, Diretor, Ano, Imagem, Categoria).

diretores_por_filme(Titulo, Diretor, Ano, Imagem, Categoria) :-
    filme(Titulo, Diretor, Ano, Imagem, Categoria).

adicionar_filme(Titulo, Diretor, Ano, Imagem, Categoria) :-
    assertz(filme(Titulo, Diretor, Ano, Imagem, Categoria)).

filmes_por_categoria(Categoria, Titulo, Diretor, Ano, Imagem) :-
    filme(Titulo, Diretor, Ano, Imagem, Categoria).

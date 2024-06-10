const { exec } = require("child_process");
const path = require("path");


const prologFilePath = path.resolve(__dirname, '../prolog-data/filmes.pl');

const runPrologQuery = (query, callback) => {
  exec(
    `swipl -s "${prologFilePath}" -g "${query}" -t halt`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar comando Prolog: ${stderr}`);
        callback(stderr, null);
      } else {
        console.log(`Saída do Prolog: ${stdout}`);
        const results = stdout
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0);
        callback(null, results);
      }
    }
  );
};exports.consultarFilmesPorDiretor = (req, res) => {
  const diretor = req.body.diretor;

  if (!diretor) {
    return res.status(400).json({ error: "Diretor é obrigatório" });
  }

  const consulta = `findall([Titulo, Ano, Imagem, Categoria], filmes_por_diretor('${diretor.replace(/'/g, "\\'")}', Titulo, Ano, Imagem, Categoria), Lista), writeln(Lista).`;
  console.log(`Executando consulta: ${consulta}`);

  runPrologQuery(consulta, (err, stdout) => {
    if (err) {
      console.error(`Erro: ${err}`);
      return res.status(500).json({ error: "Erro ao executar a consulta Prolog" });
    } else {
      try {
        const filmes = stdout.map((line) => {
          const [titulo, ano, imagem, categoria] = line
            .replace(/[\[\]']+/g, "")
            .split(",")
            .map((item) => item.trim());
          return { titulo, ano, imagem, diretor, categoria }; // Adicionei o 'diretor' e 'categoria' ao objeto filme
        });
        console.log(`Filmes encontrados: ${JSON.stringify(filmes)}`);
        res.json(filmes);
      } catch (e) {
        console.error(`Erro ao processar resultado: ${e.message}`);
        res.status(500).json({ error: "Erro ao processar resultado Prolog" });
      }
    }
  });
};

exports.consultarFilmesPorAno = (req, res) => {
  const ano = req.body.ano;

  if (!ano) {
    return res.status(400).json({ error: "Ano é obrigatório" });
  }

  const consulta = `findall([Titulo, Diretor, Imagem, Categoria], filmes_por_ano(${ano}, Titulo, Diretor, Imagem, Categoria), Lista), writeln(Lista).`;
  console.log(`Executando consulta: ${consulta}`);

  runPrologQuery(consulta, (err, stdout) => {
    if (err) {
      console.error(`Erro: ${err}`);
      return res.status(500).json({ error: "Erro ao executar a consulta Prolog" });
    } else {
      const filmes = stdout.map((line) => {
        const [titulo, diretor, imagem, categoria] = line
          .replace(/[\[\]']+/g, "")
          .split(",")
          .map((item) => item.trim());
        return { titulo, diretor, imagem, ano, categoria }; // Adicionei o 'ano' e 'categoria' ao objeto filme
      });
      console.log(`Filmes encontrados: ${filmes}`);
      res.json(filmes);
    }
  });
};
exports.consultarDiretoresPorFilme = (req, res) => {
  const titulo = req.body.titulo;

  if (!titulo) {
    return res.status(400).json({ error: "Título é obrigatório" });
  }

  const consulta = `findall([Diretor, Ano, Imagem, Categoria], diretores_por_filme('${titulo.replace(/'/g, "\\'")}', Diretor, Ano, Imagem, Categoria), Lista), writeln(Lista).`;
  console.log(`Executando consulta: ${consulta}`);

  runPrologQuery(consulta, (err, stdout) => {
    if (err) {
      console.error(`Erro: ${err}`);
      return res.status(500).json({ error: "Erro ao executar a consulta Prolog" });
    } else {
      const filmes = stdout.map((line) => {
        const [diretor, ano, imagem, categoria] = line
          .replace(/[\[\]']+/g, "")
          .split(",")
          .map((item) => item.trim());
        return { titulo, diretor, ano, imagem, categoria }; // Adicionei o 'titulo' e 'categoria' ao objeto filme
      });
      console.log(`Diretores encontrados: ${filmes}`);
      res.json(filmes);
    }
  });
};

exports.consultarFilmesPorCategoria = (req, res) => {
  const categoria = req.body.categoria;

  if (!categoria) {
    return res.status(400).json({ error: "Categoria é obrigatória" });
  }

  const consulta = `findall([Titulo, Diretor, Ano, Imagem], filmes_por_categoria('${categoria}', Titulo, Diretor, Ano, Imagem), Lista), writeln(Lista).`;
  console.log(`Executando consulta: ${consulta}`);

  runPrologQuery(consulta, (err, stdout) => {
    if (err) {
      console.error(`Erro: ${err}`);
      return res.status(500).json({ error: "Erro ao executar a consulta Prolog" });
    } else {
      const filmes = stdout.map((line) => {
        const [titulo, diretor, ano, imagem] = line
          .replace(/[\[\]']+/g, "")
          .split(",")
          .map((item) => item.trim());
        return { titulo, diretor, ano, imagem, categoria }; // Adicionei o 'categoria' ao objeto filme
      });
      console.log(`Filmes encontrados: ${filmes}`);
      res.json(filmes); // Retorna diretamente a matriz de objetos de filme
    }
  });
};
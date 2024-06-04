const { exec } = require('child_process');
const path = require('path');

const prologFilePath = path.resolve(__dirname, '../prolog-data/filmes.pl');

const runPrologQuery = (query, callback) => {
    exec(`swipl -s "${prologFilePath}" -g "${query}" -t halt`, (error, stdout, stderr) => {
        if (error) {
            callback(stderr, null);
        } else {
            const results = stdout.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0);
            callback(null, results);
        }
    });
};

exports.consultarFilmesPorDiretor = (req, res) => {
    const diretor = req.body.diretor;

    if (!diretor) {
        return res.status(400).json({ error: 'Diretor é obrigatório' });
    }

    const consulta = `findall([Titulo, Ano, Imagem], filmes_por_diretor('${diretor}', Titulo, Ano, Imagem), Lista), writeln(Lista).`;
    console.log(`Executando consulta: ${consulta}`);

    runPrologQuery(consulta, (err, stdout) => {
        if (err) {
            console.error(`Erro: ${err}`);
            return res.status(500).json({ error: 'Erro ao executar a consulta Prolog' });
        } else {
            const filmes = stdout.map(line => {
                const [titulo, ano, imagem] = line.replace(/[\[\]']+/g, '').split(',').map(item => item.trim());
                return { titulo, ano, imagem };
            });
            console.log(`Filmes encontrados: ${filmes}`);
            res.json({ filmes });
        }
    });
};

exports.consultarFilmesPorAno = (req, res) => {
    const ano = req.body.ano;

    if (!ano) {
        return res.status(400).json({ error: 'Ano é obrigatório' });
    }

    const consulta = `findall([Titulo, Diretor, Imagem], filmes_por_ano(${ano}, Titulo, Diretor, Imagem), Lista), writeln(Lista).`;
    console.log(`Executando consulta: ${consulta}`);

    runPrologQuery(consulta, (err, stdout) => {
        if (err) {
            console.error(`Erro: ${err}`);
            return res.status(500).json({ error: 'Erro ao executar a consulta Prolog' });
        } else {
            const filmes = stdout.map(line => {
                const [titulo, diretor, imagem] = line.replace(/[\[\]']+/g, '').split(',').map(item => item.trim());
                return { titulo, diretor, imagem };
            });
            console.log(`Filmes encontrados: ${filmes}`);
            res.json({ filmes });
        }
    });
};

exports.consultarDiretoresPorFilme = (req, res) => {
    const titulo = req.body.titulo;

    if (!titulo) {
        return res.status(400).json({ error: 'Título é obrigatório' });
    }

    const consulta = `findall([Diretor, Ano, Imagem], diretores_por_filme('${titulo}', Diretor, Ano, Imagem), Lista), writeln(Lista).`;
    console.log(`Executando consulta: ${consulta}`);

    runPrologQuery(consulta, (err, stdout) => {
        if (err) {
            console.error(`Erro: ${err}`);
            return res.status(500).json({ error: 'Erro ao executar a consulta Prolog' });
        } else {
            const diretores = stdout.map(line => {
                const [diretor, ano, imagem] = line.replace(/[\[\]']+/g, '').split(',').map(item => item.trim());
                return { diretor, ano, imagem };
            });
            console.log(`Diretores encontrados: ${diretores}`);
            res.json({ diretores });
        }
    });
};

exports.adicionarFilme = (req, res) => {
    const { titulo, diretor, ano, imagem } = req.body;

    if (!titulo || !diretor || !ano || !imagem) {
        return res.status(400).json({ error: 'Título, Diretor, Ano e Imagem são obrigatórios' });
    }

    const consulta = `assertz(filme('${titulo}', '${diretor}', ${ano}, '${imagem}')), writeln('Filme adicionado').`;
    console.log(`Executando consulta: ${consulta}`);

    runPrologQuery(consulta, (err, output) => {
        if (err) {
            console.error(`Erro: ${err}`);
            return res.status(500).json({ error: 'Erro ao executar a consulta Prolog' });
        } else {
            if (output.includes('Filme adicionado')) {
                res.status(201).send('Filme adicionado com sucesso');
            } else {
                res.status(500).json({ error: 'Erro ao adicionar filme' });
            }
        }
    });
};
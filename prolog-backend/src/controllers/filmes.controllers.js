const { exec } = require('child_process');
const path = require('path');

// Use path.resolve para garantir que o caminho esteja correto
const prologFilePath = path.resolve(__dirname, '../prolog-data/filmes.pl');

exports.consultarFilmesPorDiretor = (req, res) => {
    const diretor = req.body.diretor;

    if (!diretor) {
        return res.status(400).json({ error: 'Diretor é obrigatório' });
    }

    const consulta = `filmes_por_diretor('${diretor}', Filme), write(Filme), nl.`;

    console.log(`Executando consulta: ${consulta}`);

    exec(`swipl -s "${prologFilePath}" -g "${consulta}" -t halt`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${stderr}`);
            return res.status(500).json({ error: 'Erro ao executar a consulta Prolog' });
        } else {
            console.log(`Saída do Prolog: ${stdout}`);
            
            const filmes = stdout.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0);

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

    const consulta = `filmes_por_ano(${ano}, Filme), write(Filme), nl.`;

    console.log(`Executando consulta: ${consulta}`);

    exec(`swipl -s "${prologFilePath}" -g "${consulta}" -t halt`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${stderr}`);
            return res.status(500).json({ error: 'Erro ao executar a consulta Prolog' });
        } else {
            console.log(`Saída do Prolog: ${stdout}`);
            
            const filmes = stdout.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0);

            console.log(`Filmes encontrados: ${filmes}`);

            res.json({ filmes });
        }
    });
};

exports.consultarDiretoresPorFilme = (req, res) => {
    const filme = req.body.filme;

    if (!filme) {
        return res.status(400).json({ error: 'Filme é obrigatório' });
    }

    const consulta = `diretores_por_filme('${filme}', Diretor), write(Diretor), nl.`;

    console.log(`Executando consulta: ${consulta}`);

    exec(`swipl -s "${prologFilePath}" -g "${consulta}" -t halt`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${stderr}`);
            return res.status(500).json({ error: 'Erro ao executar a consulta Prolog' });
        } else {
            console.log(`Saída do Prolog: ${stdout}`);
            
            const diretores = stdout.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0);

            console.log(`Diretores encontrados: ${diretores}`);

            res.json({ diretores });
        }
    });
};

exports.adicionarFilme = (req, res) => {
    const { filme, diretor, ano } = req.body;

    if (!filme || !diretor || !ano) {
        return res.status(400).json({ error: 'Filme, Diretor e Ano são obrigatórios' });
    }

    const consulta = `assertz(filme('${filme}', '${diretor}', ${ano})), write('Filme adicionado'), nl.`;

    console.log(`Executando consulta: ${consulta}`);

    exec(`swipl -s "${prologFilePath}" -g "${consulta}" -t halt`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${stderr}`);
            return res.status(500).json({ error: 'Erro ao executar a consulta Prolog' });
        } else {
            console.log(`Saída do Prolog: ${stdout}`);
            
            if (stdout.includes('Filme adicionado')) {
                res.status(201).send('Filme adicionado com sucesso');
            } else {
                res.status(500).json({ error: 'Erro ao adicionar filme' });
            }
        }
    });
};

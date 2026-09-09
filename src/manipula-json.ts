import { existsSync, mkdirSync, writeFileSync, readFileSync} from 'fs';

// Models:
type Livro = {
    titulo: string;
    autor: string;
    genero?: string;
    ano: number;
    lido: boolean;
};

type Hobby = string;

type FamosoFavotito = {
    nome: string;
};
type Amigo = {
    nome: string;
    ondeConheci: string
    hobby: string;
    FavoriteFamous: string;
};

// Manipulação de Arquivos json

//1. Função para adicionar um livro a um arquivo
const livros: Livro[] = [];
livros.push({
    titulo: "O senhor dos anéis",
    autor: "J.R.R",
    genero: "Fantasia",
    ano: 1954,
    lido: true
});

livros.push({
    titulo: "O Diário de um banana",
    autor: "Jeff Kinney",
    genero: "Comédia",
    ano: 2008,
    lido: true
});

livros.push({
    titulo: "It: a coisa",
    autor: "Stephen King",
    genero: "Terror",
    ano: 1986,
    lido: false
});

//2. Percorrer o array (lista) de livros e imprimir os titulos
livros.forEach((livro) => {
    console.log(`Titulo: ${livro.titulo} (${livro.ano}) - Autor: ${livro.autor} - ${livro.lido ? "Lido" : "Não Lido"})`);
    });

//3. Filtrar a lista (ex: Apenas os livros lidos)
const livrosLidos = livros.filter((livro) =>livro.lido === true);

//4. Encontrar um livro especifico (ex: Por um campo)
const livroEncontrado = livros.find((livro) =>livro.titulo === "1984");

//5. Salvar no disco (em um arquivo JSON)
const diretorio = 'data';
if (!existsSync(diretorio)) {
    mkdirSync(diretorio);
}

writeFileSync(`${diretorio}/livros.json`, JSON.stringify(livros, null, 2), 'utf-8');
// Os parâmetros null, 2 servem para indentar e deixar visualmente legível.

//6. Ler do disco (de um arquivo JSON)
const livrosLidosDoArquivo:
    Livro[] = JSON.parse(readFileSync(`${diretorio}/livros.json`, 'utf-8'));
console.log("Livros lidos do arquivo JSON:", livrosLidosDoArquivo);



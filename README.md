# persistencia-de-dados.fs

## Desenvolvido por Arthur Sudário Bonatto Reis

Esta atividade foi desenvolvida com o objetivo de praticar conceitos de persistência e manipulação de dados utilizando TypeScript no Visual Studio Code. Durante o desenvolvimento, foram trabalhados conceitos como arrays, objetos, interfaces, tipagem, manipulação de informações e o uso de JSON para organização e armazenamento de dados.

O projeto utiliza uma lista de livros, contendo informações como título, autor, gênero, ano de publicação e se o livro já foi lido. Um exemplo de objeto utilizado no projeto é:

```ts
{
    titulo: "It: a coisa",
    autor: "Stephen King",
    genero: "Terror",
    ano: 1986,
    lido: true
}
````

Também foi utilizado o método `forEach()` para percorrer o array de livros e exibir suas informações:

```ts
livros.forEach((livro) => {
    console.log(`Título: ${livro.titulo} (${livro.ano}) - Autor: ${livro.autor} - Lido: ${livro.lido}`);
});
```

Nesse código, o `forEach()` percorre cada elemento do array `livros`, enquanto a variável `livro` representa cada objeto individualmente. Dessa forma, é possível acessar suas propriedades, como `titulo`, `autor`, `genero`, `ano` e `lido`.

### Tecnologias utilizadas

* TypeScript
* Node.js
* JSON
* Visual Studio Code
* Git e GitHub

### Conceitos praticados

* Criação e manipulação de arrays
* Criação e utilização de objetos
* Interfaces e tipagem com TypeScript
* Manipulação de dados
* Uso do método `forEach()`
* Persistência de informações
* Leitura e armazenamento de dados em JSON

### Objetivo

O objetivo principal da atividade foi compreender como dados podem ser criados, armazenados, acessados e manipulados dentro de uma aplicação. A prática também ajudou a desenvolver conhecimentos sobre TypeScript, JSON e a organização de projetos no Visual Studio Code.

### Conclusão

A atividade permitiu colocar em prática conceitos importantes do desenvolvimento de sistemas, principalmente relacionados à manipulação e persistência de dados. Com o uso do TypeScript e JSON, foi possível organizar informações de livros e realizar operações sobre esses dados, desenvolvendo uma melhor compreensão sobre como os dados são utilizados em aplicações.

**Autor:** Arthur Sudário Bonatto Reis
**Curso:** Desenvolvimento de Sistemas – SENAI-SP
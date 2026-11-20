/* =========================================================
   PORTFÓLIO ISABELA KMETIUK — script.js
   ========================================================= */

/* ---------------------------------------------------------
   1) LISTA DE PROJETOS
   Para adicionar um projeto novo:
   - coloque a imagem na pasta img/
   - copie um bloco { ... } abaixo, cole no final da lista
     e troque os textos.
   Atenção: o nome do arquivo precisa ser IGUAL ao da pasta,
   inclusive letras maiúsculas e minúsculas (o GitHub diferencia).
   A "categoria" vira automaticamente um botão de filtro.
   Use inteira: true para imagens que não podem ser cortadas
   (ex.: logotipos em fundo branco).
   --------------------------------------------------------- */
const projetos = [
  {
    titulo: "Studio Siler — Símbolo",
    categoria: "Identidade Visual",
    imagem: "img/Logotipo.png",
    descricao: "Símbolo da marca Studio Siler, estúdio de beleza e cuidado.",
    inteira: true
  },
  {
    titulo: "Studio Siler — Logotipo completo",
    categoria: "Identidade Visual",
    imagem: "img/logotipo2.png",
    descricao: "Versão horizontal com nome e assinatura \"Beleza e Cuidado\".",
    inteira: true
  },
  {
    titulo: "Studio Siler — Cartão de visita",
    categoria: "Papelaria",
    imagem: "img/cartao.png",
    descricao: "Aplicação da identidade visual em cartão de visita lilás."
  },
  {
    titulo: "Logotipo Cerâmica",
    categoria: "Identidade Visual",
    imagem: "img/logotipo-ceramica.png",
    descricao: "Logotipo desenvolvido para marca de cerâmica.",
    inteira: true
  },
  {
    titulo: "Studio Siler — Logotipo versão final",
    categoria: "Identidade Visual",
    imagem: "img/versão final-02.png",
    descricao: "Versão final da marca: símbolo, nome e assinatura \"Beleza e Cuidado\".",
    inteira: true
  },
  {
    titulo: "Studio Siler — Site",
    categoria: "Web",
    imagem: "img/Screenshot_1.png",
    descricao: "Site institucional do Studio Siler, com a identidade visual aplicada.",
    posicao: "left top",
    link: "https://agssmarcela.github.io/StudioSiler/"
  },
  {
    titulo: "Focinho Feliz — Site",
    categoria: "Web",
    imagem: "img/Screenshot_2.png",
    descricao: "Página web do projeto Focinho Feliz.",
    inteira: true,
    link: "https://isabelakmetiukmultimidia-cyber.github.io/focinhofeliz/"
  }
  // , { titulo: "Novo projeto", categoria: "Social Media", imagem: "img/arquivo.png", descricao: "..." }
];

/* ---------------------------------------------------------
   2) GALERIA E FILTROS
   --------------------------------------------------------- */
const galeria =

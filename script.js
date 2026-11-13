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
  }
  // , { titulo: "Novo projeto", categoria: "Social Media", imagem: "img/arquivo.png", descricao: "..." }
];

/* ---------------------------------------------------------
   2) GALERIA E FILTROS
   --------------------------------------------------------- */
const galeria = document.getElementById("galeria");
const filtros = document.getElementById("filtros");

function mostrarProjetos(categoria) {
  galeria.innerHTML = "";

  const lista = categoria === "Todos"
    ? projetos
    : projetos.filter((p) => p.categoria === categoria);

  lista.forEach((p) => {
    const card = document.createElement("article");
    card.className = "projeto";
    card.innerHTML = `
      <div class="projeto__imagem ${p.inteira ? "projeto__imagem--inteira" : ""}">
        <img src="${p.imagem}" alt="${p.titulo}" loading="lazy">
      </div>
      <div class="projeto__info">
        <span class="projeto__categoria">${p.categoria}</span>
        <h3>${p.titulo}</h3>
        <p>${p.descricao}</p>
      </div>
    `;
    card.addEventListener("click", () => abrirLightbox(p.imagem, p.titulo));
    galeria.appendChild(card);
  });
}

function criarFiltros() {
  // pega as categorias sem repetir
  const categorias = ["Todos", ...new Set(projetos.map((p) => p.categoria))];

  categorias.forEach((cat, i) => {
    const botao = document.createElement("button");
    botao.textContent = cat;
    if (i === 0) botao.classList.add("ativo");

    botao.addEventListener("click", () => {
      filtros.querySelectorAll("button").forEach((b) => b.classList.remove("ativo"));
      botao.classList.add("ativo");
      mostrarProjetos(cat);
    });

    filtros.appendChild(botao);
  });
}

criarFiltros();
mostrarProjetos("Todos");

/* ---------------------------------------------------------
   3) LIGHTBOX (imagem ampliada)
   --------------------------------------------------------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxLegenda = document.getElementById("lightbox-legenda");

function abrirLightbox(src, legenda) {
  lightboxImg.src = src;
  lightboxImg.alt = legenda;
  lightboxLegenda.textContent = legenda;
  lightbox.classList.add("aberto");
}

function fecharLightbox() {
  lightbox.classList.remove("aberto");
}

lightbox.addEventListener("click", (e) => {
  // fecha ao clicar no fundo ou no X (não na imagem)
  if (e.target !== lightboxImg) fecharLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharLightbox();
});

/* ---------------------------------------------------------
   4) MENU NO CELULAR
   --------------------------------------------------------- */
const botaoMenu = document.querySelector(".menu__botao");
const linksMenu = document.querySelector(".menu__links");

botaoMenu.addEventListener("click", () => {
  const aberto = linksMenu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
});

// fecha o menu ao clicar em um link
linksMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => linksMenu.classList.remove("aberto"));
});

/* ---------------------------------------------------------
   5) ANIMAÇÃO AO ROLAR A PÁGINA
   --------------------------------------------------------- */
const elementosAnimados = document.querySelectorAll(
  ".titulo-secao, .cartao-servico, .processo__lista li, .contato__item, .destaques li"
);

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

elementosAnimados.forEach((el) => {
  el.classList.add("revelar");
  observador.observe(el);
});

/* ---------------------------------------------------------
   6) ANO AUTOMÁTICO NO RODAPÉ
   --------------------------------------------------------- */
document.getElementById("ano").textContent = new Date().getFullYear();

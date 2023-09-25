let list = document.querySelectorAll(".navigation li"); // Seleciona todos os elementos <li> dentro do elemento com a classe "navigation"
function activeLink() { // Define uma função chamada "activeLink"
  list.forEach((item) => item.classList.remove("active"));  // Remove a classe "active" de todos os elementos <li> (limpa o estado ativo)
  this.classList.add("active"); // Adiciona a classe "active" ao elemento <li> atual (define como ativo), como removeu dos anteirores, ficará só do click
}
list.forEach((item) => item.addEventListener("click", activeLink)); // Adiciona um event listener de clique a cada elemento <li>

/*item.addEventListener("click", activeLink) é a ação realizada para cada elemento. Isso significa que para cada elemento da lista, um event listener de clique é adicionado. O evento que estamos ouvindo é o evento "click", e a função de callback que será executada quando o evento ocorrer é activeLink.
activeLink é a função que será executada quando um dos elementos do menu for clicado. Ela é responsável por alternar as classes dos elementos do menu para marcar o elemento ativo.*/
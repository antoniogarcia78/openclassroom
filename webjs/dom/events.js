// EJERCICIO botones del header cambiar color
// 1 buscar header
const header = document.querySelector('header');
// 2. buscar botones
const blueButton = document.querySelector('#color-button-blue');
const brownButton = document.querySelector('#color-button-brown');
const greenButton = document.querySelector('#color-button-green');
const noneButton = document.querySelector('#color-button-none');
// 3. poner evento click al boton azul
blueButton.addEventListener('click', function () {
  header.classList.remove('blue-background', 'brown-background', 'green-background');
  header.classList.add('blue-background', 'text-white');
});
brownButton.addEventListener('click', function () {
  header.classList.remove('blue-background', 'brown-background', 'green-background');
  header.classList.add('brown-background', 'text-white');
});
greenButton.addEventListener('click', function () {
  header.classList.remove('blue-background', 'brown-background', 'green-background');
  header.classList.add('green-background', 'text-white');
});
noneButton.addEventListener('click', () => {
  header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});
// EJERCICIO boton add post añade new blog post
//function createNewPost() {
// NOTA: si queremos usar funcion anonima o funcion arrow hay que definir ANTES de usarla
let createNewPost = function () {
  let newArticle = document.createElement('article');
  newArticle.classList.add('list-group-item');
  let title = document.createElement('h5');
  title.textContent = 'Another blog post';
  newArticle.appendChild(title);
  let paragraph = document.createElement('p');
  paragraph.textContent =
    'Este es un parrafo generado a mano que podria ser obtenido de servidor usando peticiones ajax que aun no hemos aprendido';
  newArticle.appendChild(paragraph);
  return newArticle;

  // MAL: una funcion tiene que hacer una cosa. En este caso crear un post
  /*
  let section = document.querySelector('section');
  section.appendChild(newArticle);
  */
};

let botonAddPost = document.querySelector('#add-post');
//botonAddPost.addEventListener('click', function () {});
//botonAddPost.addEventListener('click', createNewPost);
botonAddPost.addEventListener('click', () => {
  let newPost = createNewPost();
  let section = document.querySelector('section');
  section.appendChild(newPost);
});

// EJERCICIO boton remove post elimina ultimo post
let botonRemotePost = document.querySelector('#remove-post');
botonRemotePost.addEventListener('click', () => {
  // Opcion 1: buscar todos los article y elegir ultimo y ahi borrar
  // NOTA: no tocar el primer post
  let allArticles = document.querySelectorAll('article');
  const lastPosition = allArticles.length - 1;
  if (lastPosition > 0) {
    let lastArticle = allArticles[lastPosition];
    lastArticle.parentElement.removeChild(lastArticle);
  }
  // Opcion Curso
  // Es mas elegante y el IDE autocompleta
  const articleSection = document.querySelector('section');
  const articleCount = articleSection.childElementCount;
  if (articleCount > 1) {
    // si es mas de 1 podemos borrar. En otro caso seria el articulo original
    articleSection.removeChild(articleSection.children[articleCount - 1]);
  }
});

// NOTA
// Las busqueda de elementos a los que luego asociar eventos las hacemos al principio del fichero

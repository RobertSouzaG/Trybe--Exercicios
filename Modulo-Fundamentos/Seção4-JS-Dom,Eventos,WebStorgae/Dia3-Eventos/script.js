const pai= document.body
const h = document.createElement('h1');
const texto = document.createTextNode('TrybeTrip - Agência de Viagens');
h.appendChild(texto);
pai.appendChild(h);

const tag = document.createElement('main');
tag.className = 'main-content';
pai.appendChild(tag);

const sec = document.createElement('section');
sec.className = 'center-content';
tag.appendChild(sec);

const paragrafo = document.createElement('p');
paragrafo.innerText = 'Melhor agência do Brasil!';
sec.appendChild(paragrafo);

const sec2 = document.createElement('section');
sec2.className = 'left-content';
tag.appendChild(sec2);

const sec3 = document.createElement('section');
sec3.className = 'right-content';
tag.appendChild(sec3);

const imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
sec2.appendChild(imagem);

const lista = document.createElement('ul');
sec3.appendChild(lista);
const arr = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let num in arr) {
    const listaN = document.createElement('li');
    listaN.innerHtml = arr[num];
    lista.appendChild(listaN);
}

for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Show ' + index;
    tag.appendChild(elementH3);
  }

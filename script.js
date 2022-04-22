function dizerAdeus() {
  const nome = document.getElementsByClassName('nome')[0].value;
  alert(`Tchau, ${nome}!`);
}

function createDiv() {
  const id = document.getElementById('classe').value;

  if (id === '') {
    alert('Por favor entre uma CLASS');
  } else {
    const worlds = document.querySelector('.worlds');
    
    const newDiv = document.createElement("p");
    const newContent = document.createTextNode(`Olá, Mundo ${index++}!`);

    newDiv.appendChild(newContent);
    worlds.appendChild(newDiv)
  }
}

function showOnlyEvenNumbers() {
  const divs = [...document.querySelectorAll('.worlds p')];
  divs.forEach((div, index) => {
    if (index % 2 !== 0) {
      div.classList.add('hidden')
    } else if (div.classList.contains('hidden')) {
      div.classList.remove('hidden');
    }
  });
}
function showOnlyOddNumbers() {
  const divs = [...document.querySelectorAll('.worlds p')];
  divs.forEach((div, index) => {
    if (index % 2 === 0) {
      div.classList.add('hidden')
    } else if (div.classList.contains('hidden')) {
      div.classList.remove('hidden');
    }
  });
}

function reloadPage() {
  dizerAdeus();
  window.location.reload();
}

function showInnerHTML() {
  const worlds = document.querySelector('.worlds');
  console.log(worlds.innerHTML);
  alert('Abra o console! [F12]');
}


function showInnerText() {
  const worlds = document.querySelector('.worlds');
  console.log(worlds.innerText);
  alert('Abra o console! [F12]');
}


function showTextContent() {
  const worlds = document.querySelector('.worlds');
  console.log(worlds.textContent);
  alert('Abra o console! [F12]');
}


let index = 0;
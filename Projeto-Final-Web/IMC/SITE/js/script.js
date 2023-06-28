let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// type js
const typed = new Typed('.multiple-text', {
    strings: ['Teorema De Pitágoras', 'IMC', 'Diferença De Temperatura', 'Bhaskara', 'Juros Compostos'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const form = document.getElementById('form'); /* Cria uma constante, referencia o elemento HTML com o ID*/ 
form.addEventListener('submit', function(event) { /*Ele recebe a informação dada pelo usuário. É acionado quando o formulário. */ 
    
    event.preventDefault(); /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */

    const weight = document.getElementById('weight').value; /* Recebe o Peso do usuário */
    const height = document.getElementById('height').value; /* Recebe a Altura do usuário */

    const bmi = (weight / (height * height)).toFixed(2); /* Calcula o IMC divindindo o peso pelo quadrado da Altura*/

    if (!isNaN(bmi)) { /* Usa o 'isNaN para verificar se o número usado é válido */
        const value = document.getElementById('value'); /* Recebe o elemento HTML, e a ele atribui a constante 'value' */
        let description = ''; /* Inicializa uma váriavel */

        value.classList.add('attention'); /* Adiciona a classe CSS 'Attetion' ao elemento de valor */

        document.getElementById('infos').classList.remove('hidden'); /* Remove a classe CSS 'hidden' do elemento com o  ID "infos". */

        /* Atribui condições */
        if (bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso!';
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
        }

        else {
            description = "Cuidado! Você está com obesidade morbida!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});
/* Adiciona um ouvinte de evento para o evento "keypress" no formulário.
A função callback é acionada quando uma tecla é pressionada.
Verifica se a tecla pressionada é igual a 'press'.
Se for, aciona o clique no elemento com o ID "calculate" usando click(). */
form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});
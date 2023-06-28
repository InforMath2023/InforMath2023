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

"use strict";

let button = document.getElementById('calculate');

button.addEventListener('click',calculo);

function calculo(e){
    e.preventDefault();
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let delta = Math.pow(num2,2) - 4*num1*num3;
    document.getElementById("total").innerHTML = (`O delta é: ${delta}`);
    if(delta > 0){
        let raiz1 = (-num2 + Math.sqrt(delta) )/(2*num1);
        let raiz2 = (-num2 - Math.sqrt(delta) )/(2*num1);
        document.getElementById("total").innerHTML = "Raiz 1 = " + raiz1.toFixed(2) + "<br>" + "Raiz 2 = " + raiz2.toFixed(2); 
        
    }else if (delta===0){
            let raizUnica = (-num2 + Math.sqrt(delta) )/(2*num1);
        document.getElementById("total").innerHTML = "Raiz única = " + raizUnica;
    }else if (delta < 0){
        document.getElementById("total").innerHTML = "Delta < 0, não existem raízes no conjunto dos números reais.";
    }
}

function limpar(e){
    document.getElementById('num1').value = " ";
    document.getElementById('num2').value = " ";
    document.getElementById('num3').value = " ";
    document.getElementById('result').innerHTML = null;
}

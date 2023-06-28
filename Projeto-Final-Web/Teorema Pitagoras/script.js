let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

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


function calculate() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);

    if (!isNaN(sideA) && !isNaN(sideB)) {
      var sideC = Math.sqrt(sideA * sideA + sideB * sideB);
      document.getElementById("result").innerHTML = "Hipotenusa (Lado C): " + sideC.toFixed(2);
    } else {
      document.getElementById("result").innerHTML = "Por favor, insira valores válidos.";
    }
  }

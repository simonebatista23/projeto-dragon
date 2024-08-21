
window.addEventListener("scroll", function () {
    const myObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Para de observar o elemento após a primeira interseção
            }
        });
    });

    const elements = document.querySelectorAll('.hidden');

    console.log(elements);
    elements.forEach((element) => myObserver.observe(element));
});


////////////////////////// HEADER///////////////////////////////////////////

window.addEventListener("scroll", function () {
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem', window.scrollY > 0);

});

//// ////////////////////////// TEXTO/////////////////////////////////////////

const el = document.querySelector("#text");


const text = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo porro quas consequuntur  repellendus   consectetur dipisicing  Lorem. unde. Tempora, enim, architecto similique deleniti, at nisi quaerat iusto nobis odio est culpa inventore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo porro quas consequuntur nesciunt repellendus unde. Tempora, enim, architecto similique deleniti, at nisi quaerat iusto nobis odio est culpa inventore? "

const interval = 200;



function showText(el, text, interval) {
    const char = text.split("").reverse();

    const typer = setInterval(() => {
        if (!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();
        el.innerHTML += next;

    }, interval);



}

showText(el, text, interval);

////////////////////////////////// VIDEO/////////////////////////////////////////

document.querySelectorAll('.thumbnail').forEach(function (img) {
    img.addEventListener('click', function () {
        var videoUrl = this.getAttribute('data-video') + "?autoplay=1";
        var videoFullscreen = document.getElementById('video-fullscreen');
        var iframe = videoFullscreen.querySelector('iframe');
        iframe.src = videoUrl;
        videoFullscreen.style.display = 'flex';
    });
});

document.getElementById('video-fullscreen').addEventListener('click', function () {
    var iframe = this.querySelector('iframe');
    iframe.src = ""; // Para parar o vídeo quando fechar
    this.style.display = 'none';
});




////////////////////////////////// NUMEROS/////////////////////////////////////////

const associados = document.getElementById("associados");
let i = 0;

function tempo() {
    const temp = setInterval(() => {
        if (i > 17) {
            return clearInterval(temp);
        }

        associados.innerText = i;
        i++;
    }, 200);
}

tempo();

const satisfacao = document.getElementById("satisfacao");
console.log(satisfacao);


let k = 0;
function Satisfacao() {
    const s = setInterval(() => {
        if (k > 97) {
            return clearInterval(s)
        }

        satisfacao.innerText = k + "%";
        k++;

    }, 100);
}
 Satisfacao();


const pais = document.getElementById("pais")

console.log(pais);

let j = 0;


function paises() {
    const n = setInterval(() => {
        if (j > 170) {
            return clearInterval(n);
        }

        pais.innerText = j;
        j++;
    }, 100);

}
paises();


//////////////////////////// Parte Quem somos //////////////////////////////


const abas = (document.querySelectorAll(".aba"));
console.log(abas)



abas.forEach(aba => {

    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba);
        mostrarInformacoesDaAba(aba)

    });


});

function selecionarAba(aba) {
   
    const abaSelecionada = document.querySelector(".aba.selecionado");

    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {



    const informacaoSelecionada = document.querySelector(".informacao.selecionado");

    informacaoSelecionada.classList.remove("selecionado");


    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);


    informacaoASerMostrada.classList.add("selecionado");


}
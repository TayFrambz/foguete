var foguete = document.getElementById("foguete");
var asteroide = document.getElementById("asteroide");
var counter=0;
function jump(){
    if(foguete.classList == "animate"){return}
    foguete.classList.add("animate");
    setTimeout(function(){
        foguete.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let fogueteTop = parseInt(window.getComputedStyle(foguete).getPropertyValue("top"));
    let asteroideLeft = parseInt(window.getComputedStyle(asteroide).getPropertyValue("left"));
    if(asteroideLeft<50 && asteroideLeft>-50 && fogueteTop>=120){
        asteroide.style.animation = "none";
        confirm(`Você perdeu, sua pontuação foi ${+Math.floor(counter/100)}. Clique em Ok para tentar novamente`);
        counter=0;
        asteroide.style.animation = "asteroide 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

function facil() {
    window.location.href = "https://tayframbz.github.io/Carro/";
};

function normal() {
    window.location.href = "https://tayframbz.github.io/Mario/";
};
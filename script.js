var cowboyBebop = document.getElementById ("1")
var MadeInAbyss = document.getElementById ("2")
var ShigatsuWa = document.getElementById ("3")
var Devilman = document.getElementById ("4")
var mobPsycho = document.getElementById ("5")
var section = document.querySelector ("section")
var button = document.querySelector ("button")
var h2 = document.querySelector ("h2")
var p = document.querySelector (".p2")
var video = document.querySelector ("iframe")

cowboyBebop.addEventListener ("click", abreCB)
function abreCB (event){
    h2.textContent = "Cowboy Bebop"
    p.textContent = "Sinopse:  Entre em um mundo num futuro distante, aonde caçadores de recompensas viajam o sistema solar. Spike e Jet, parceiros de caça, embarcam em jornadas com um esforço tremendo para conseguirem recompensas e sobreviver.Enquanto viajam, eles conhecem diversas pessoas. Poderia Faye, a bela apostadora, Edward, o gênio da computação e Ein, um super cachorro construído por engenheiros serem uma boa adição para o grupo?";
    video.src = "https://www.youtube.com/embed/QCaEJZqLeTU"
    section.classList.add("active");
}
MadeInAbyss.addEventListener ("click",abreMIA)
function abreMIA (event){
    h2.textContent  = "Made In Abyss"
    p.textContent = "Sinopse: O Abismo é o ultimo lugar inexplorado da terra. Criaturas estranhas e maravilhosas o habitam, e ele é cheio de relíquias preciosas que humanos não conseguem replicar. Os que se atrevem a explorar suas profundezas são conhecidos como invasores de cavernas. Uma garota órfã chamada Riko mora em volta do abismo. Seu sonho é se tornar uma invasora de caverna, assim como sua mãe, e desvendar os mistérios do abismo. Um dia, Riko estava explorando o começo do abismo e descobre um robô que se parecia como um garoto humano."
    video.src = "https://www.youtube.com/embed/kqBNQEUI8dM"
    section.classList.add("active");
   }
ShigatsuWa.addEventListener ("click",abreShigatsu)
function abreShigatsu (event){
    h2.textContent = "Shigatsu Wa Kimi No Uso"
    p.textContent = "Sinopse: O prodígio do piano Arima Kousei dominava as competições e todas as crianças conheciam seu nome. Porém, após a morte de sua mãe, que também era sua instrutora, ele teve um colapso mental enquanto performava em um recital. Isso resultou em ele não onseguir mais ouvir o som do piano enquanto tocava. Dois anos depois, Kousei não tocava mais seu piano e via o mundo completamente cinza e sem emoção. Ele estava contente em viver sua vida com seus amigos Tsubaki e Watari até que, um dia, uma garota mudou tudo. Miyazono Kaori é uma linda violinista que seu estilo de tocar reflete sua personalidade. Kaori ajuda Kousei retornar ao mundo da música e o mostra como é ser livre enquanto toca."
    video.src = "https://www.youtube.com/embed/y2a4QTKWuyo"
    section.classList.add("active");
  }
Devilman.addEventListener ("click",abreDevilman)
function abreDevilman (event){
    h2.textContent = "Devilman Crybaby"
    p.textContent = "Sinopse: O Protagonista Akira Fudou ouve de seu melhor amigo, Ryou Asuka, que uma raça anciã de demônios retornou à terra para pegá-la de volta dos humanos. Ryou diz para Akira que o único jeito de derrotá-los é incorporar o poder sobrenatural deles, e sugere que ele se una com um demônio. Akira consegue se transformar no Devilman, que possui os poderes de um demônio e a alma de um humano. A batalha de Devilman e Akira Fudou começa."
    video.src = "https://www.youtube.com/embed/ww06yGPM7Kc"
    section.classList.add("active");
  }
mobPsycho.addEventListener ("click",abreMob)
function abreMob (event){
    h2.textContent = "Mob Psycho 100"
    p.textContent = "Sinopse: A História se envolve em volta de Mob, um garoto que explode se a sua capacidade emocional alcança 100%. Esse garoto com poderes psíquicos ganhou o apelido de Mob porque ele não sabe se comportar em volta de outras pessoas. Ele mantém seus poderes psíquicos guardados para que possa viver uma vida normal, mas se seu level emocional chegar a 100, alguma coisa acontecerá com seu corpo inteiro."
    video.src = "https://www.youtube.com/embed/fAwGv0AJ7UI"
    section.classList.add("active");
  }

button.addEventListener ("click", fechar)

function fechar (event){
  section.classList.remove("active")
}
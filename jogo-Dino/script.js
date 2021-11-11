const dino = document.querySelector('.dino'); //pega a classe dino
const background = document.querySelector('.background')
let isJumping = false;
let position = 0;

function headleKeyUp(event) {
  if(event.keyCode === 38){
    if(!isJumping){
      jump();
    }
  }
}

function jump(){

  isJumping = true;

  let upInterval = setInterval(() => {
    if(position >= 150){
      clearInterval(upInterval);

      //CONDIÇÃO DESCENDO
      let downInterval = setInterval(() => {
        if(position <= 0){
          clearInterval(downInterval);
          isJumping = false;
        }
        else{
          position -= 20;
        dino.style.bottom = position + 'px';
        }
      }, 20);
    }

    else{ //CONDIÇÃO SUBINDO
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

//CRIANDO OS CACTUS
function creatCactus(){
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 7000; //Gerar Cactus aleatóorios

  console.log(randomTime);     

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  background.appendChild(cactus);

  //MOVIMENTANDO OS CACTUS
 
  let leftInterval = setInterval(() =>{
    
    cactusPosition -= 10; //VELOCIDADE DOS CACTUS
    cactus.style.left = cactusPosition + 'px';

    if(cactusPosition < -60){ //REMOVENDO O CACTUS DA TELA
      clearInterval(leftInterval);
      background.removeChild(cactus);
    }
    
    //A linha abaixo é a condição de fim de JOGO
    else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
      //Game-Over
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
      console.log(cont);
    }
    else{ //SE NÃO SAIU ANDE
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(creatCactus, randomTime); //Chama a apareção dos CACTUS
}

creatCactus();
document.addEventListener('keyup', headleKeyUp);
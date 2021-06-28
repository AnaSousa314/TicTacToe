let jogo=[];
let tabuleiro=[];
let quemJoga=0;//o jogador 1-Cpu
let verifica;
let jogando=true;
let nivel=1;
let jogadaCpu=1;
let quemComeca=1;


function jogar(p){
  if ((jogando)&&(quemJoga==0)) {
    switch (p) {
      case 1:
          if (jogo[0][0]=="") {
            jogo[0][0]="X";
            quemJoga=1;
          }
        break;
      case 2:
        if (jogo[0][1]=="") {
          jogo[0][1]="X";
          quemJoga=1;
        }
      break;
      case 3:
        if (jogo[0][2]=="") {
          jogo[0][2]="X";
          quemJoga=1;
        }
      break;
      case 4:
        if (jogo[1][0]=="") {
          jogo[1][0]="X";
          quemJoga=1;
        }
      break;
      case 5:
        if (jogo[1][1]=="") {
          jogo[1][1]="X";
          quemJoga=1;
        }
      break;
      case 6:
        if (jogo[1][2]=="") {
          jogo[1][2]="X";
          quemJoga=1;
        }
      break;
      case 7:
        if (jogo[2][0]=="") {
          jogo[2][0]="X";
          quemJoga=1;
        }
      break;
      case 8:
        if (jogo[2][1]=="") {
          jogo[2][1]="X";
          quemJoga=1;
        }
      break;
      case 9:
        if (jogo[2][2]=="") {
          jogo[2][2]="X";
          quemJoga=1;
        }
      break;
    
      default:
        break;
    }
  }
}

function inicia(){
  jogando=true;
  jogadaCpu=1;
  jogo=[
    ["","",""],
    ["","",""],
    ["","",""]
  ];
}

window.addEventListener('load',inicia);
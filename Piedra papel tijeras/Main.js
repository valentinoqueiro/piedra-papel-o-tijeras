let piedra = document.getElementById('Piedra');
let papel = document.getElementById('Papel');
let tijeras = document.getElementById('Tijeras');
let imgPlayer = document.querySelector('.img-player'); 
let imgComputer = document.querySelector('.img-computer');
let jugar = document.querySelector('#jugar')
let contadorPlayer = document.querySelector('#player');
let contadorComputer = document.querySelector('#computer');
let reiniciar = document.querySelector('#reiniciar');

let player = 'x';
let computer = 'x'; 

let alertLost = 'computadora gana'
let alertWin = 'tu ganas'
piedra.addEventListener('click', function(){
    imgPlayer.src = 'https://www.vhv.rs/file/max/10/106023_rocas-png.png'
    player = 'piedra'
})
papel.addEventListener('click', function(){
    imgPlayer.src = 'https://static.vecteezy.com/system/resources/thumbnails/022/219/336/small/white-torn-paper-isolated-on-a-transparent-background-png.png'
    player = 'papel'
})
tijeras.addEventListener('click', function(){
    imgPlayer.src = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3154081/scissors-clipart-md.png'
    player = 'tijeras';
})


jugar.addEventListener('click',function(){
    if(jugar.textContent === 'Jugar'){
    let CE = Math.floor(Math.random()* 3);
    
    if(player == 'x'){
        alert('elije una opción');
    }else if(CE == 0){
        imgComputer.src = 'https://www.vhv.rs/file/max/10/106023_rocas-png.png';
        computer = 'piedra';
    }else if (CE == 1){
        imgComputer.src = 'https://static.vecteezy.com/system/resources/thumbnails/022/219/336/small/white-torn-paper-isolated-on-a-transparent-background-png.png';
        computer = 'papel';
    }else{
        imgComputer.src = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3154081/scissors-clipart-md.png'
        computer = 'tijeras';
    }

    console.log(player)
    console.log(computer)
    if(player == 'x'){
        return
    }
    else if(player == computer){
    
    }else if(player == 'piedra' && computer == 'papel'){
        contadorComputer.textContent++ ; 
    }else if(player == 'papel' && computer == 'tijeras'){
        contadorComputer.textContent++;
    }else if(player == 'tijeras' && computer == 'piedra'){
        contadorComputer.textContent++;
    }else if(player == 'papel' && computer == 'piedra'){
        contadorPlayer.textContent++;
    }else if(player == 'tijeras' && computer == 'papel'){
        contadorPlayer.textContent++;
    }else if(player == 'piedra' && computer == 'tijeras'){
        contadorPlayer.textContent++;
        }
        jugar.textContent = 'Jugar denuevo';
        player = 'x';
        computer = 'x';
    }else  if(jugar.textContent == 'Jugar denuevo'){
            jugar.textContent = 'Jugar'; 
            imgComputer.src = '';
            imgPlayer.src = '';
        
            if(contadorComputer.textContent > 0 || contadorPlayer.textContent > 0){
             reiniciar.style.display = 'flex'   
            }
             reiniciar.addEventListener('click', function(){
                contadorComputer.textContent = 0;
                contadorPlayer.textContent = 0;
                reiniciar.style.display = 'none';
             })
    }
    })


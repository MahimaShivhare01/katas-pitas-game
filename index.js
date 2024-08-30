let restart=document.querySelector('#btn');
let cells=document.querySelectorAll('td');
    function clearAllcell(){
          for(let i=0;i<cells.length;i++)
          {
            cells[i].textContent='';
          }
     }
     restart.addEventListener('click',clearAllcell);

     function contant(){
        if(this.textContent==''){
            this.textContent='X';
        }
        else if(this.textContent=='X'){
            this.textContent='O';
        }
        else{
            this.textContent=''
        }
     }
     for(let i=0;i<cells.length;i++){
        cells[i].addEventListener('click',contant)
     }
     console.log('hii')
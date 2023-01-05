function aclear(){
    location.reload()
}
function cle(){
    let inval =  document.getElementById('number').innerHTML;
    let erease = inval.slice(0, -1);
    document.getElementById('number').innerHTML = erease;
    

}
function seven(){
    let inval =  document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML =  inval + 7;

}
function eight(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 8 ; 
}
function nine(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 9 ; 
}
function four(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 4 ; 
}
function five(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 5 ; 
}
function six(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 6 ; 
}  
function one(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 1 ; 
}
function two(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 2 ; 
}
function three(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 3 ; 
}
function Zero(){
    let inval = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = inval + 0 ; 
}

let op;
let firstSave;
function  divr(){
    firstSave = document.getElementById('number').innerHTML;
    document.getElementById("number").innerHTML = 0;
    localStorage.setItem("plus", firstSave)
    let his = localStorage.getItem("plus");
    document.getElementById('history').innerHTML = his ;
    op = 1;    
}
function mine(){
    firstSave = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = 0 ;
    localStorage.setItem("plus", firstSave)
    let his = localStorage.getItem("plus");
    document.getElementById('history').innerHTML = his ;
    op = 2;    
}
function multi(){
    firstSave = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = 0 ;
    localStorage.setItem("plus", firstSave)
    let his = localStorage.getItem("plus");
    document.getElementById('history').innerHTML = his ;
    op = 3;     
}
function dive(){
    firstSave = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = 0 ;
    localStorage.setItem("plus", firstSave)
    let his = localStorage.getItem("plus");
    document.getElementById('history').innerHTML = his ;
    op = 4;       
}
function present(){
    firstSave = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = 0 ;
    localStorage.setItem("plus", firstSave)
    let his = localStorage.getItem("plus");
    document.getElementById('history').innerHTML = his ;
    op = 5;       
}
function eqal(){
    let secondSave = document.getElementById('number').innerHTML;
    if(op == 1){
        document.getElementById('number').innerHTML = parseInt(firstSave) + parseInt(secondSave);
        localStorage.setItem("plus2", secondSave)
        let his = localStorage.getItem("plus2");
        document.getElementById('historyOne').innerHTML = his ;
    }else if(op == 2){
        document.getElementById('number').innerHTML = parseInt(firstSave) - parseInt(secondSave);
        localStorage.setItem("plus2", secondSave)
        let his = localStorage.getItem("plus2");
        document.getElementById('historyOne').innerHTML = his ;
    }else if(op == 3){
        document.getElementById('number').innerHTML = parseInt(firstSave) * parseInt(secondSave);
        localStorage.setItem("plus2", secondSave)
        let his = localStorage.getItem("plus2");
        document.getElementById('historyOne').innerHTML = his ;
    }else if(op == 4){
        document.getElementById('number').innerHTML = parseInt(firstSave) / parseInt(secondSave);
        localStorage.setItem("plus2", secondSave)
        let his = localStorage.getItem("plus2");
        document.getElementById('historyOne').innerHTML = his ;
    }else if(op == 5){
        document.getElementById('number').innerHTML = parseInt(firstSave) % parseInt(secondSave);
        localStorage.setItem("plus2", secondSave)
        let his = localStorage.getItem("plus2");
        document.getElementById('historyOne').innerHTML = his ;
    }else{
        document.getElementById('number').innerHTML = 'invalid';
    }
}

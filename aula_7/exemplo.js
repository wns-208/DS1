function somar(a,b){
return Number(a+b);
}
function subtrair(a,b){
    return Number(a-b);
}
function desconto(a,b){
    return   a*(b/100);
    
}
function validar(usuarioP,senhaP,usuarioI,senhaI){
    if(usuarioI==usuarioP&&senhaI==senhaP){
        return true;
    } else{
        return false;
    }
}
function soma(n1, n2, n3){
    return(n1+n2+n3)/3;
}
function calcularMedia(){
    if(media<4){
        return"reprovado";
    } else if(media>=4 && media<=6){
        return"recupereração";
    } else{
        return"aprovado";
    }
    

}
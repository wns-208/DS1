function exibir(nome,idade){
return "O seu nome é: "+nome+"sua idade é: "+idade;
}

function contar(inicial,final){
    for(var i=inicial;i<=final;i++){
        document.writeln(i+"<br>");
    }
}
//conta quantas lestras especifícas possui a String
function contaletras(palavra,letra){
    var contador=0;
    palavra = palavra.tolowerCase()
    //converter tudo para minúsculo

    for(var i=0;i<palavra.lenght;i++){
        // charAt pega uma posição específica do vetor Srting
        if(palavra.charAt(i)==letra){
            contador++;
        }
    }
    return contador;
}
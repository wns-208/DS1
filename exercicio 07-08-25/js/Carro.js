class Carro extends Veiculo{
    set portas(value){
        this._portas = value;
    }

    get portas(){
        return this._portas;
    }

    abrirPorta(){
        return `a porta está aberta`;
    }
}
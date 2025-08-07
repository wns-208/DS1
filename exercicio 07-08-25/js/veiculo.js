class Veiculo{

    set marca(value){
        this._marca = value;
    }

    set modelo(value){
        this._modelo = value;
    }

    set ano(value){
        this._ano = value;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    get ano(){
        return this._ano;
    }

    informaCoes(){
     return `informações do veiculo: ${this._marca}, ${this._modelo}, ${this._ano}`;   
    }

    ligar(){
        return `seu veiculo foi ligado!!`;
    }
}
class Pessoa{
    // set = inserir um valor em um atributo
    // get = pegar um valor de um atributo
    // encapsulamento
    set nome(valor){
        this._nome = valor;
    }
    set cpf(valor){
        this._cpf = valor;
    }
    set celular(valor){
        this._celular = valor;
    }

    get celular(){
        return this._celular;
    }
    get cpf(){
        return this._cpf;
    }
    get nome(){
        return this._nome;
    }

    exibirNome(){
    return `Nome: ${this._nome}`;
    }
}

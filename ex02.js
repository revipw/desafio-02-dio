class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let tipo = this.tipo
        let ataque;
        if(tipo == 'mago'){
            ataque = 'magia';
        }else if(tipo == 'guerreiro'){
            ataque = 'espada';
        }else if(tipo == 'monge'){
            ataque = 'artes marciais';
        }else if(tipo == 'ninja'){
            ataque = 'shuriken';
        }
        return console.log("O " + tipo + " atacou usando " + ataque + "!");
    }
}

let heroi = new hero('John', 27, 'mago');
heroi.atacar();

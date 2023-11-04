class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    escrever() {
        console.log("Nome: " + this.nome + ", Idade: " + this.idade + ", Tipo: " + this.tipo);
    }
}

let heroi1 = new Heroi("Fábio", 33, "homem de ferro");
heroi1.escrever(); 

let tipo = "homem de ferro";

switch (tipo) {
    case "homem de ferro":
        console.log("O " + tipo + " atacou usando plasma");
        break;

    case "guerreiro":
        console.log("O " + tipo + " atacou usando espada");
        break;

    case "monge":
        console.log("O " + tipo + " atacou usando artes marciais");
        break;

    case "ninja":
        console.log("O " + tipo + " atacou usando shuriken");
        break;

    default:
        console.log("O " + tipo + " habilidade desconhecida");
}
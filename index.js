class Heroi {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi) {
        this.nomeDoHeroi = nomeDoHeroi;
        this.idadeDoHeroi = idadeDoHeroi;
        this.tipoDoHeroi = tipoDoHeroi;   

    }

    atacar() {
        let ataque;
        switch (this.tipoDoHeroi) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "furação de vento";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "uma habilidade desconhecida";
        }
        console.log(`O ${this.tipoDoHeroi} ${this.nomeDoHeroi} atacou usando ${ataque}`);
    }
}

const aang = new Heroi("Aang", 12, "monge");
aang.atacar();
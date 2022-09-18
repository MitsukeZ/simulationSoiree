class Personne {
    /*
    Attributs :
    nom
    alcoolBu
    resistanceAlcool - le nombre d'unités d'alcool buvables avant d'avoir des effets
    tendanceAlcool   - Le nombre d'unités qu'une personne est susceptible de boire par tour
    */
    
    constructor(nom, resistanceAlcool, tendanceAlcool) {
        this.nom              = nom;
        this.alcoolBu         = 0;
        this.resistanceAlcool = resistanceAlcool;
        this.tendanceAlcool   = tendanceAlcool;
    }

    //Getters
    getNom()              {return this.nom;             }
    getAlcoolBu()         {return this.alcoolBu;        }
    getResistanceAlcool() {return this.resistanceAlcool;}
    getTendanceAlcool()   {return this.tendanceAlcool;  }

    //Setters
    setNom(nom)                           {this.nom              = nom;             }
    setAlcoolBu(alcoolBu)                 {this.alcoolBu         = alcoolBu;        }
    setResistanceAlcool(resistanceAlcool) {this.resistanceAlcool = resistanceAlcool;}
    setTendanceAlcool(tendanceAlcool)     {this.tendanceAlcool   = tendanceAlcool;             }

    //Méthodes
    boire(multiplicateur = 1) {
        if (this.tendanceAlcool <= 0) {return;}
        
        let bonus = 10 - Math.floor(Math.random() * 21);

        this.alcoolBu += (this.tendanceAlcool + bonus) * multiplicateur;
    }

    estBourre() {
        return this.alcoolBu > this.resistanceAlcool;
    }

    getPourcentageIvresse() {
        if (!this.estBourre()) {return 0;}

        return (this.alcoolBu - this.resistanceAlcool) / 100;
    }

    toString() {
        return this.nom + " " + this.alcoolBu + "/" + this.resistanceAlcool + " unités d'alcool bues";
    }

    comaEthylique() {
        let chance = Math.floor(Math.random() * 3);

        return (chance == 2);
    }

    

}

export {Personne};
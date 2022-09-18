import { Personne } from "./Personne.mjs";


class Soiree {
    constructor() {
        this.tabPersonnes = this.genererPersonnes();
    }
    
    genererPersonnes() {
        let tabPersonnes = new Array();
        
        tabPersonnes[0] = new Personne("Hugo 1"  , 750   , 25);
        tabPersonnes[1] = new Personne("Damien"  , 750   , 10);
        tabPersonnes[2] = new Personne("Killyan" , 1000  , 50);
        tabPersonnes[3] = new Personne("Bryan"   , 500   , 15);
        tabPersonnes[4] = new Personne("GIGACHAD", 100000, 25);

        return tabPersonnes;
    }
    
    
    gererEvenements(personne) {
        if (personne.getPourcentageIvresse() < 50)  {return;}
        if (personne.getPourcentageIvresse() > 100) {
            if (personne.comaEthylique()) {
                console.log("Le pire est arrivé... " + personne.getNom() + " a fait un coma éthylique ! Tout le monde se rue sur lui pour le sauver..."); 
                return "fin";
            }
        }
    
        let idEvenement = Math.floor(Math.random() * 5);
    
        switch (idEvenement) {
            case 0: this.fatigue(personne); break;
            case 1: this.vomi(personne);    break;
            case 2: this.manque(personne);  break;
            case 3: this.baston(personne);  break;
            case 4: this.repas();           break;
        }
        
        return;
    }


    //Méthodes
    fatigue(personne) {
        console.log(personne.getNom() + " est fatigué, sa tendance à boire est réduite de moitié...")
        personne.setTendanceAlcool(personne.getTendanceAlcool()/2);
    }

    vomi(personne)    {
        console.log("OH NON ! " + personne.getNom() + " a vomi ! Il perd 20 unités d'alcool bues");
        personne.setAlcoolBu(personne.getAlcoolBu()-20);
    }
    manque(personne)  {
        console.log("Son ex manque à " + personne.getNom() + ". Il double la quantité pour compenser");
        personne.boire(2);
    }

    baston(personne)  {
        if (this.tabPersonnes.length == 1) {return;}
        
        let autrePersonne = Math.floor(Math.random() * this.tabPersonnes.length);

        if (this.tabPersonnes[autrePersonne] === personne) {this.baston(personne); return;}

        console.log("OH NON ! " + personne.getNom() + " et " + this.tabPersonnes[autrePersonne].getNom() + "sont en train de se battre !");
        console.log("Ouf ! Ils s'arrêtent ! Une petite bière pour se pardonner");

        personne.setAlcoolBu(personne.getAlcoolBu() + 10);
        this.tabPersonnes[autrePersonne].setAlcoolBu(this.tabPersonnes[autrePersonne].getAlcoolBu() + 10);
    }

    repas() {
        console.log("Pause Repas ! Tout le monde perd 1/4 de sa quantité bue");
        
        for (let pers of this.tabPersonnes) {
            pers.setAlcoolBu(pers.getAlcoolBu() -  (pers.getAlcoolBu()/4));
        }
    }

    afficherPersonnes() {
        for (let pers of this.tabPersonnes) {
            console.log(pers);
            console.log("%ivresse : " + pers.getPourcentageIvresse() + "%");
        }
    }

    main() {
        

        let soireeEnCours = true;
        
        console.log("Tout les invités sont là, la soirée peut commencer !");
        
        while (soireeEnCours) {
            //this.afficherPersonnes();
            for (let pers of this.tabPersonnes) {
                pers.boire();
                if (this.gererEvenements(pers) == "fin") {
                    soireeEnCours = false;
                    break;
                }
            }
        }
    }

    

}

export {Soiree};
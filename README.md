# simulationSoiree

L’objectif ici est de simuler l'évolution d'une soirée au fur et a mesure de l'alcool bu

Il y a plusieurs personnes présentes à la soirée, une personne est définie dans la simulation par son nom, sa quantité d’alcool bue, sa résistance à l’alcool et sa tendance à boire.

Explications plus détaillées : 

La tendance à boire représente la quantité d’alcool qu’une personne pourrait potentiellement boire a chaque itération, avec une variation aléatoire de 10 unités.

Une tendance de 0 signifie que la personne ne boit pas.

Si la quantité d’alcool bue dépasse la résistance à l’alcool de la personne, celle ci sera ivre.


A 50 % de plus, la personne aura une chance sur 5 de provoquer un évènement aléatoire parmi les suivants :

	« Fatigue Intense. La tendance de la personne à boire est réduite de moitié. »

	« CUL SEC ! ON TRIPLE LA QUANTITE INGEREE  ! »

	« BLEUUUUURG ! Prenom a vomi ! Il perd 20 unités d’alcool bues»

	« Areuh Areuh… Son ex manque beaucoup a prenom, il double la quantité pour oublier »

	« Oh nn, prenom et personne random sont en train de se battre ! Ouf ils arrêtent, les deux prennent une petite bière pour se pardonner (+10 unités) »

	« Pause repas, tout le monde perd le quart de leur quantité d’alcool ingérée »

Lorsque la qte ingérée dépasse le double de la résistance à l’alcool, la personne à une chance sur 3 de faire un coma éthylique, ce qui marquera la fin de la soirée.

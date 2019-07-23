# Test technique

Le projet a été initialisé de la façon suivante : 

`create-react-app checkbox-project`
`cd checkbox-project`
`npm start`


## Structure du projet

Le répertoire src du projet : 
    - containers
        - app.js
        - checkboxs.js
    - components
        - checkbox-item.js
    - tests
        - app.test.js

À la racine, nous retrouverons le fichier index.css importé dans la classe App. 

## Cas particuliers des checkboxs


Plusieurs cas ont été étudiés et développées afin d'eviter les incohérences d'affichages. Le container Checkbox contient une classe avec en state 2 élements : 
    - un objet : "allChecked" ayant un attribut isChecked permettant de vérifier l'état de la checkbox (true ou false) => initaliser à false
    - un tableau d'objets : "checkboxs" ayant une valeur (value) étant le label du checkbos ainsi que l'état de la checkbox  (true ou false) => initaliser à false





###### Render 

- La checkbox "Selectionner tout" est présenté dans le render de façon classique (un label, un input, un span )
- Les autres checkbox sont affichées à l'aide d'une fonction de mapping retournant une function (CheckBoxItem) affichant une check-box selon les props reçus 


######events

2 events ont été développés.

handleAllChecked : 
    - Appelé au changement d'etat (onChange) de la checkbox qui permet de tout selectionné.
    - Cette fonction permet de gérer les cas suivants : 
        - cocher la checkbox si l'evenement est declenché et que la valeur courante de la checkbox est fausse
        - décocher la checkbox si l'evenement est declenché et que la valeur courante de la checkbox est vraie
        - appliquer l'état de la checkbox (coché ou décoché) à toutes les checkboxs

handleCheckItem : 
    - Envoyer en props à la function CheckBoxItem au moment du mapping puis appelé à chaque changement d'etat (onChange) des checkboxs (objets) contenus dans le tableau.

    - Cette fonction permet de gérer les cas suivants :
        - parcours des checkboxs et application de l'etat remonté par l'evenement à la checkbox courante
        - modification de l'état du tableau checkbox qui applique la modification prise en compte
        - cochage de la checkbox "Selectionner tout" dans le cas ou aucune checkbox du tableau retourne l'état faux
        - décochage de la checkbox Selectionner tout dans le cas ou les checkbox du tableau ne sont pas toutes à l'état vrai
        - décochage de la checkbox Selectionner tout dans le cas ou au moins une checkbox retourne l'état faux




## Tests

Des tests d'affichage et de rendering ont été réalisé avec Jet et Enzyme

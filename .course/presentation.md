---

theme : "night"
customTheme: "custom"
transition: "slide"
highlightTheme: "monokai"
logoImg: "images/vuejs_logo.png"
slideNumber: false
title: "Vue.js"

---

# Vue.js

<img src="images/vuejs_logo.png" style="height: 200px">

--

## Plan

|           | Module                             | Cours   | TD     |
| :-------: |  --------------------------------- | :-----: | :----: |
| 01        | Introduction                       | 1h      | 1h     |
| 02        | Interactions avec le DOM           | 1h      | 1h     |
| 03        | Les composants                     | 1h      | 1h     |
| 04        | Mise à l'échelle                   | 1h      | 1h     |
| 05        | La navigation et la gestion d'état | 1h      | 0h     |
| 06        | Les tests                          | 1h      | 0h     |
| **Total** |                                    | **5h**  | **5h** |

---

## Module 01
### Introduction

--

### Quelques définitions...

--

#### JavaScript

<img src="images/javascript_logo.png" style="height:75px;">

Un langage de programmation principalement pour le navigateur

<small>Mais ça, vous le savez déjà !</small>
<br>
<small>;)</small>

--

#### Les bibliothèques de code
[library](https://en.wikipedia.org/wiki/Library_(computing))

Un ensemble de fonctions d'un domaine fonctionnel particulier

pour gagner du temps et éviter de "réinventer la roue"

- Une librairie de gestion du temps (dates, heures, fuseaux...)
- Une librairie pour envoyer des mails
- Une librairie pour représenter de jolis graphiques...

<img src="images/wheel.png" style="height: 350px;">

--

#### Les Frameworks
[framework](https://en.wikipedia.org/wiki/Software_framework)

Un cadre pour développer de manière structurée \
(homogénéité, bonnes pratiques...) :

- Un framework de devéloppement d'applications web
- Un framework de devéloppement d'applications mobile
- ...

--

#### Quelle différence entre une librairie et un framework ?

Le code de votre application **appelle** les fonctions d'une librairie

Le code de votre application **est appelé** par le framework

<img src="images/lib_framework.png" style="height: 200px;">

--

#### Applications Web Mono Pages ?
[Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)

1 seule page Web est chargée dans le navigateur

dynamiquement réécrite en fonction des interactions utilisateur

- Exemples d'applications "classique" :
    - [Amazon](https://www.amazon.fr)
    - [Lemonde](https://www.lemonde.fr)

- Exemples d'applications "SPA" :
    - Cette magnifique présentation :)
    - [Gmail](https://mail.google.com)
    - [Twitter](https://twitter.com)
    - [Deezer](https://www.deezer.com)

--

#### Open-Source ?

Logiciels dont la licence permet :

- La libre redistribution

- L'accès au code source

- La création de travaux dérivés (fork)

<br>

<img src="images/opensource.png" style="height: 150px;">

--

### Vue.js ?

<br><br><br>

<small>Ca se prononce "View"</small>
<br>
<small>;)</small>

--

#### En une (longue) phrase ?

<img src="images/vuejs_logo.png" style="height: 100px;">

Un projet [JavaScript](https://www.w3.org/standards/webdesign/script.html)
[Open-Source](https://opensource.org/) 

qui peut être utilisé

comme une simple [librarie](https://en.wikipedia.org/wiki/Library_(computing))
ou un [framework](https://en.wikipedia.org/wiki/Software_framework) complet

pour construire des [Applications Web Monopages](https://en.wikipedia.org/wiki/Single-page_application)

--

#### Historique

Créé en 2014
par [Evan You](https://evanyou.me/)

<img src="images/evan_you.jfif" style="height: 150px">

Après avoir utilisé [Angular.js](https://angularjs.org/)
chez Google

> "What if I could just extract the part that I really like about Angular
and build something really lightweight..."

--

#### Qui d'autre ? <small>Tendance (perso) 2020...</small>

<img src="images/web.png">

[React.js](https://reactjs.org/)
[Vue.js](https://vuejs.org/)
[Angular](https://angular.io/)
[Svelte](https://svelte.dev/)<small>NEW!</small>

<img src="images/comic_stack.jpg" style="height: 420px">

--

### Concepts principaux

--

#### Model - View - ViewModel
[MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)

Architecture qui permet de séparer

- La **vue** (interface Graphique)

- Du **modèle** (les données et leur manipulation : DB, API...)

- Le "ViewModel" assure la glue entre les 2 via du "data-binding"

<img src="images/mvvm.png" style="height: 100px;">

--

#### Composant Graphique

<br>

Permet de diviser l'**Interface Graphique**

en éléments **indépendants** et **réutilisables**

<br>

Permet de concevoir chaque élément de manière **isolée**

--

#### Composition : exemple

<img src="images/component_layout.png">

--

#### DOM virtuel : la problématique

Avec le data-binding, chaque changement d'état \
provoque une cascade d'appels à l'API du DOM

<img src="images/tree.png" style="height: 200px;">

```javascript
document.getElementsByClassName("list__item")[0].textContent = "List item one";
const listItemTwo = document.createElement("li");
listItemTwo.classList.add("list__item");
listItemTwo.textContent = "List item two";
document.getElementsByClassName("list")[0].appendChild(listItemTwo);
```

Ces appels sont couteux et beaucoup d'entre eux sont inutiles

--

#### DOM virtuel : qu'est-ce que c'est ?

Une copie en mémoire du véritable DOM

Lors des changements d'état, seul le DOM virtuel est muté

La différence entre les 2 DOMs est calculée et appliquée en 1 fois au véritable DOM

<img src="images/virtual_dom_diff.png" style="height: 380px;">

--

### Démarrage

--

#### Inclure la librairie Vue.js dans une page Web

```html
<!DOCTYPE html>
<html>

    <head>

        <!-- Dev version -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

        <!-- Or optimized prod version -->
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>

    </head>

    <body></body>

</html>
```

--

#### Instancier Vue.js

```html
<!DOCTYPE html>
<html>

    <head>

        <script>

            const app = new Vue({

                // Selecteur CSS indiquant l'élément auquel attacher l'application
                el: '#myFirstVueApp'

            });
        </script>

    </head>

    <body>

        <h2>Ma 1ère app vue.js</h2>

        <div id="myFirstVueApp"></div>

    </body>

</html>
```

--

#### Ajouter de la donnée

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            const app = new Vue({
                el: '#myFirstVueApp',
                data: {
                    message: 'Hello world!',
                }
            });
        </script>

    </head>
    <body>
        <h2>Ma 1ère app vue.js</h2>
        <div id="myFirstVueApp">

            <!-- 
                Vue.js utilise un language de template
                pour remplacer {{ }} par le contenu au runtime
            -->
            {{ message }}

        </div>
    </body>
</html>
```

--

### Le langage de template

--

### Labs

<img src="images/lab.png">

--

### lab/01/01
#### Récupérer le contenu de la formation

1. Installer [Git](https://git-scm.com/)

2. Créer un compte sur [Github](https://github.com)

3. Communiquer l'adresse email du compte créé

4. Cloner le dépôt Git de la formation ([github.com/fmartinou/training-javascript](https://github.com/fmartinou/training-javascript))

5. Ouvrir la présentation `training-javascript/course/index.html`

--

### lab/01/02
#### Installer et configurer l'IDE

1. Télécharger et installer [Visual Studio Code](https://code.visualstudio.com/)

2. Installer les extensions suivantes
    * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

3. Ouvrir le repo Github de la formation dans Visual Studio Code

--

### lab/01/03
#### Découverte des outils pour Développeurs des navigateurs

1. Télécharger et installer [Google Chrome](https://www.google.com/chrome)

2. Ouvrir la page d'accueil de l'Université [Paul Sabatier](https://www.univ-tlse3.fr/)

3. Ouvrir les outils de développement de Chrome (_F12_) et explorer les fonctionnalités (Eléments, Console, Sources...)

4. Dans la console, appliquer les fragments de code suivants

```javascript
window.alert('Salut !');

console.log('Salut !');

window.open('https://media.giphy.com/media/LPgFwCQg4HQBvPihcn/giphy.gif');

document.getElementsByClassName('moteur-de-recherche-card')[0].style = 'background-image: url(https://bit.ly/2wZL7I2)';
```

--

### lab/01/04
#### Découverte de Visual Studio Code

1. Ouvrir le fichier index.html dans VsCode et le navigateur

2. Compléter les différentes méthodes et tester depuis le navigateur

3. Modifier la page pour externaliser le code JavaScript dans un fichier `script.js`

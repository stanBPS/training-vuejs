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

|           | Module                                       | Cours   | TD     |
| :-------: |  ------------------------------------------- | :-----: | :----: |
| 01        | Introduction                                 | 1h      | 1h     |
| 02        | Les Bindings et les interactions utilisateur | 1h      | 1h     |
| 03        | Les composants                               | 1h      | 1h     |
| 04        | Mise à l'échelle                             | 1h      | 1h     |
| 05        | La navigation et la gestion d'état           | 1h      | 0h     |
| 06        | Les tests                                    | 1h      | 0h     |
| **Total** |                                              | **5h**  | **5h** |

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

### L'écosystème Vue.js

--

#### Deboguage
[vue-devtools](https://github.com/vuejs/vue-devtools)

Extension navigateur (Chrome, Firefox) \
pour faciliter le deboguage

<img src="images/devtools.png" style="height: 400px;">

--

#### Création d'un nouveau projet
[vue-cli](https://cli.vuejs.org/)

Outil (CLI) qui propose aussi une interface graphique

```bash
npm install -g @vue/cli

# Créer une nouvelle appli en ligne de commande
vue create my-awesome-vue-app

# Créer une nouvelle appli via l'interface graphique
vue ui
```

<img src="images/vue-cli-ui.png" style="height: 350px;">

--

#### Gestion des composants au format `.vue`
[vue-loader](https://vue-loader.vuejs.org/)

Permet de transformer des fichiers .vue en code JavaScript interprétable par le navigateur

```html
<!-- Exemple de composant myComponent.vue -->

<!-- Template du composant -->
<template>
    <div class="example">{{ msg }}</div>
</template>

<!-- Code JavaScript du composant -->
<script>
    export default {
        data () {
            return {
                msg: 'Hello world!'
            }
        }
    }
</script>

<!-- Style du composant -->
<style>
    .example {
        color: red;
    }
</style>
```

--

### L'interpolation

--

#### Syntaxe "Moustache"
[{{ }}](https://vuejs.org/v2/guide/syntax.html#Interpolations)

```html
<script>
    const app = new Vue({
        el: '#myFirstVueApp',
        data: {
            now: undefined,
        },
    });

    // Met à jour la variable now toutes les secondes
    setInterval(() => app.$data.now = new Date().toString(), 1000)

</script>

<div id="app">

    <!--
        effectue un binding directionnel entre
            - l'expression JavaScript
            - son rendu dans la page sous forme d'HTML
    -->
    <span>Il est {{ now }} </span>

</div>
```

--

### Les directives

--

#### Qu'est-ce qu'une directive ?

Un attribut HTML compréhensible par Vue.js

Il est préfixé par `v-`

```html
<!-- Exemples de directives -->

<span v-show="toBeVisible">


<span v-if="toBeVisible">


<span v-bind:title="message">
```

--

#### Binder un attribut
[`v-bind`](https://vuejs.org/v2/api/#v-bind)

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            mySuperTitle: 'Super, non ?',
        },
    });

</script>

<div id="app">

    <!-- A ne pas faire... CA NE MARCHE PAS !! ;) -->
    <!-- Il n'est pas possible d'utiliser la syntaxe mutache dans un attribut HTML -->
    <span title="{{ mySuperTitle }}">


    <!-- Il faut utiliser la directive v-bind:$attribut à la place -->
    <span v-bind:title="toBeVisible">


    <!-- v-bind peut être écrit avec la syntaxe abrégée :$attribut  -->
    <span :title="toBeVisible">

</div>
```

--

#### Binder des attributs de style
[`class and style binding`](https://vuejs.org/v2/guide/class-and-style.html)

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            isActive: true,
            hasError: false,
            activeColor: 'red',
            fontSize: 30
        },
    });

</script>

<div id="app">


    <!-- Binder la propriété style (inline style) -->
    <span :style="{ color: activeColor, fontSize: fontSize + 'px' }"></span>


    <!-- Binder des classes CSS -->
    <span :class="{ active: isActive, 'text-danger': hasError }"></span>


</div>
```

--

#### Afficher un élément de manière conditionnelle
[`v-show`](https://vuejs.org/v2/api/#v-show)


```html
<script>

const app = new Vue({
    el: '#app',
    data: {
        seen: true
    }
});

</script>

<div id="app">

    <!--
        v-show "bind" la propriété seen
        pour conditionner la visibilité de l'élément
    -->
    <span v-show="seen">Now you see me</span>

</div>
```

--

#### Créer un élément de manière conditionnelle
[`v-if`](https://vuejs.org/v2/api/#v-if)
[`v-else`](https://vuejs.org/v2/api/#v-else)
[`v-else-if`](https://vuejs.org/v2/api/#v-else-if)

```html
<script>

const app = new Vue({
    el: '#app',
    data: {
        seen: 'B'
    }
});

</script>

<div id="app">


    <!-- expression (booleen) pour conditionner la présence de l'élément -->
    <span v-if="seen === 'A'">It's an A</span>


    <!-- v-else-if peut être chainé -->
    <span v-else-if="seen === 'B'">It's a B</span>


    <!-- v-else est la négation des v-if / v-else-if qui le précèdent -->
    <span v-else>I dont know what it is...</span>


</div>
```

--

#### Afficher une liste d'éléments
[`v-for`](https://vuejs.org/v2/api/#v-for)

```html
<script>

const app = new Vue({
    el: '#app',
    data: {
        items: [
            { message: 'Foo', id: 0 },
            { message: 'Bar', id: 1 },
        ]
    }
});

</script>

<div id="app">

    <!--
        v-for prend pour valeur alias in iterable
        un itérable peut être un Array, un Object, un String...)
        la directivee key permet d'indiquer ce qui rend l'élément unique
    -->
    <li v-for="item in items" :key="item.id">
        {{ item.message }}
    </li>

</div>
```

--

#### Afficher du HTML
[`v-html`](https://vuejs.org/v2/api/#v-html)

```html
<script>

const app = new Vue({
    el: '#app',
    data: {
        rawHtml: '<p style="color: red;">Hello!</p>'
    }
});

</script>

<div id="app">


    <span v-html="rawHtml"></span>


</div>
```

--

### Labs

<img src="images/lab.png">

--

### lab/01/01
#### Récupérer le contenu de la formation

1. Installer [Git](https://git-scm.com/)

2. Créer un compte sur [Github](https://github.com)

3. Communiquer l'adresse email du compte créé

4. Cloner le dépôt Git de la formation ([github.com/fmartinou/training-vuejs](https://github.com/fmartinou/training-vuejs))

5. Ouvrir la présentation `training-vuejs/course/index.html`

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
#### Installer l'extension Vue.js Devtools

1. Télécharger et installer [Google Chrome](https://www.google.com/chrome)

2. Installer l'extension [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) et la configurer :
    - [Ouvrir les paramètres de l'extensions](chrome://extensions/?id=nhdogjmejiglipccpnnnanhbledajbpd)
    - Activer "`Autoriser l'accès aux URL de fichier`"

<img src="images/devtools-settings.png" style="height: 400px;">

--

### lab/01/04
#### Explorer une application Vue.js

1. Ouvrir le fichier lab/01/04/index.html dans le navigateur

2. Créer quelque "todos"

3. Ouvrir l'extension Vue.js Devtools

4. Modifier les "todos" dans la console (sous `data`)

5. Et observer le binding fonctionner
    - title
    - completed
    - ajout, suppression...

--

### lab/01/05
#### 1ère application Vue.js

1. Ouvrir le fichier lab/01/05/index.html dans le navigateur

2. Une liste de films est disponible dans la variable movies
    - (regarder le fichier movies.js)

3. Afficher tous les films sous forme d'une liste à puces

4. Modifier pour que les films non encore sortis soient affichés en rouge

5. Modifier pour n'afficher que les films dont la note est supérieure à 2

---

## Module 02
### Les Bindings et les interactions utilisateur

--

### Les Bindings

--

#### L'instance et son contexte réactif
[vue instance](https://vuejs.org/v2/guide/instance.html)

```html
<script>
const app = new Vue({ // 1 instance de Vue est créé et assignée à la variable app
    el: '#app',

    // Les données 'bindées' sont dans l'objet data
    data: {
        myData1: 'a string',
        myData2: 'another string',
    }
});

// Les données peuvent être accédées directement sur l'instance
console.log(app.myData1); // Output -> 'a string'

// Les données peuvent être modifiées (entraine une mise à jour de l'affichage)
app.myData1 = 'Surprise!'; 

// Attention : les propriétés ajoutées dynamiquement ne seront pas réactives !
app.noWayImNotReactive = 'Hello!';
app.noWayImNotReactive = 'Hello?';
app.noWayImNotReactive = 'Hello???';
</script>

<div id="app">
    <div>{{ myData1 }}</div>
    <div>{{ noWayImNotReactive }}</div>
</div>
```

--

#### Limites de l'objet `data`

Comment faire si je veux afficher le message avec la 1ère lettre en majuscule ?

```html
<script>

    const app = new Vue({
        el: '#app',
        data: {
            message: 'hello world!',
        },
    });

</script>

<div id="app">

    <span>{{ message.charAt(0).toUpperCase() + message.slice(1) }}</span>
</div>
```

Il faut éviter de mettre trop de logique dans les templates !

--

#### Les propriétés calculées
[computed](https://vuejs.org/v2/guide/computed.html)

```html
<script>
    const app = new Vue({
        el: '#app',
        data: { message: 'hello world!' },

        // Les propriétés calculées sont dans l'objet computed
        computed: {
            messageCapitalized: function() {

                // this est l'objet app
                return this.message.charAt(0).toUpperCase() + message.slice(1);
            }
        }
    });

    // Peut être accédée comme une propriété standard mais ne peut pas être modifiée
    console.log(app.computed);      // Output -> 'Hello world!'
    app.computed = 'Surprise';      // Renvoie une Erreur

    // Si message est modifié, l'affichage de messageCapitalized va être mis à jour
    app.message = 'Coucou le monde !';
</script>

<div id="app">
    <span>{{ messageCapitalized }}</span>
</div>
```

--

#### Les propriétés calculées avec setter
[computed setter](https://vuejs.org/v2/guide/computed.html#Computed-Setter)

```html
<script>
    const app = new Vue({
        el: '#app',
        data: { firstName: 'John', lastName: 'Doe' },

        computed: { // la propriété est un objet qui contient 2 fonctions get & set
            fullName: {

                get: function() {
                    return this.firstName + ' ' + this.lastName;
                }

                set: function (newValue) {
                    const names = newValue.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[names.length - 1];
                }
            }
        }
    });

    console.log(app.fullName);          // Le getter sera invoqué 
    app.fullName = 'John McClane';      // Le setter sera invoqué

</script>

<div id="app"><span>{{ fullName }}</span></div>
```

--

#### Les Observateurs
[watchers](https://vuejs.org/v2/guide/computed.html#Watchers)

```html
<script>
    const app = new Vue({
        el: '#app',
        data: { message: 'Hello world!' },

        watch: {

            // Invoque la fonction à chaque fois que la propriété 'message' change
            message: function(oldMessage, newMessage) {
                if (oldMessage === newMessage) {
                    displayMessage('Seriously? Are you kidding?');
                }
            }
        }
    });
</script>

<div id="app">
    <span>{{ fullName }}</span>
</div>
```

--

#### Les méthodes
[methods](https://vuejs.org/v2/api/#methods)

```html
<script>
    const app = new Vue({
        el: '#app',
        data: { weird: 'Weird!' },

        methods: {

            doSomethingWeird() {

                // this référence l'application app
                myWeirdApi.run(this.weird);

            }

            saveUser(user) {

                myUserApi.save(user);

            }
        }
    });
</script>

<div id="app"><span>{{ fullName }}</span></div>
```

--

### Les événements

--

#### Ecouter des événements
[v-on](https://vuejs.org/v2/api/#v-on)

```html
<script>
    const app = new Vue({ el: '#app' });
</script>

<!-- Exemple classique (sans vue) -->
<button onclick="alert('Hello!');">Click me!</button>

<div id="app">

    <!--
        Exemple avec vue
        Syntaxe est v-on:eventName
    -->
    <button v-on:click="alert('Hello!');">Click me!</button>

</div>
```

--

#### Appeler un handler
[v-on handler](https://vuejs.org/v2/guide/events.html#Method-Event-Handlers)

```html
<script>
    const app = new Vue({
        el: '#app',
        methods: {

            // Le handler fait partie des methods
            // Il prend en paramètre l'événement natif provenant du DOM
            callMeOnButtonClick: function(event) {

                console.log(event);

            }
        }
    });
</script>

<div id="app">

    <!-- il est possible de donner une référence de méthode -->
    <button v-on:click="callMeOnButtonClick">Click me!</button>

    <!-- il est possible d'exécuter la méthode directement -->
    <button v-on:click="callMeOnButtonClick($event)">Click me!</button>

</div>
```

--

#### Syntaxe courte
[@](https://vuejs.org/v2/api/#v-on)

```html
<script>
    const app = new Vue({ el: '#app' });
</script>

<div id="app">

    <!-- Syntaxe classique -->
    <button v-on:click="alert('Hello!')">Click me!</button>

    <!-- Syntaxe courte -->
    <button @click="alert('Hello!')">Click me!</button>

</div>
```

--

#### Les modificateurs
[modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers)

```html
<script>
    const app = new Vue({ el: '#app' });
</script>

<div id="app">

    <!--
        .stop est un modifier
        qui appelle event.stopPropagation() sur l'événement natif
    -->
    <button @click.stop="alert('Hello!')">Click me!</button>

    <!--
        .prevent est un modifier
        qui appelle event.preventDefault() sur l'événement natif
    -->
    <button @click.prevent="alert('Hello!')">Click me!</button>


    <!--
        .once est un modifier
        l'événement sera déclenché (au plus) 1 fois
    -->
    <button @click.prevent="alert('Hello!')">Click me!</button>

</div>
```

--

#### Les événements du clavier
[keyboard modifiers](https://vuejs.org/v2/guide/events.html#Key-Modifiers)

```html
<script>
    const app = new Vue({ el: '#app' });
</script>

<div id="app">

    <!-- event sur toutes les touches -->
    <input v-on:keyup="submit">

    <!-- event sur touche PageDown -->
    <input v-on:keyup.page-down="submit">

    <!-- event sur combinaison de touches Alt + C -->
    <input v-on:keyup.alt.67="submit">

    <!-- event sur combinaison Ctrl + Click -->
    <input v-on:click.ctrl="submit">

</div>
```

Vue fournit des alias pour les codes touches communs

`
enter
tab
delete
esc
space
up
down
left
right
`

--

#### Les événements de la souris
[mouse modifiers](https://vuejs.org/v2/guide/events.html#Mouse-Button-Modifiers)

```html
<script>
    const app = new Vue({ el: '#app' });
</script>

<div id="app">

    <!-- event sur tous les clics -->
    <button v-on:click="submit">Click me!</button>

    <!-- event sur clic gauche -->
    <button v-on:click.left="submit">Click me!</button>

    <!-- event sur clic droit -->
    <button v-on:click.right="submit">Click me!</button>

    <!-- event sur clic du milieu -->
    <button v-on:click.middle="submit">Click me!</button>

</div>
```

--

### Binding bidirectionnel

--

#### Sans binding bidirectionnel...

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            myValue: 'Hello!',
        },

        methods: {
            updateMyValue: function(event) {
                this.message = event.target.value;
            }
        }
    });
</script>

<div id="app">

    <!--
        Binding data.myValue -> input.value
        Event input.change -> updateMyValue
    -->
    <input type="text" :value="myValue" @input="updateMyValue($event)">

</div>
```

--

#### Avec binding bidirectionnel...
[v-model](https://vuejs.org/v2/api/#v-model)
```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            myValue: 'Hello!',
        },
    });
</script>

<div id="app">

    <!--
        Binding data.myValue -> input.value
        Binding input.value  -> data.myValue
    -->
    <input type="text" v-model="myValue">

    <!--
        v-model fonctionne pour les éléments :

            - <input type="text"> (propriété value / événement input)
            - <input type="checkbox"> (propriété checked / événement change)
            - <textarea> (propriété value / événement input)
            - <select> (propriété value / événement change)
    -->

</div>
```

--

#### Binding bidirectionnel Text

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            myValue: 'Hello!',
        },
    });
</script>

<div id="app">

    <input type="text" v-model="myValue">

    <textarea v-model="myValue"><.textarea>

</div>
```

--

#### Binding bidirectionnel Case à cocher

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            myValue: true,
        },
    });
</script>

<div id="app">

    <!-- myValue est un booléen -->
    <input type="checkbox" v-model="myValue">

</div>
```

--

#### Binding bidirectionnel Groupe de Cases à cocher

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            myValue: ['A', 'C'],
        },
    });
</script>

<div id="app">

    <!-- myValue est un tableau -->
    <input type="checkbox" v-model="myValue" value="A">
    <input type="checkbox" v-model="myValue" value="B">
    <input type="checkbox" v-model="myValue" value="C">

</div>
```

--

#### Binding bidirectionnel Boutons Radio

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            myValue: 'B',
        },
    });
</script>

<div id="app">

    <!-- myValue est une String -->
    <input type="radio" v-model="myValue" value="A">
    <input type="radio" v-model="myValue" value="B">
    <input type="radio" v-model="myValue" value="C">

</div>
```

--

#### Binding bidirectionnel Liste de choix

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            myValue: 'B',
        },
    });
</script>

<div id="app">

    <!-- myValue est une String -->
    <select v-model="myValue">
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

</div>
```

--

#### Binding bidirectionnel Liste de choix multivaluée

```html
<script>
    const app = new Vue({
        el: '#app',
        data: {
            myValue: ['A', 'C'],
        },
    });
</script>

<div id="app">

    <!-- myValue est un tableau -->
    <select v-model="myValue" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

</div>
```

--

### Les filtres

--

#### Créer un filtre
[a | b](https://vuejs.org/v2/guide/filters.html)

```html
<script>
    const app = new Vue({
        el: '#app',
        data: { myValue: 'hello world!' },

        filters: {
            capitalize: function (value) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }, 

            lol: function (value, extra) {
                return `${value} ${extra}!!!`;
            }, 
        }
    });
</script>

<div id="app">

    <!-- Les filtres sont chainés avec des pipes (comme unix) -->
    <div>{{ myValue | capitalize | lol }}</div>

    <!-- Les filtres sont aussi utilisables dans les directives -->
    <input :value="myValue | capitalize | lol('extra')">
</div>
```

--

### Labs

<img src="images/lab.png">

--

### lab/02/01
#### Implémenter une librairie en ligne...

```md
- Catalogue
    - Affichage liste de catégories (Policier, SF...)
    - Affichage liste de livres en fonction de la catégorie
    - Ajout des livres au panier (pas de doublons)

- Panier
    - Affichage articles commandés
    - Affichage total du panier
    - Suppression possible (croix rouge)

- Coordonnées
    - Saisie des infos client (nom, prénom...)
    - Affichage liste des pays supportés

- Bouton payer
    - Accessible si au moins 1 article dans le panier
    - Accessible si les coordonnées sont toutes renseignées
    - Au clic, le panier et les coordonnées sont vidées
```

--

### lab/02/01
#### Tips

```md
- Une variable globale contient le catalogue (voir data.js)
    - categories

- Une variable globale contient les pays (voir data.js)
    - countries

- Pour trier des objets par rapport à une prop a -> z (categories...)
    - Regarder la fonction String.prototype.localeCompare...

- Pour formatter les prix
    - Regarder la fonction Number.prototype.toFixed...

- Pour supprimer un élément d'un tableau
    - Regarder la fonction Array.prototype.splice...

- Pour activer /désactiver un bouton
    - Regarder la propriété disabled de l'élément HTML button...
```

# eget-projekt
självständigt arbete ht25
Projektbeskrivning

Webbsidan handlar om virkning och riktar sig till virkintresserade som vill läsa om tekniker, få inspiration och ta del av tips.
Det finns även möjlighet att ladda ner virkmönster som är kopplade till blogginläggen.

Tekniker som använts

HTML: 
* Användning av semantiska element som <header>, <nav>, <main>, <section>, <article>, <aside> och <footer> för att skapa en tydlig och tillgänglig struktur.
* Tydlig rubrikstruktur med <h1>, <h2>, <h3>, <h4> för att förbättra läsbarhet och SEO.
* Formulär med <form>, <fieldset>, <label>, <input> och <select> för sortering och filtrering.
* BEM-namngivning (Block Element Modifier) för strukturerad och skalbar CSS.
* Alt-texter på bilder

CSS: Layout, responsivitet
* CSS-variabler via :root för att definiera färgteman och skapa en enhetlig design.
* Grid och Flexbox:
  - Grid används för övergripande layout (.header, .main).
  - Flexbox används för komponenter som .navbar__container, .form__group, .article__post.
* Responsiv design:
  - Media queries för olika skärmstorlekar (880px och 482px).
  - Anpassning av layout, meny, bildspel och formulär för mobil.
  - Bildspelet (carousel) är designat med aspect-ratio, object-fit och transform
* Animationer och övergångar:
  - transition och hover-effekter på menyer och knappar.
  - Hamburger-menyn har en transformation vid aktivering.

JavaScript: Funktionalitet och ES6-funktioner
* Hamburger-meny
  för mobil Navigeringen på mindre skärmar hanteras med addEventListener och classList.toggle för att öppna och stänga menyn.

* Sortering av inlägg
  Inlägg sorteras dynamiskt baserat på data-sort-attribut med hjälp av Array.sort().

* Filtrering via checkboxar och dropdown
  Inlägg filtreras efter kategori med hjälp av querySelectorAll, map och dataset.type.
  Både checkboxar och en mobilvänlig dropdown används.

* Automatisk återställning av filter
  Filter och sorteringsval återställs automatiskt för att undvika konflikter när användaren byter metod.

* Bildspel (carousel)
  Ett responsivt bildspel är implementerat med navigeringsknappar, transform och getBoundingClientRect().
  Positionen uppdateras vid sidladdning och fönsterstorleksändring.

* Dynamisk rendering av produktkort
  Virkmönsterkort genereras med innerHTML utifrån en array med dataobjekt.
  Varje kort innehåller bild, titel, kategori och nedladdningsknapp.

* Temporärt nedladdningsmeddelande
  Ett meddelande visas i några sekunder när användaren klickar på "Download pattern", hanterat med setTimeout().

* ES6-syntax
  Koden använder const, let, arrow functions (=>), spread operators (...) och forEach för att skapa effektiv och modern JavaScript.
  
Interaktiva funktioner
* Hamburger-meny för mobil På mindre skärmar visas en menyikon som användaren kan klicka på för att öppna eller stänga navigeringsmenyn.
  Menyn togglas med animation och visas ovanpå innehållet.

* Sortering av inlägg Användaren kan välja att visa inlägg i stigande eller fallande ordning (äldre eller nyare först).
  Inläggen sorteras automatiskt baserat på ett data-sort-värde.

* Filtrering av inlägg Inlägg kan filtreras efter kategori via checkboxar eller en dropdown-meny.
  Endast de inlägg som matchar användarens val visas, vilket gör det enkelt att hitta relevant innehåll.

* Återställning av filter och sortering När användaren ändrar sorteringsval rensas filtreringsalternativen, och vice versa.
  Detta förhindrar konflikt mellan filter och sortering och ger en tydlig struktur.

* Bildspel (carousel) Inlägg innehåller ett bildspel där användaren kan bläddra mellan flera bilder med hjälp av vänster- och högerpilar.
  Bildspelet är responsivt och anpassar sig efter skärmstorlek.

* Dynamisk rendering av produktkort Virkmönster presenteras som kort med bild, titel och kategori.
  Dessa genereras automatiskt från en JavaScript-array och uppdateras beroende på användarens filterval.

* Nedladdningsfunktion med feedback När användaren klickar på "Download pattern"-knappen visas ett temporärt meddelande som bekräftar nedladdningen och ger positiv feedback.
  
Utmaningar & lösningar

För att förstå hur jag skulle skapa de olika funktionerna i JavaScript använde jag YouTube som inspirations- och lärplattform. Jag valde noggrant videor där utvecklaren förklarade både vad som gjordes och varför, vilket hjälpte mig att förstå logiken bakom varje kodval.

Vid felsökning använde jag webbläsarens DevTools för att identifiera problem i min JavaScript-kod när funktioner inte fungerade som förväntat. Jag använde även DevTools för att felsöka min CSS, särskilt när element inte betedde sig som tänkt eller layouten såg annorlunda ut än planerat.

---
title: Uke 10 - Oppstart og integrasjon i nettbanken.
date: "2019-03-05"
---

# Uke 10

### Mandag

På mandag satt satt vi oss ned på skolen og lagde en disposisjon for første delen av prosjekt oppgaven som skal inn i april. Vi skrev ned et par punkter for hva som var vitkig å få med på de ulike seksjonene. Vi fikk gått gjennom mye og nå har vi en klar plan for hva vi skal skrive. Vi har nå blitt enige om et mål om å være ferdig med en prøveversjon av produktet til 1.mai.

### Tirsdag

Hadde vi et møte med intern veileder om frister for ferdigstillelse, arkitektur, teknologi og andre ting vi trengte svar på. Vi brukte ca. 1 time på møte og fikk klarheter i brukerhistoriene vi skal utvikle.

### Onsdag

Onsdag var vi hele dagen hos Sbanken og fikk lagt inn React-koden inn i en egen nettside i banken.
Det meste fungerte slik vi ønsket men vi oppdaget noen utfordringer relatert til bilde vi skal laste opp.
Dette vil vi se på neste uke.
Vi må også ha noen avklaringer om hvordan vi skal lagre informasjonen i skyen.

Vi skal ha et møte med intern veileder i uken og har
Neste uke vil fokuset være på å ha alt på plass i banken slik at vi kan begynne med back-end/front-end.

### Torsdag

I dag har jeg fortsatt med å jobbe med å integrere react-appen inn i nettbanken. Jeg startet dagen med å legge til en linter til prosjektet. En linter går gjennom kodebase og sjekker om alt er ok – gir feilmeldinger ettersom.. Dette gikk fint å legge inn, og nå har vi en konvensjon på hvordan syntaksen på koden skal skrives. Det gjør det lettere for oss som utviklere å jobbe sammen på en felles kodebase.
For at React-appen vår skal leve i nettbanken kjører vi et script som bygger appen og kopier over filene til nettbanken. Dette gjøres for at vi kan få «Hot-reloading» - oppdaterer applikasjonen når en endring blir gjort i applikasjonen. Da vi kan se endringer med engang de skjer i nettbanken. Ved hjelp av npm pakken rewire og et intern script som er laget av noen utviklere i banken - blir dette håndtert.
Appen trenger et API som kan levere tilbake rekognisjon resultat fra Azure Ocr og deretter lagre bilde av kvitteringen i skyen. For å gjøre dette må vi utvikle et API. Med god hjelp fra min kollega Johan, har vi satt opp et api-skjelett som en kan gjøre forespørsler til. Det er mye som skal gjøres for å sette opp et api. Vi må lage en api kontrakt og en api service som impl Autorisering må legges til for å få tilgang. Dette gjøres ved bruk av OAuth 2 som gir en token en bruker for å fortelle serveren at brukeren er gyldig og skal ha tilgang. Etter en god del timer fikk vi opp en api som fungerte. Vi fikk pushet apiet til en dev server slik at andre folk i banken også kan prøve den ut.
Vi bruker swagger for å dokumentere apiet. På Skjermbildet nedenfor ser vi at en kan gjøre et forespørsel til /api/v1/Ocr/text

### gjenstående arbeid...

Nå gjenstår det å implementere klient delen for snakking med apiet. Her må vi håndere http meldingen 401 unauthorized meldingen. Om vi får en 401 må vi oppdatere token vår og spørre på nytt. Når dette er gjort er vi ferdig med å implementere appen i nettbanken og vi kan da begynne å programmere brukergrensesnitt.

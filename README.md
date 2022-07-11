# proyecto-final-interfaces
503607-1 INTERFACES USUARIO SISTEMAS SOFTWARE (S1-2022) Proyecto Final en tailwind

## Instrucciones

run: npm install

run: npm run watch # Esto te va a correr el server express y dejar corriendo tailwind de fondo.

El server esta en el 3000.

Las paginas no se refrescan cuando cambias el html de /public. Un trucazo, es poder en el \<head\> del html esto:
```
<meta http-equiv="refresh" content="3" />
```
Eso va a hacer que se refresque la pag cada 3 sec. 
OJO: no colocar eso en el index a menos que estes editando el index, sino se te van a refrescar todas las pag cada 3 seg. 
No te va a gustar my friend.
En my_clubs.html esta comentada esa linea que refresca la pag. Descomenta para probar ;)

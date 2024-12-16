# Torres de Hanoi

## Instrucciones

Tienes a tu disposición un conjunto de discos numerados del 1 al N y tres torres
etiquetadas como A, B y C. La torre A contiene inicialmente todos los discos
apilados en orden descendente, desde el disco N en la parte inferior hasta el
disco 1 en la parte superior.
Tu tarea es implementar una solución recursiva para mover todos los discos
desde la torre A hasta la torre C, siguiendo las reglas clásicas de las Torres de
Hanoi:
1. Solo se puede mover un disco a la vez.
2. Un disco más grande nunca puede estar sobre uno más pequeño.
3. Solo puedes mover el disco superior de una torre.

Debes definir una función llamada 
```python
torres_de_hanoi(n, origen, destino, auxiliar)
```

que, dado el número total de discos n y las torres de origen, destino y auxiliar,
imprima los pasos necesarios para lograr el movimiento de todos los discos
desde la torre A hasta la torre C.
A continuacion un ejemplo de una posible entrada y salida de la solucion:
| Entrada | Salida |
|---|:---:|
| N de discos | Mover disco n de la torre A a la torre D |
| N de torres | Mover disco n de la torre A a la torre B |
| Torres : origen, desitno, auxiliar | |
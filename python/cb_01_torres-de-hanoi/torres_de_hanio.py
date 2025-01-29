def hanoi(n, origen, auxiliar, destino):
    # caso base
    if n == 1:
        print(f"Move disk 1 from {origen} to {destino}")
        return
    # Mover n-1 discos de origen a auxiliar
    hanoi(n-1, origen, destino, auxiliar)
    # Mover el disco más grande al destino
    print(f"Move disk {n} from {origen} to {destino}")
    # Mover los n-1 discos de auxiliar a destino
    hanoi(n-1, auxiliar, origen, destino)

# Ejemplo: Resolver con 3 discos
hanoi(3, "A", "B", "C")
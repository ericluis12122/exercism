color = ('black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white')
magnitud = ('', 'kilo', 'mega', 'giga')
tolerance_map = {'grey': '0.05', 'violet': '0.1', 'blue': '0.25', 'green': '0.5', 
                 'brown': '1', 'red': '2', 'gold': '5', 'silver': '10'}

def resistor_label(colors):
    if len(colors) < 3:
        return '0 ohms'
    
    *digits, multiplier, tolerance = colors
    
    # Calcular el valor numérico base
    base_value = int(''.join(str(color.index(d)) for d in digits))
    
    # Aplicar el multiplicador
    base_value *= 10 ** color.index(multiplier)
    
    # Determinar magnitud
    magnitude_index = 0
    while base_value >= 1000 and magnitude_index < len(magnitud) - 1:
        base_value /= 1000
        magnitude_index += 1
    
    # Formatear el valor (eliminar .0 si no hay decimales significativos)
    formatted_value = f"{base_value:.0f}" if base_value == int(base_value) else f"{float(base_value)}"
    
    # Añadir tolerancia
    tolerance_value = tolerance_map.get(tolerance, "unknown")
    
    return f"{formatted_value} {magnitud[magnitude_index]}ohms ±{tolerance_value}%"

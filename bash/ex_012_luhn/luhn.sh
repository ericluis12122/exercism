#!/usr/bin/env bash
input="${1// /}"  # Eliminar espacios
# Validar entrada: solo dígitos y más de un carácter
[[ "$input" =~ ^[0-9]+$ && ${#input} -gt 1 ]] || { echo "false"; exit 0; }
sum=0
double=0  # 0 = false, 1 = true
# Recorrer de derecha a izquierda
for ((i=${#input}-1; i>=0; i--)); do
    digit=${input:i:1}
    (( double )) && (( digit = digit * 2 > 9 ? digit * 2 - 9 : digit * 2 ))
    (( sum += digit, double ^= 1 ))
done
[ $((sum % 10)) -eq 0 ] && echo "true" || echo "false"
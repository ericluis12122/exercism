#!/usr/bin/env bash
square() {
    local n=$1
    if [[ $n -lt 1 || $n -gt 64 ]]; then
        echo "Error: invalid input"
        exit 1
    fi
    bc <<< "2^($n-1)"
}
total() {
    bc <<< "(2^64) - 1"
}
# Ejecuta la función correspondiente
if [[ $1 == "total" ]]; then
    total
elif [[ $1 =~ ^[0-9]+$ ]]; then
    square "$1"
else
    echo "Error: invalid input"
    exit 1
fi
#!/usr/bin/env bash
declare -A letter_values=(
    [A]=1 [E]=1 [I]=1 [O]=1 [U]=1 [L]=1 [N]=1 [R]=1 [S]=1 [T]=1
    [D]=2 [G]=2
    [B]=3 [C]=3 [M]=3 [P]=3
    [F]=4 [H]=4 [V]=4 [W]=4 [Y]=4
    [K]=5
    [J]=8 [X]=8
    [Q]=10 [Z]=10
)
calculate_score() {
    local word=${1^^}  # Convertir a mayúsculas
    local score=0
    for (( i=0; i<${#word}; i++ )); do
        letter=${word:i:1}
        if [[ ${letter_values[$letter]+_} ]]; then
            ((score += letter_values[$letter]))
        fi
    done
    echo "$score"
}
calculate_score "$1"
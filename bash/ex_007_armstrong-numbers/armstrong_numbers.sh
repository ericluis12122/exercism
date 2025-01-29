#!/usr/bin/env bash
num=$1
sum=0
digits=${#num}  # Get the number of digits
for (( i=0; i<digits; i++ )); do
    digit=${num:i:1}  # Extract each digit
    sum=$((sum + digit**digits))  # Add digit^number_of_digits to sum
done
# Print result (1 if Armstrong, 0 otherwise)
[[ $sum -eq $num ]] && echo true || echo false
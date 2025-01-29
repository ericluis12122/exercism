#!/usr/bin/env bash
sentence="$1"
# Convert to lowercase and remove non-alphabet characters
cleaned=$(echo "$sentence" | tr '[:upper:]' '[:lower:]' | tr -cd 'a-z')
# Check if all 26 letters exist in the cleaned string
for letter in {a..z}; do
    if [[ $cleaned != *"$letter"* ]]; then
        echo false
        exit 0
    fi
done
echo true
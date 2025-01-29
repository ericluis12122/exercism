#!/usr/bin/env bash

# Replace all "-" with " "
input="${1//-/ }"

# Remove all characters except letters and spaces
input="${input//[^a-zA-Z ]/}"

# Initialize an empty string for the output
output=""

# Loop through each word in the input
for word in $input; do
    # Step 5: Get the first character of each word and append to the output string
    output+="${word:0:1}"
done

# Convert the output to uppercase and print
echo "${output^^}"

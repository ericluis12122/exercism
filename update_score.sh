#!/bin/bash

#--- The purpose of this script is to update the number of ---#
#---  exercises completed in each programming language     ---#

# Output file name
output_file="README.md"

# Initialize the output file
echo "## Goal:" > "$output_file"
echo "Solving programming challenges with the goal of having fun while exploring and mastering the depths of various programming languages." >> "$output_file"
echo "" >> "$output_file"
echo "### Score:" >> "$output_file"
echo "| Lenguage | Exercises |" >> "$output_file"
echo "|---|:---:|" >> "$output_file"

# Initialize total exercises counter
total_exercises=0

# Iterate over all directories in the current directory
for dir in */; do
    # Check if it's a directory
    if [ -d "$dir" ]; then
        # Count the number of subdirectories
        subdirs=$(find "$dir" -mindepth 1 -maxdepth 1 -type d | wc -l)
        # Add the count to the total
        total_exercises=$((total_exercises + subdirs))
        # Write the directory name and the number of subdirectories
        echo "| [${dir%/}](/${dir%/}) | $subdirs |" >> "$output_file"
    fi
done
# Write the total to the output file
echo "| **Total** | **$total_exercises** |" >> "$output_file"

echo "Report written to $output_file"
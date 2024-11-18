#!/bin/bash

#--- The purpose of this script is to update the number of ---#
#---  exercises completed in each programming language     ---#

# Output file name
output_file="README.md"

# Initialize the output file
echo "Solving programming challenges with the goal of having fun whileexploring and mastering the depths of various programming languages." > "$output_file"
echo "" >> "$output_file"
echo "## Score:" >> "$output_file"

# Position counter
pos=1

# Iterate over all directories in the current directory
for dir in */; do
    # Check if it's a directory
    if [ -d "$dir" ]; then
        # Count the number of subdirectories
        subdirs=$(find "$dir" -mindepth 1 -maxdepth 1 -type d | wc -l)
        # Write the directory name and the number of subdirectories
        echo "$pos.### ${dir%/} - $subdirs exercises" >> "$output_file"
        ((pos++))
    fi
done
echo "Report written to $output_file"
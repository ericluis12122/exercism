#!/usr/bin/env bash
error () {
    echo "$1"
    exit 1
}
w1=$1 w2=$2
(( $# == 2 )) || error "Usage: hamming.sh <string1> <string2>"
(( ${#w1} == ${#w2} )) || error "strands must be of equal length"
declare -i c=0
for (( i=0; i<${#w1}; i++ )); do
    [[ "${w1:i:1}" == "${w2:i:1}" ]] || ((c++))
done
echo "$c"
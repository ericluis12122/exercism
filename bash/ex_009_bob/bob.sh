#!/usr/bin/env bash
trimmed=$(echo "$1" | tr -d '[:space:]')
if [[ -z "$trimmed" ]]; then
    echo "Fine. Be that way!"
elif [[ "$trimmed" =~ [[:alpha:]] && "$trimmed" == "${trimmed^^}" ]]; then
    if [[ "$trimmed" =~ \?$ ]]; then
        echo "Calm down, I know what I'm doing!"
    else
        echo "Whoa, chill out!"
    fi
elif [[ "$trimmed" =~ \?$ ]]; then
    echo "Sure."
else
    echo "Whatever."
fi
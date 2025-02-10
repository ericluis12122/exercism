<?php
declare(strict_types=1);

function distance(string $strandA, string $strandB): int
{
    // Ensure both input strands have the same length
    if (strlen($strandA) !== strlen($strandB)) {
        throw new InvalidArgumentException('strands must be of equal length');
    }

    // Classic version
    /*
    $count = 0;
    for ($i = 0; $i < strlen($strandA); $i++)
        if ($strandA[$i] != $strandB[$i])
            $count++;
    return $count;
    */

    // Modern version using functional programming
    return count(array_filter(
        array_map(fn($a, $b) => $a !== $b, str_split($strandA), str_split($strandB))
    ));
}
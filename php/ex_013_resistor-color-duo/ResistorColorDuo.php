<?php
declare(strict_types=1);

class ResistorColorDuo
{
    private const MAPA = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    public function getColorsValue(array $colors): int
    {
        return array_search($colors[0], self::MAPA) * 10 + array_search($colors[1], self::MAPA);
    }
}
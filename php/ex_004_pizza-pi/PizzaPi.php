<?php

class PizzaPi
{
    const BASE_DOUGH_NEEDED = 200;
    const DOUGH_X_PERSON = 20;
    const SAUCE_X_PIZZA = 125;
    const SLICES_X_PIZZA = 8;
    
    public function calculateDoughRequirement($pizzas, $persons)
    {
        return $pizzas * ($persons * self::DOUGH_X_PERSON + self::BASE_DOUGH_NEEDED);
    }

    public function calculateSauceRequirement($pizzas, $sauce_can_volume)
    {
        return $pizzas * self::SAUCE_X_PIZZA / $sauce_can_volume;
    }

    public function calculateCheeseCubeCoverage($cheese_dimension, $thickness, $diameter)
    {
        return floor($cheese_dimension ** 3 / ($thickness * M_PI * $diameter));
    }

    public function calculateLeftOverSlices($pizzas, $friends)
    {
        return $pizzas * self::SLICES_X_PIZZA % $friends;
    }
}
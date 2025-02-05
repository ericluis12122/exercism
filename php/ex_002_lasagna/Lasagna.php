<?php

class Lasagna
{
    const COOK_TIME = 40;
    const TIME_X_LAYER = 2;
    
    public function expectedCookTime()
    {
        return self::COOK_TIME;
    }

    public function remainingCookTime($elapsed_minutes)
    {
        return self::COOK_TIME - $elapsed_minutes;
    }

    public function totalPreparationTime($layers_to_prep)
    {
        return self::TIME_X_LAYER * $layers_to_prep;
    }

    public function totalElapsedTime($layers_to_prep, $elapsed_minutes)
    {
        return $this->totalPreparationTime($layers_to_prep) + $elapsed_minutes;
    }

    public function alarm()
    {
        return "Ding!";
    }
}
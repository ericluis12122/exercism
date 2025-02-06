<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return ltrim($name)[0];
    }

    public function initial(string $name): string
    {
        return strtoupper($this->firstLetter($name)) . '.';
    }

    public function initials(string $name): string
    {
        [$first, $last] = explode(' ', $name, 2);
        return $this->initial($first) . ' ' . $this->initial($last);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $_one = $this->initials($sweetheart_a);
        $_two = $this->initials($sweetheart_b);
        return <<<HEART
                 ******       ******
               **      **   **      **
             **         ** **         **
            **            *            **
            **                         **
            **     $_one  +  $_two     **
             **                       **
               **                   **
                 **               **
                   **           **
                     **       **
                       **   **
                         ***
                          *
            HEART;
    }
}
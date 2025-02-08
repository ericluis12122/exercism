<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        $n1 = (int) implode('', $digitsOfNumber1);
        $n2 = (int) implode('', $digitsOfNumber2);
        return $n1 + $n2;
    }

    public function isPalindrome(int $number): bool
    {
        $reversedNumber = strrev((string) $number);
        return $number == $reversedNumber;
    }

    public function validate(string $input): string
    {
        if($input == '') return 'Required field';
        if((int) $input > 0) return '';
        return 'Must be a whole number larger than 0';
    }
}
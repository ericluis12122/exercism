<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $width;
    public $height;

    function __construct()
    {
        $this->x = 0;
        $this->y = 0;
        $this->width = 800;
        $this->height= 600;
    }

    function resize($size)
    {
        $this->width = $size->width;
        $this->height = $size->height;
    }

    function move($position)
    {
        $this->x = $position->x;
        $this->y = $position->y;
    }
}
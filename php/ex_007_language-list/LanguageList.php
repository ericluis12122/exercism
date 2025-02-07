<?php

function language_list(...$items)
{
    return $items;
}

function add_to_language_list($list, $leng)
{
    $list[] = $leng;
    return $list;
}

function prune_language_list($list)
{
    array_shift($list);
    return $list;
}

function current_language($list)
{
    return $list[0];
}

function language_list_length($list)
{
    return count($list);
}
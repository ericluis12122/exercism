# Towers of Hanoi

## Instructions

You have a set of disks numbered from 1 to N and three towers labeled A, B, and C. Tower A initially contains all the disks stacked in descending order, with disk N at the bottom and disk 1 at the top.

Your task is to implement a recursive solution to move all the disks from Tower A to Tower C, following the classic rules of the Towers of Hanoi:

1. Only one disk can be moved at a time.
2. A larger disk can never be placed on top of a smaller disk.
3. Only the top disk of a tower can be moved.

You must define a function named:

```python
def hanoi(n, source, target, auxiliary):
```

This function, given the total number of disks `n` and the source, target, and auxiliary towers, should print the steps required to move all the disks from Tower A to Tower C.

## Example Input and Output

| Input                | Output                           |
|----------------------|----------------------------------|
| Number of disks (N)  | Move disk n from Tower A to C    |
| Number of towers     | Move disk n from Tower A to B    |
| Towers: source, target, auxiliary | |

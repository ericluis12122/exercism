EAST = 1
NORTH = 0
WEST = 3
SOUTH = 2

class Robot:
  __directions = ((0, 1), (1, 0), (0, -1), (-1, 0))
    
  def __init__(self, direction=NORTH, x_pos=0, y_pos=0):
      self.coordinates = (x_pos, y_pos)
      self.direction = direction

  def turn_right(self):
      self.direction = (self.direction + 1) % 4

  def turn_left(self):
      self.direction = 3 if self.direction == 0 else self.direction - 1

  def advance(self):
      self.coordinates = (self.coordinates[0] + self.__directions[self.direction][0], self.coordinates[1] + self.__directions[self.direction][1])

  def move(self, path):
    instruction = {'R': self.turn_right, 'L': self.turn_left, 'A': self.advance}
    for i in path:
      instruction[i]()
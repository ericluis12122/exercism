class Garden:
    __default_roster = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry']
    __encoding_plants = {'G':'Grass', 'C':'Clover', 'R':'Radishes', 'V':'Violets'}
    
    def __init__(self, diagram, students = __default_roster):
        self.__garden = diagram.splitlines()
        self.__roster = sorted(students)

    def plants(self, student):
        index = self.__roster.index(student) * 2
        cup_1 = self.__encoding_plants[self.__garden[0][index]]
        cup_2 = self.__encoding_plants[self.__garden[0][index + 1]]
        cup_3 = self.__encoding_plants[self.__garden[1][index]]
        cup_4 = self.__encoding_plants[self.__garden[1][index + 1]]
        return [cup_1, cup_2, cup_3, cup_4]

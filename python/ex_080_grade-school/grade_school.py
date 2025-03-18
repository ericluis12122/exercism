class School:
    def __init__(self):
        self.__roster = {}
        self.__reg = []

    def add_student(self, name, grade):
        if not name in self.roster():
            grade_list = self.__roster.setdefault(grade,set())
            grade_list.add(name)
            self.__reg.append(True)
        else:
            self.__reg.append(False)

    def roster(self):
        _roster = []
        for grade in sorted(self.__roster.keys()):
            _roster.extend(sorted(self.__roster[grade]))
        return _roster

    def grade(self, grade_number):
        if grade_number in self.__roster.keys():
            return sorted(self.__roster[grade_number])
        return []

    def added(self):
        return self.__reg

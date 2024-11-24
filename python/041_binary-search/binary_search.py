def find(search_list, value):
   first_point = 0
   last_point = len(search_list) - 1
   while first_point <= last_point:
       mid_point = (last_point + first_point) // 2
       if search_list[mid_point] == value:
           return mid_point
       if search_list[mid_point] < value:
           first_point = mid_point + 1
       else:
           last_point = mid_point - 1
   raise ValueError("value not in array")
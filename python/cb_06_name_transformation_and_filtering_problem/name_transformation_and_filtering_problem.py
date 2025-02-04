names = ["Pérez,Juan", "López,María", "García,José", "Smith,John"]

formatted_names = list(map(lambda name: name.split(",")[1] + " " + name.split(",")[0], names))

count_vowels = lambda name: sum([1 for letter in name if letter in "aeiouAEIOU"])

filtered_names  = list(filter(lambda name: count_vowels(name) > 1 and len(name) > 10, formatted_names))

print(filtered_names)
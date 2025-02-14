def transform(legacy_data):
    return {letter.lower() : point for point, values in legacy_data.items() for letter in values}
        

def score(x, y):
    r = (x**2+y**2)**0.5  
    return (r<=1)*5+(r<=5)*4+(r<=10)
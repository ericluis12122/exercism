def response(hey_bob):
    r = ["Whatever.", "Whoa, chill out!", "Sure.", "Calm down, I know what I'm doing!"]
    t = hey_bob.strip()
    if not t:
        return "Fine. Be that way!"
    s = 1 if t.isupper() else 0
    q = 2 if t[-1] == "?" else 0
    return r[s + q]
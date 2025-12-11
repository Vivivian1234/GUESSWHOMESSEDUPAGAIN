
username = input("Enter Username: ")

def username_checker():

    if len(username) > 10:
        print("Username must be less than 10 characters.")

    elif "<" in username or ">" in username:
        print("'<' or '>' not allowed in username.")

    elif not username.isalnum():
        print("Username must only contain letters and numbers.")

    else:
        print("Username satisfies conditions.")

username_checker()

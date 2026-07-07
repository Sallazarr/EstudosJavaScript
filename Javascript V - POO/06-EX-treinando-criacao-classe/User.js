class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login successful!");
    } else {
      console.log("Invalid email or password.");
    }
  }
}

const john = new User("John Doe", "john@email.com", "123456");

john.login("john@email.com", "123456"); // Login successful!
john.login("john@email.com", "wrongpassword"); // Invalid email or password.

let data = 'Private Information'

class User{
    constructor(name, email) {
    this.name = name
    this.email = email
    }

    viewData(){
        console.log("Data =", data)
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email)
    }
    editData() {
        data = "some new value"
    }
}

let user1 = new User("Pracheer", "xyz@gmail.com");
let user2 = new User("Jonty", "abc@email.com");

let admin1 = new Admin("Admin", "admin@email.com");
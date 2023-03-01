/*
    Full Name: Kinen Ocitti (100725411), Manuel Lopez (100622700)
    Date Completed: March 1 , 2023
*/
class User{
    constructor(firstName, lastName, email, userName, password){
        this.FirstName = firstName
        this.LastName = lastName
        this.UserName = userName
        this.Email = email
        this.Password = password
    }

    set FirstName(firstName){
        this._firstName = firstName;
    }

    get FirstName(){
        return this._firstName
    }

    set LastName(lastName){
        this._lastName = lastName
    }

    get LastName(){
        return this._lastName
    }

    set UserName(userName){
        this._userName = userName
    }

    get UserName(){
        return this._userName
    }

    set Email(email){
        this._email = email
    }

    get Email(){
        return this._email
    }

    set Password(password){
        this._password = password
    }

    get Password(){
        return this._password
    }

    serialize(){
        if (this.FirstName !== '' &&
            this.LastName !== '' &&
            this.UserName !== '' &&
            this.Email !== '' &&
            this.Password !== '' 
        ){
           return JSON.stringify({
            FirstName: this.FristName, 
            LastName: this.LastName, 
            UserName: this.UserName, 
            Email: this.Email, 
            Password: this.Password})
        }
    }

    deserialize(aUser){
        return JSON.parse({...aUser})
    }

    toString(){
        return `First name: ${this.FirstName}
        Last name: ${this.LastName}
        Username: ${this.UserName}
        Email: ${this.Email}
        `
    }


}
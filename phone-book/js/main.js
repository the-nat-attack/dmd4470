const phonebook = []
class Person{
    constructor(firstname, lastname, title, email, phone, birthdate){
        this.firstname = firstname
        this.lastname = lastname
        this.title = title
        this.email = email
        this.phone = phone
        this.birthdate = birthdate
        this.name = this.firstname + " " + this.lastname
        phonebook.push(this)
    }
}

const myRequest = 'https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json'
fetch(myRequest)
    .then((response) => {
        return response.json();
    })
    .then ((data) => {
        for (i in data.contacts){
            new Person(data.contacts[i].firstname, data.contacts[i].lastname, data.contacts[i].title, data.contacts[i].email,data.contacts[i].phone,data.contacts[i].birthdate)
        }
        phonebook.sort(function(a,b){
            if (a.lastname < b.lastname) {return -1;}
            if (a.lastname > b.lastname) {return 1;}
            return 0
        })
        console.log(phonebook)
        phonebook.forEach(function(element){
            var resourcename = document.createElement("h2")
            resourcename.innerHTML = element["name"]
            var resourcetitle = document.createElement("h4")
            resourcetitle.innerHTML = element["title"]
            var resourceemail = document.createElement("p")
            var resourceemaillink = document.createElement("a")
            resourceemaillink.href = element["email"]
            resourceemaillink.innerHTML = element["email"]
            resourceemail.appendChild(resourceemaillink)
            var resourcephone = document.createElement("p")
            resourcephone.innerHTML = element["phone"]
            var resourcebirthdate = document.createElement("p")
            resourcebirthdate.innerHTML = element["birthdate"]
            var listresource = document.createElement("li")
            listresource.appendChild(resourcename)
            listresource.appendChild(resourcetitle)
            listresource.appendChild(resourceemail)
            listresource.appendChild(resourcephone)
            listresource.appendChild(resourcebirthdate)
            document.querySelector('#phonebook-list').appendChild(listresource)
        })

    })
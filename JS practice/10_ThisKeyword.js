const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        console.log(this.firstName + " " + this.lastName);
    }
  };
  person.fullName();
  //console.log(person);
  let x = this;
  console.log(x);
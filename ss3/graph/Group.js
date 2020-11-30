


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
}
class Boy extends Person {
    constructor(name, age, handsome) {
      super(name, age);
      this.handsome = handsome;
    }
}
class Girl extends Person {
    constructor(name, age, beauty) {
      super(name, age);
      this.beauty = beauty;
    }
}
class Group {
    people;
    relationships;
    constructor(people,relationships){
        this.people = []
        this.relationships = []
    }
    addPerson(person){
        if (person instanceof Person){
            this.people.push(person)
        }
    }
    addRelationship(a,b){
        if (a instanceof Person && b instanceof Person && a != b){
            let foundRelationships = this.relationships.find((relationship) => {
              return (relationship.a ==a && relationship.b ==b ) || (relationship.a==b && relationship.b == a )  
            })
            if(!foundRelationships){
            let newRelationship = new Relationship (a,b)
            this.relationships.push(newRelationship)
            }
            this.relationships.push(newRelationship)
        }
    }
}
const FindFriend = (person) => {
    const friends = []
    for (let i = 0; i < relationships.length; i++) {
        if (person.name === Group.relationships[i].a.name) {
            friends.push(relationships[i].b.name)
    }
        if (person.name === Group.relationships[i].b.name) {
            friends.push(relationships[i].a.name)
    }
        return friends
    }
    // find boy friends
    const BoyFriends = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i] instanceof Boy){
            BoyFriends.push(friends[i])
        }
        return BoyFriends
    }
    const GirlFriends = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i] instanceof Girl){
            GirlFriends.push(friends[i])
        }
        return GirlFriends
    }
    const Over5pointBoy = []
    for (let i = 0; i < BoyFriends.length;i++){
        if(BoyFriends.handsome > 5){
            Over5pointBoy.push(BoyFriends[i])
        }
    }
    const Over5pointGirl = []
    for (let i = 0; i < GirlFriends.length;i++){
        if(GirlFriends.beauty > 5){
            Over5pointGirl.push(GirlFriends[i])
        }
    }
}
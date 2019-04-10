/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding to the window object.  When .this points to the global scope.
* 2. binding to the new key word through the constructor function
* 3. explicit binding using call,bind,apply
* 4. implicit binding in which this points to the object in which .this is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)
// Principle 2

// code example for Implicit Binding
const obj1 = {
    name: "brandon",
    age: 37,
    speak: function(){
        return (`my name is ${this.name}`)
    }
}

console.log(obj1.speak())

// Principle 3
const Animal = function(atribs){
    this.age = atribs.age
    this.species = atribs.species
}

let cat = new Animal({
    age: 12,
    species: "black cat"

})

console.log(cat)
// code example for New Binding

// Principle 4

let objA = {
    wheels: 4,
    windows: 3
}

let objB = {
    wheels: 2,
    windows: 6,
    drive: function(){
        return (this.windows)
    }
}

console.log(objB.drive.call(objA))

console.log(objB.drive())
// code example for Explicit Binding


let movies =["up","Jurasic Park"]

const Video = function(movieTitle){
    this.movieTitle = movieTitle
}

let videoOne = new Video("Terminator")
let videoTwo = new Video("Avengers")

let videoPlay = function(){
    console.log(`${this.movieTitle} and ${movies[0]} and ${movies[1]} `)
}

videoPlay.apply(videoOne, movies)


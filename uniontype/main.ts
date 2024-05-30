//union type

//basic union type
let myName:string| number |boolean=("ali")
myName =244
myName ="ali"
myName =true

//union type in function
function myfun (name:string | number |boolean ){
    console.log(name)
}
myfun("ali")

//union type in Array
let myarray=(name :string|boolean |number){
    console.log("orange","apple",)
}

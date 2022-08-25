// Agregar un método palindrome a los strings de JavaScript que retorne true si el string es un palíndrome, o false de lo contrario.

// El método se va a utilizar de la siguiente forma:

String.prototype.palindrome = function(){
    str1 = this.split(" ").join("")
    let str2 =this.split(" ").join("").split("").reverse().join("")
    if(str1 === str2){
        return true
    }else{
        return false
    }
}
"prueba".palindrome() // false
"anita lava la tina".palindrome() //true
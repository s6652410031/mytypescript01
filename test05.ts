function funcC( ) : string{
    console.log("Woooo...")
    return "I love you"
}

function funcD(n1 : number, n2 : number, n3 : number) : number{
    return n1 + n2 + n3;
}

console.log(funcC())
let result : number = funcD(10, 20, 30)
console.log(result)
function func01 (n1 : number, n2 : number, n3 : number){
    if(typeof n3 !='undefined'){
        console.log(n1 + n2 + n3)
    }else{
        console.log(n1 + n2)
    }
    
}

func01(10, 20, 30)
func01(10, 20)

function func02 (n1 : number, n2 : number, n3 : number = 100){
    console.log(n1 + n2 + n3)
}
func01(10, 20, 30)
func01(10, 20)


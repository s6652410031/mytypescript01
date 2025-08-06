class student{

    fname : string = ''
    age : number = 0

    showinfo(){
        console.log ('Hi...$(this.fname)')
        console.log ('Your age is $(this.age)')

    }



}


let ob1 = new student()
let ob2 = new student()

ob1.fname = 'Sombat'
ob1.age = 20
ob1 showinfo()
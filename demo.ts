interface user{
    name: string,
    age:number|string,
    isNepali: boolean
}

interface Employee extends user{
    role:string
}
enum role{
    desiger,
    developer
}

let me:Employee={
     name:"sugam",
    age:24,
    isNepali:true,
    role:"developer"
}

console.log(me)
let haha:any=54579

const haha1=(num: number)=>{
   console.log(num+1)
}
haha1(4)

function add(num1:number,num2:number){
    return num1+num2


}

console.log(add(2,4))

function addpani<t>(data:t,data2:t){
    console.log("haha")
}

addpani<string>("1","1")
addpani<number>(1,2)



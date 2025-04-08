
let calString = ""

function display(){
    const out = document.getElementById("screenText")
    out.innerHTML=calString
}

function addNum(num){

if(num=="." && calString.includes(num)){
    alert("You cannot have more than one decimal point.")
}else if(calString.length>=14){
alert("Max length reached")
}else{
    calString+=num
    display()
}

}

function buildArr(){

    let mathArr=[]
    let tot =0
    
    if(calString[0]=="0" || calString[0]=="1" || calString[0]=="2" || calString[0]=="3" || calString[0]=="4" || calString[0]=="5" || calString[0]=="6" || calString[0]=="7" || calString[0]=="8" || calString[0]=="9"){
        mathArr.push("+")
    }

    for(let i=0;i<=calString.length-1;i++){
            let e = calString[i]
              
        switch(true){
            case e=="00" || e=="0" || e=="1" || e=="2" ||e=="3" || e=="4" || e=="5" || e=="6" ||e=="7" || e=="8" || e=="9":
                mathArr.push(parseInt(e))
           
            break;
            case e=="+":
                mathArr.push("+")

            break;    
        }
    }

    removePlus(mathArr,tot)

}

function removePlus(mathArr, tot){ 
console.log("removed")
if(mathArr.length!=0){
   console.log(mathArr) 
   
   for(let j =0; j<mathArr.length-1;j++){


    if(mathArr[j]=="+"){
        tot+=mathArr[j+1]
        mathArr.splice(j, 2)
        removeFromArr(mathArr,tot)
    }
   }


}else{
    calString=tot
    display()
}



}

function addOpperator(opp){

    switch(true){
        case opp=="=":
            if(calString[calString.length-1]=="0" || calString[calString.length-1]=="1" || calString[calString.length-1]=="2" || calString[calString.length-1]=="3" || calString[calString.length-1]=="4" || calString[calString.length-1]=="5" || calString[calString.length-1]=="6" || calString[calString.length-1]=="7" || calString[calString.length-1]=="8" || calString[calString.length-1]=="9"){
            buildArr()
            }else{
                alert("cannot end on an opperator")
            }
            
        break;
        case calString[calString.length-1]=="%"|| calString[calString.length-1]=="√" || calString[calString.length-1]=="X" || calString[calString.length-1]=="÷":
            alert("You cannot follow one opperator after another")
            break;
        case calString.length>=14:
            alert("Max length reached")
        break;
        case opp=="C":
            calString="0"
            display()
        break;
        default:
            calString+=opp
            display()                
    }

    


}




const numBtns = document.querySelectorAll(".num")


numBtns.forEach((e)=>{
    e.addEventListener("click",()=>{ 
        addNum(e.innerHTML)})
})

const oppBtns = document.querySelectorAll(".operator")

oppBtns.forEach((e)=>{
    e.addEventListener("click", ()=>{
        addOpperator(e.innerHTML)
    })
})

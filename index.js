
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

    // if(calString[0]=="+"){

    //    calString= calString.replace(calString[0], "") 
    // }
    

    // if(calString[0]=="0" || calString[0]=="1" || calString[0]=="2" || calString[0]=="3" || calString[0]=="4" || calString[0]=="5" || calString[0]=="6" || calString[0]=="7" || calString[0]=="8" || calString[0]=="9"){
    //     // mathArr.unshift("+")
    //     calString= "+"+calString
    // }

    // if( calString[0]=="-"){
    //     console.log("ran")
    //     // mathArr.unshift("0")
    //     calString= "0 "+calString
    // }

    mathArr = calString.split(" ")

    console.log(mathArr)
    console.log(typeof(mathArr[0]))
    
    squareRoot(mathArr)
}

function squareRoot(mathArr){

 for(let i =0; i<=mathArr.length-1;i++){

    if(mathArr[i].includes("√")){
    
        let a = mathArr[i].replace("√", "")
        a = Math.sqrt(parseFloat(a))
        a=a.toString()
        mathArr[i]=a
        console.log(mathArr)
  


 }


 
}
division(mathArr)
}
function division(mathArr){
    for(let i =0; i<=mathArr.length-1;i++){

        if(mathArr[i].includes("/")){
        
            let a = mathArr[i].replace("/", "")
            a = parseFloat(a)
            let b = parseFloat(mathArr[i-1])
            let c = b / a
            c=c.toString()
            mathArr[i]=c
            // mathArr[i-1]=""
            mathArr.splice(i-1,1)
            console.log(mathArr)
    
        }
    
    
     }
    
     multiplication(mathArr)
}

function multiplication(mathArr){
    for(let i =0; i<=mathArr.length-1;i++){

        if(mathArr[i].includes("X")){
        
            let a = mathArr[i].replace("X", "")
            a = parseFloat(a)
            let b = parseFloat(mathArr[i-1])
            let c = b * a
            c=c.toString()
            mathArr[i]=c
            // mathArr[i-1]=""
            mathArr.splice(i-1,1)
            console.log(mathArr)
    
        }
    
    
     }
     addition(mathArr)
}

function addition(mathArr){
    for(let i =0; i<=mathArr.length-1;i++){
        console.log(mathArr)
        if(mathArr[i].includes("+")){
        
            let a = mathArr[i].replace("+", "")
            a = parseFloat(a)
            let b = parseFloat(mathArr[i-1])
            let c = b + a
            c=c.toString()
            mathArr[i]=c
            mathArr[i-1]=""
            mathArr.splice(i-1,1)
            console.log(mathArr)
    
        }
    
    
     }
     subtraction(mathArr)
}

function subtraction(mathArr){
    for(let i =0; i<=mathArr.length-1;i++){

        if(mathArr[i].includes("-")){
        
            let a = mathArr[i].replace("-", "")
            a = parseFloat(a)
            let b = parseFloat(mathArr[i-1])
            let c = b - a
            c=c.toString()
            mathArr[i]=c
            // mathArr[i-1]=""
            mathArr.splice(i-1,1)
            console.log(mathArr)
    
        }
    
     }
    finished(mathArr)
}

function clearArr(mathArr){

    for(let i =0; i<=mathArr.length-1;i++){
    
    if(mathArr[i].includes('') || mathArr[i].includes(" ")){
        mathArr.splice(i,1)
    }
}
squareRoot(mathArr)
}

function finished(mathArr){
if(mathArr.length==1){
    calString=mathArr[0]
    display()
}else{
    clearArr(mathArr)
    
  
}
}

function addOpperator(opp){

    switch(true){
        case opp=="+":
            if(calString.length==0){
                alert("You cannot start with +")
            }else{
                calString+=" "
                calString+=opp
                display()
            }
            break;
        case opp=="=":
            if(calString[calString.length-1]=="0" || calString[calString.length-1]=="1" || calString[calString.length-1]=="2" || calString[calString.length-1]=="3" || calString[calString.length-1]=="4" || calString[calString.length-1]=="5" || calString[calString.length-1]=="6" || calString[calString.length-1]=="7" || calString[calString.length-1]=="8" || calString[calString.length-1]=="9" || calString[calString.length-1]=="%"){
            buildArr()
            }else{
                alert("cannot end on an opperator")
            }
            
        break;
        case  calString[calString.length-1]=="√" || calString[calString.length-1]=="X" || calString[calString.length-1]=="/":
            alert("You cannot follow one opperator after another")
            break;
        case calString.length>=14:
            alert("Max length reached")
        break;
        case opp=="C":
            calString=""
            const out = document.getElementById("screenText")
            out.innerHTML="0"
            // display()
        break;
        default:
            calString+=" "
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
        addOpperator(e.id)
    })
})


let calString = ""
let squareRootDone=false;
let divisionDone=false;
let multiplicationDone = false;
let additionDone = false;
let subtractionDone = false;

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

    mathArr = calString.split(" ")
    console.log(mathArr)
    for(let i = 0;i<mathArr.length;i++){
        if(mathArr[i]=="%"){
            mathArr[i]="/100"
        }

        if(mathArr[i]=="+"|| mathArr[i]=="-"){
            console.log(mathArr[i])
                mathArr.splice(i,1)
                console.log(mathArr)
                let a = parseFloat(mathArr[i])
                if(a<0){
                    
                    a=a*-1
                    a="+"+a
                    console.log(a)
                    mathArr[i]=a
                    console.log(mathArr)
                }
                



        }
        


    }


    
    squareRoot(mathArr)
}

function squareRoot(mathArr){
squareRootDone=true

 for(let i =0; i<=mathArr.length-1;i++){

    if(mathArr[i].includes("√")){
    
        let a = mathArr[i].replace("√", "")
        a = Math.sqrt(parseFloat(a))
        a=a.toString()
        // a="+"+a
        mathArr[i]=a
        console.log(mathArr)

        squareRootDone=false


 }


 
}
if(squareRootDone){
    console.log("done")
    division(mathArr)
 }else{
    console.log("rep")
    squareRoot(mathArr)
 }


}
function division(mathArr){
    divisionDone=true;
    for(let i =0; i<=mathArr.length-1;i++){

        if(mathArr[i].includes("/")){
        
            let a = mathArr[i].replace("/", "")
            a = parseFloat(a)
            console.log(a)
            let b = mathArr[i-1]
            console.log(b[0])
            let symbol=""
            if(b[0]=="X" || b[0]=="/"){
                console.log("nan")
                symbol=b[0]
                let x = ""
                for(let i =1;i<=b.length-1;i++){
                    x+=b[i]
                    console.log(x)
                }
                b=x
                console.log(b)
                mathArr[i-1]=b
                b=parseFloat(mathArr[i-1])

                divisionDone=false

            }

            console.log(b)
            console.log(typeof(b))
            let c = b / a
            c=c.toString()
            if(symbol!=""){
                c=symbol+c
            }
            mathArr[i]=c
            
            mathArr.splice(i-1,1)
            console.log(mathArr)
    
        }
    
    
     }

     if(divisionDone){
        console.log("done")
        multiplication(mathArr)
     }else{
        console.log("rep")
        division(mathArr)
     }
    
     
}

function multiplication(mathArr){
    multiplicationDone=true
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
            multiplicationDone=false
        }
    
    
     }


     if(multiplicationDone){
        console.log("done")
        addition(mathArr)
     }else{
        console.log("rep")
        multiplication(mathArr)
     }
     
    
}

function addition(mathArr){
    additionDone=true

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


            additionDone=false
        }else{
            
        }
    
    
     }



     if(additionDone){
        console.log("done")
        subtraction(mathArr)
     }else{
        console.log("rep")
        addition(mathArr)
     }
     
}

function subtraction(mathArr){
    subtractionDone=true
    console.log("sub")
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
            subtractionDone=false
    
        }
    
     }

     if(subtractionDone){
        console.log("done")
        finished(mathArr)
     }else{
        console.log("rep")
        subtraction(mathArr)
     }


   
}

function clearArr(mathArr){
    console.log("clear")
    for(let i =0; i<=mathArr.length-1;i++){
    
    if(mathArr[i]=='' || mathArr[i]==" "){
        console.log(mathArr[i])
        mathArr.splice(i,1)
    }
}
console.log(mathArr)

let tot =0
for(let i=0; i<mathArr.length;i++){
    tot+=parseFloat(mathArr[i])
}

calString=tot.toString()
display()
}

function finished(mathArr){
    console.log("fin")
if(mathArr.length==1){
    calString=mathArr[0]
    display()
}else{
    clearArr(mathArr)
    
  
}
}

function addOpperator(opp){

    switch(true){
        case opp=="X" || opp=="/" || opp=="%":
            if(calString.length==0){
                alert("You cannot start with opperator")
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
                console.log(opp)
                alert("cannot end on an opperator")
            }
            
        break;
        case  calString[calString.length-1]=="√" || calString[calString.length-1]=="X" || calString[calString.length-1]=="/":
            alert("You cannot follow one opperator after another")
            break;
        case calString.length>=14:
            alert("Max length reached")
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

const clearBtn = document.getElementById("C")

clearBtn.addEventListener("click", ()=>{
    calString=""
    const out = document.getElementById("screenText")
    out.innerHTML="0"
} )

let value1
button.setAttribute("disabled", " ")
handleClick=()=>{
    let username=document.getElementById("exampleInputEmail1").value;
    let button=document.getElementById("button");

    if( retrivedata.email=== username)
    { 
        document.getElementById("a").innerHTML = ' <b style="color:green">USERNAME is Valid<b>' 
        button.removeAttribute("disabled"," ")
       
    }
    else{
        document.getElementById("a").innerHTML = '<b style="color:red">USERNAME is Invalid<b>'
        button.setAttribute("disabled"," ")
    }
}

let value2
handleClick1=()=>{
    let password=document.getElementById("exampleInputPassword1").value;
    let button=document.getElementById("button");
    if( retrivedata.password=== password)
    {  
        document.getElementById("b").innerHTML = ' <b style="color:green">PASSWORD is Valid<b>'
        button.removeAttribute("disabled"," ")
       
    }
    else{
        document.getElementById("b").innerHTML = '<b style="color:red">PASSWORD is Invalid<b>'
        button.setAttribute("disabled"," ")
    }
    
}

buttonClick=()=>{
if(value1==1 && value2==1 )
{  
    button.removeAttribute("disabled"," ")
   
}
else{
    button.setAttribute("disabled"," ")
}
let username=document.getElementById("exampleInputEmail1").value;
let password=document.getElementById("exampleInputPassword1").value;
console.log(retrivedata.email)
console.log(retrivedata.password);
console.log(username)
console.log(password);

if( retrivedata.email=== username &&  retrivedata.password=== password){ 
console.log("hello")
button.removeAttribute("disabled"," ")
window.location.href="./hello.html"
}else{
    console.log("bye")
    button.setAttribute("disabled"," ")
}
}
let username=document.getElementById("exampleInputEmail1").value;
    let password=document.getElementById("exampleInputPassword1").value;
let retrive=sessionStorage.getItem("details");
let retrivedata=JSON.parse(retrive);
console.log("session storage")
console.log(retrivedata.email);
console.log(retrivedata.password);



    

const d = new Date();
console.log(d)
document.getElementById("date").innerHTML=new Date();
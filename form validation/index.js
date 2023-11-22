let  firstName;
let  middlename;
let  lastname;
let relation;
let rfirstname;
let rlastname;
let rmiddlename;
let fullname1;
let dateob;
let age1;
let placeob;
let country;
let q;
let b;
let l;
let a;
let e;
let s1;
let s2;


getFname=() => {
    let fname = document.getElementById("fname").value;
    let button = document.getElementById("button");

    if (fname.length > 3 && fname.length <20) {
        document.getElementById("fnamev").innerHTML ='<b style="color:green">Name is Valid</b>'
        button.removeAttribute("disabled", " ")
        firstName=1
    }
    else {
    
        document.getElementById("fnamev").innerHTML ='<b style="color:red">Name is Invalid</b>'
        button.setAttribute("disabled", " ")
        firstName=0
    }
} 
getMname=() => {
    let mname = document.getElementById("mname").value;
    let button = document.getElementById("button");

    if (mname.length > 0 && mname.length <10) {
        document.getElementById("mnamev").innerHTML ='<b style="color:green">Name is Valid</b>'
        button.removeAttribute("disabled", " ")
        middlename=1
    }
    else {
    
        document.getElementById("mnamev").innerHTML ='<b style="color:red">Name is Invalid</b>'
        button.setAttribute("disabled", " ")
        middlename=0
    }
} 

getLname=() => {
    let lname = document.getElementById("lname").value;
    let button = document.getElementById("button");

    if (lname.length > 0 && lname.length <10) {
        document.getElementById("lnamev").innerHTML ='<b style="color:green">Name is Valid</b>'
        button.removeAttribute("disabled", " ")
        lastname=1
    }
    else {
    
        document.getElementById("lnamev").innerHTML ='<b style="color:red">Name is Invalid</b>'
        button.setAttribute("disabled", " ")
        lastname=0
        
    }
} 

getOptions=() => {
    let relationtype = document.getElementById("relationtype").value;
    let button = document.getElementById("button");

    if (relationtype!== " ") {
        document.getElementById("options").innerHTML ='<b style="color:green">Valid</b>'
        button.removeAttribute("disabled", " ")
        relation=1
    }
    else {
        relation=0
    
        document.getElementById("options").innerHTML ='<b style="color:red"> Invalid</b>'
        button.setAttribute("disabled", " ")
        
    }
} 

getRfname=() => {
    let rfname = document.getElementById("rfname").value;
    let button = document.getElementById("button");

    if (rfname.length > 3 && rfname.length <20) {
        document.getElementById("rfnamev").innerHTML ='<b style="color:green">Name is Valid</b>'
        button.removeAttribute("disabled", " ")
        rfirstname=1
    }
    else {
    
        document.getElementById("rfnamev").innerHTML ='<b style="color:red">Name is Invalid</b>'
        button.setAttribute("disabled", " ")
        rfirstname=0
    }
}

getRmane=() => {
    let rmname = document.getElementById("rmname").value;
    let button = document.getElementById("button");

    if (rmname.length > 0 && rmname.length <20) {
        document.getElementById("rmnamev").innerHTML ='<b style="color:green">Name is Valid</b>'
        button.removeAttribute("disabled", " ")
        rmiddlename=1
    }
    else {
    
        document.getElementById("rmnamev").innerHTML ='<b style="color:red">Name is Invalid</b>'
        button.setAttribute("disabled", " ")
        rmiddlename=0
    }
}

getRlname=() => {
    let rlname = document.getElementById("rlname").value;
    let button = document.getElementById("button");

    if (rlname.length > 0 && rlname.length <20) {
        document.getElementById("rlnamev").innerHTML ='<b style="color:green">Name is Valid</b>'
        button.removeAttribute("disabled", " ")
        rlastname=1
    }
    else {
    
        document.getElementById("rlnamev").innerHTML ='<b style="color:red">Name is Invalid</b>'
        button.setAttribute("disabled", " ")
        rlastname=0
        
    }
}
getFullname=() => {
    let fullname = document.getElementById("fullname").value;
    let button = document.getElementById("button");

    if (fullname.length > 3 && fullname.length <30) {
        document.getElementById("fullnameA").innerHTML ='<b style="color:green">Name is Valid</b>'
        button.removeAttribute("disabled", " ")
        fullname1=1
    }
    else {
    
        document.getElementById("fullnameA").innerHTML ='<b style="color:red">Name is Invalid</b>'
        button.setAttribute("disabled", " ")
        fullname1=0
        
    }
} 

getDob=() => {
    let dob = document.getElementById("dob").value;
    let button = document.getElementById("button");
    

    if (dob!==" ") {
        document.getElementById("dateofbirth").innerHTML ='<b style="color:green">Valid</b>'
        button.removeAttribute("disabled", " ")
        dateob=1
    }
    else {
    
        document.getElementById("dateofbirth").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        dateob=0
    }
} 
getAge=() => {
    let age = document.getElementById("age").value;
    let button = document.getElementById("button");

    if (age  > 0 && age < 1000) {
        document.getElementById("agev").innerHTML ='<b style="color:green">Valid</b>'
        button.removeAttribute("disabled", " ")
        age1=1
    }
    else {
    
        document.getElementById("agev").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        age1=0
        
    }
}
getPob=() => {
    let pob = document.getElementById("pob").value;
    let button = document.getElementById("button");

    if (pob.length > 3 && pob.length <100) {
        document.getElementById("pobv").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        placeob=1
    }
    else {
    
        document.getElementById("pobv").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        placeob=0
        
    }
} 
getCob=() => {
    let cob = document.getElementById("cob").value;
    let button = document.getElementById("button");

    if (cob.length > 3 && cob.length <100) {
        document.getElementById("cobv").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        country=1
    }
    else {
    
        document.getElementById("cobv").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        country=0
        
    }
} 
getQ=() => {
    let qualification = document.getElementById("qualification").value;
    let button = document.getElementById("button");

    if (qualification.length > 3 && qualification.length <100) {
        document.getElementById("qv").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        q=1
    }
    else {
    
        document.getElementById("qv").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        q=0
        
    }
}
getbg=() => {
    let bg = document.getElementById("bg").value;
    let button = document.getElementById("button");

    if (bg.length > 0 && bg.length <4) {
        document.getElementById("bloodg").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        b=1
    }
    else {
    
        document.getElementById("bloodg").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        b=0
        
    }
} 
getlno=() => {
    let lno = document.getElementById("lno").value;
    let button = document.getElementById("button");

    if (lno.length == 10) {
        document.getElementById("llno").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        l=1
    }
    else {
    
        document.getElementById("llno").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        l=0
        
    }
} 


getappno=() => {
    let appno = document.getElementById("appno").value;
    let button = document.getElementById("button");

    if (appno.length == 10) {
        document.getElementById("apno").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        a=1
    }
    else {
    
        document.getElementById("apno").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        a=0
        
    }
} 
getenum=() => {
    let eno = document.getElementById("eno").value;
    let button = document.getElementById("button");

    if (eno.length == 10) {
        document.getElementById("enum").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        e=1
    }
    else {
    
        document.getElementById("enum").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        e=0
        
    }
} 
getscar=() => {
    let identification1 = document.getElementById("identification1").value;
    let button = document.getElementById("button");

    if (identification1.length > 3 && identification1.length <1000) {
        document.getElementById("scar").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        s1=1
    }
    else {
    
        document.getElementById("scar").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        s1=0
        
    }
}
getscar2=() => {
    let identification2 = document.getElementById("identification2").value;
    let button = document.getElementById("button");

    if (identification2.length > 3 && identification2.length <1000) {
        document.getElementById("scar2").innerHTML ='<b style="color:green"> Valid</b>'
        button.removeAttribute("disabled", " ")
        s2=1
    }
    else {
    
        document.getElementById("scar2").innerHTML ='<b style="color:red">Invalid</b>'
        button.setAttribute("disabled", " ")
        s2=0
        
    }
}

const handleSubmit=()=>{
    let button = document.getElementById("button");
    if ( firstName && middlename &&  lastname && relation && rfirstname && rlastname && rmiddlename && fullname1 && dateob && age1 &&  placeob && country && q && b && l && a && e && s1 && s2) {  
        button.removeAttribute("disabled", " ")  
        window.location.href="./sample.html"
    }
    else {    
        button.setAttribute("disabled", " ")
      }
}


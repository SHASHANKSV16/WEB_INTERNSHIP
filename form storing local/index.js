let FormSubmit = () =>{
    let fname=document.getElementById("fname").value
    let mname=document.getElementById("lname").value
    let lname=document.getElementById("mname").value
    let select=document.getElementById("relationtype").value
    let rfname=document.getElementById("rfname").value
    let rmname=document.getElementById("rmname").value
    let rlname=document.getElementById("rlname").value
    let fullname=document.getElementById("fullname").value
    let gender =document.gender.gender.value;
    let dob=document.getElementById("dob").value
    let age=document.getElementById("age").value
    let pob=document.getElementById("pob").value
    let cob=document.getElementById("cob").value
    let qualification=document.getElementById("qualification").value
    let bg=document.getElementById("bg").value
    let lno=document.getElementById("lno").value
    let email=document.getElementById("email").value
    let appno=document.getElementById("appno").value
    let eno=document.getElementById("eno").value
    let identification1=document.getElementById("identification1").value
    let identification2=document.getElementById("identification2").value

    let obj={
        firstName: fname,
        lastName : lname,
        middleName : mname,
        relation:  select,
        relationFirstName: rfname,
        relationMiddleName: rmname,
        relationLastName: rlname,
        fullName: fullname,
        gender:gender,
        dateOfBirth: dob,
        age: age,
        placeOfBirth: pob,
        countryOfBirth: cob,
        qualification: qualification,
        bloodGroup: bg,
        lineNumber: lno,
        email: email,
        applicationNo: appno,
        emergencyno: eno,
        identificationType1: identification1,
        identificationType2: identification2,
    }
    let afterConvertString = JSON.stringify(obj)
    console.log(afterConvertString);

    let save=localStorage.setItem("details",afterConvertString);
    let retrive=localStorage.getItem("details");
    let retriveData=JSON.parse(retrive);
    console.log(retriveData.firstName);
    console.log(retriveData.lastName);
    console.log(retriveData.middleName);
    console.log(retriveData.relation);
    console.log(retriveData.relationFirstName);
    console.log(retriveData.relationMiddleName);
    console.log(retriveData.relationLastName);
    console.log(retriveData.gender);
    console.log(retriveData.dateOfBirth);
    console.log(retriveData.age);
    console.log(retriveData.placeOfBirth);
    console.log(retriveData.countryOfBirth);
    console.log(retriveData.bloodGroup);
    console.log(retriveData.lineNumber);
    console.log(retriveData.email);
    console.log(retriveData.applicationNo);
    console.log(retriveData.emergencyno);
    console.log(retriveData.identificationType1);
    console.log(retriveData.identificationType2);
    

    let save2=sessionStorage.setItem("details",afterConvertString)
    let retrive2=sessionStorage.getItem("details");
    let retrivedata2=JSON.parse(retrive2);
    console.log("session storage")
    console.log(retrivedata2.firstName);
    console.log(retrivedata2.lastName);
    console.log(retrivedata2.middleName);
    console.log(retrivedata2.relation);
    console.log(retrivedata2.relationFirstName);
    console.log(retrivedata2.relationMiddleName);
    console.log(retrivedata2.relationLastName);
    console.log(retrivedata2.gender);
    console.log(retrivedata2.dateOfBirth);
    console.log(retrivedata2.age);
    console.log(retrivedata2.placeOfBirth);
    console.log(retrivedata2.countryOfBirth);
    console.log(retrivedata2.bloodGroup);
    console.log(retrivedata2.lineNumber);
    console.log(retrivedata2.email);
    console.log(retrivedata2.applicationNo);
    console.log(retrivedata2.emergencyno);
    console.log(retrivedata2.identificationType1);
    console.log(retrivedata2.identificationType2);

    


}
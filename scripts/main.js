formValidation = () =>{
    var fname = document.querySelector("#fname").value
    var sname = document.querySelector("#sname").value 
    var phone = document.querySelector("#phone").value
    var city = document.querySelector("#city").value
    var house = document.querySelector("#house").value

    if(fname == '' || fname == null){
        alert("First name can not be blank")
        return false
    }else if(sname == '' || sname == null){
        alert("second name can not be blank")
        return false
    }else if(phone.length < 10){
        alert("phone number is invalid")
        return false
    }else if(city == '' || city == null ){
        alert("City can not be empty")
        return false
    }else if (house == '' || house == null){
        alert("Apartment can not be empty")
        return false
    }else{
        return true
    }
    
    
}
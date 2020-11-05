// form validation
function formValidation(){
    var form = document.forms["contactForm"]
    var name = form["name"].value
    var email = form["email"].value
    var subject = form["subject"].value
    var message = form["message"].value

    //error for empty input boxes
    if(name == ""){
        document.getElementById("name").style.border = "red 2px solid"
    }
    else{
        document.getElementById("name").style.border = "-1px solid"
    }

    if(email == ""){
        document.getElementById("email").style.border = "red 2px solid"
    }
    else{
        document.getElementById("email").style.border = "-1px solid"
    }

    if(subject == ""){
        document.getElementById("subject").style.border = "red 2px solid"
    }
    else{
        document.getElementById("subject").style.border = "-1px solid"
    }

    if(message == ""){
        document.getElementById("message").style.border = "red 2px solid"
    }
    else{
        document.getElementById("message").style.border = "-1px solid"
    }


    if(name == "" || email == "" || subject == "" || message == "" ){
        return false
    }
    else{
        alert("Message sent sucessfully")

        form.reset()
    }
}

//button event listener
var btn = document.getElementById("buSubmit")

btn.addEventListener("click", function(){

    event.preventDefault()

    formValidation()
})
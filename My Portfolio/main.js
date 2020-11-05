// form validation
function formValidation(){

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
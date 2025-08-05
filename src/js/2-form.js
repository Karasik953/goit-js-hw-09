const form =document.querySelector(".feedback-form  ")

let formData = {
    email: "",
    message: "",
}

const STORAGE_KEY = 'feedback-form-state';

const saved = localStorage.getItem(STORAGE_KEY)
if (saved) {
    const data = JSON.parse(saved)
    if (data.email) {
        formData.email = data.email
        form.elements.email.value = data.email;
    }
    if (data.message) {
        formData.message = data.message
        form.elements.message.value = data.message
    }
}

form.addEventListener("input", ()=> {
    formData.email = form.elements.email.value.trim()
    formData.message = form.elements.message.value.trim()

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

})


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(formData.email === "" || formData.message === "") {
        alert ("Заповни всі поля")
        return;
    }
    console.log("Відправка,", formData);


    form.reset()
    localStorage.removeItem(STORAGE_KEY)
    formData.email = ""
    formData.message = ""
})


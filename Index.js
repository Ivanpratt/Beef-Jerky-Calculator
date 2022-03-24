console.log("Working")

const slider = document.getElementById("slider")




slider.addEventListener('input', () => {
    document.getElementById("meatmanualinput").value = slider.value
})

console.log("Working")

const jerkyObject = {
    Smokiness: "",
    Spiciness: "",
    Sweetness: "",
    Saltiness: "",
    Toughness: "",
    Shelflife: "",
    Appliance: "",
    Meat: "",
    Baseingredients: "",
    Postingredients: "",
    Spice: "",
    Sugars: ""
}

let submitbutton1 = document.getElementById("submitButton")
const slider = document.getElementById("slider")



//event listeners to change the Jerky Object
smokinessform.addEventListener('change', () => {
    let smokiness = document.forms.smokiness.elements.smokiness.value
    jerkyObject.Smokiness = smokiness
    console.log(jerkyObject)
})

spicinessform.addEventListener('change', () => {
    let spiciness = document.forms.spiciness.elements.spiciness.value
    jerkyObject.Spiciness = spiciness
    console.log(jerkyObject)
})

sweetnessform.addEventListener('change', () => {
    let sweetness = document.forms.sweetness.elements.sweetness.value
    jerkyObject.Sweetness = sweetness
    console.log(jerkyObject)
})

saltinessform.addEventListener('change', () => {
    let saltiness = document.forms.saltiness.elements.saltiness.value
    jerkyObject.Saltiness = saltiness
    console.log(jerkyObject)
})

toughnessform.addEventListener('change', () => {
    let toughness = document.forms.toughness.elements.toughness.value
    jerkyObject.Toughness = toughness
    console.log(jerkyObject)
})

shelflifeform.addEventListener('change', () => {
    let shelflife = document.forms.shelflife.elements.shelflife.value
    jerkyObject.Shelflife = shelflife
    console.log(jerkyObject)
})

applianceform.addEventListener('change', () => {
    let appliance = document.forms.appliance.elements.appliance.value
    jerkyObject.Appliance = appliance
    console.log(jerkyObject)
})

meatform.addEventListener('change', () => {
    let meat = document.forms.meat.elements.meat.value
    jerkyObject.Meat = meat
    console.log(jerkyObject)
})

baseingredientsform.addEventListener('change', () => {
    let myarray = Array.from(document.querySelectorAll("input[type=checkbox][name=baseingredients]:checked"), e => e.value);
    jerkyObject.Baseingredients = myarray
    console.log(jerkyObject)
})




//slider event listener to change the meat manual input
slider.addEventListener('input', () => {
    document.getElementById("meatmanualinput").value = slider.value
})



console.log("Working")

let jerkyObject = {
    Smokiness: "",
    Spiciness: "",
    Sweetness: "",
    Saltiness: "",
    Toughness: "",
    Shelflife: "",
    Appliance: "",
    Meat: "",
    Baseingredients: [],
    Postingredients: [],
    Spice: [],
    Sugar: []
}

let submitbutton1 = document.getElementById("submitButton")
let resetbutton = document.getElementById("resetButton")
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

postingredientsform.addEventListener('change', () => {
    let myarray = Array.from(document.querySelectorAll("input[type=checkbox][name=postingredients]:checked"), e => e.value);
    jerkyObject.Postingredients = myarray
    console.log(jerkyObject)
})

spiceform.addEventListener('change', () => {
    let myarray = Array.from(document.querySelectorAll("input[type=checkbox][name=spice]:checked"), e => e.value);
    jerkyObject.Spice = myarray
    console.log(jerkyObject)
})

sugarform.addEventListener('change', () => {
    let myarray = Array.from(document.querySelectorAll("input[type=checkbox][name=sugar]:checked"), e => e.value);
    jerkyObject.Sugar = myarray
    console.log(jerkyObject)
})

//resetbutton. Unchecks all checked inputs, then re-defines JerkyObject to empty again.
resetbutton.addEventListener('click', () => {
    let allcheckboxes = Array.from(document.querySelectorAll("input[type=checkbox]:checked, input[type=radio]:checked"))
    console.log(allcheckboxes)
    for (i = 0; i < allcheckboxes.length; i++){
        allcheckboxes[i].checked = false;
    }
    jerkyObject = {
        Smokiness: "",
        Spiciness: "",
        Sweetness: "",
        Saltiness: "",
        Toughness: "",
        Shelflife: "",
        Appliance: "",
        Meat: "",
        Baseingredients: [],
        Postingredients: [],
        Spice: [],
        Sugar: []
    }
})




//slider event listener to change the meat manual input
slider.addEventListener('input', () => {
    document.getElementById("meatmanualinput").value = slider.value
})



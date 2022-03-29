console.log("Working")

let bowlvariable = 0
let knifevariable = 0
let previousMultiplier = 1

let jerkyObject = {
    Smokiness: "",
    Spiciness: "",
    Sweetness: "",
    Saltiness: "",
    Toughness: "",
    Shelflife: "",
    Appliance: "",
    Meat: [],
    Baseingredients: [],
    Postingredients: [],
    Spice: [],
    Sugar: [],
    Items: []
}

let submitbutton1 = document.getElementById("submitButton")
let submitbutton2 = document.getElementById("submitButton2")
let resetbutton = document.getElementById("resetButton")
const slider = document.getElementById("slider")
let meatmanualinput = document.getElementById("meatmanualinput")
let preparationdiv = document.getElementById("preparationdiv")
let listcolumndivbase = document.getElementById("listcolumndivbase")

let updateList = function(){

    for (const array of jerkyObject.Meat){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value

    }

    for (const array of jerkyObject.Baseingredients){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value
    }

    for (const array of jerkyObject.Postingredients){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value

    }

    for (const array of jerkyObject.Spice){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value
        

    }

    for (const array of jerkyObject.Sugar){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value

    }

    if (bowlvariable === 1) {
    if (meatmanualinput.value <= 2){
        jerkyObject.Items[0][2] = "Small"
    } else if (meatmanualinput.value <= 5){
        jerkyObject.Items[0][2] = "Medium"
    } else if (meatmanualinput.value <= 10){
        jerkyObject.Items[0][2] = "Large"
    } else {
        jerkyObject.Items[0][2] = "Extremely Large"
    }
    }



    if (meatmanualinput.value <= 8){
        jerkyObject.Appliance[0][2] = "Medium"
    } else if (meatmanualinput.value <= 15){
        jerkyObject.Appliance[0][2] = "Large"
    } else{
        jerkyObject.Appliance[0][2] = "Extremely Large"
    }
    


    console.log(jerkyObject)
    submitbutton1Function()
    previousMultiplier = meatmanualinput.value
}

const submitbutton1Function = function(){
    listcolumndivbase.innerHTML = '';
    preparationdiv.innerHTML = '';

    for (const item of jerkyObject.Meat){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(2)} ${item[2]}`)
        listcolumndivbase.appendChild(itemptag)
    }

    
    for (const item of jerkyObject.Baseingredients){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(2)} ${item[2]}`)
        listcolumndivbase.appendChild(itemptag)
    }

    for (const item of jerkyObject.Postingredients){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(2)} ${item[2]}`)
        listcolumndivbase.appendChild(itemptag)
    }

    for (const item of jerkyObject.Spice){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(3)} ${item[2]}`)
        listcolumndivbase.appendChild(itemptag)
    }

    for (const item of jerkyObject.Sugar){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(2)} ${item[2]}`)
        listcolumndivbase.appendChild(itemptag)
    }

    for (const item of jerkyObject.Items){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[1].toFixed()} ${item[2]} ${item[0]}`)
        preparationdiv.appendChild(itemptag)
    }

    for (const item of jerkyObject.Appliance){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[1].toFixed()} ${item[2]} ${item[0]}(s)`)
        preparationdiv.appendChild(itemptag)
    }

}

const updateAllForms = function() {
    let smokiness = document.forms.smokiness.elements.smokiness.value
    jerkyObject.Smokiness = smokiness

    let spiciness = document.forms.spiciness.elements.spiciness.value
    jerkyObject.Spiciness = spiciness

    let sweetness = document.forms.sweetness.elements.sweetness.value
    jerkyObject.Sweetness = sweetness

    let saltiness = document.forms.saltiness.elements.saltiness.value
    jerkyObject.Saltiness = saltiness

    let toughness = document.forms.toughness.elements.toughness.value
    jerkyObject.Toughness = toughness

    let shelflife = document.forms.shelflife.elements.shelflife.value
    jerkyObject.Shelflife = shelflife

    let myappliancearray = Array.from(document.querySelectorAll("input[type=radio][name=appliance]:checked"), e => e.value.split(','));
    for (const item of myappliancearray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Appliance = myappliancearray

    let mymeatarray = Array.from(document.querySelectorAll("input[type=radio][name=meat]:checked"), e => e.value.split(','));
    for (const item of mymeatarray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Meat = mymeatarray

    let mybasearray = Array.from(document.querySelectorAll("input[type=checkbox][name=baseingredients]:checked"), e => e.value.split(','));
    for (const item of mybasearray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Baseingredients = mybasearray

    let mypostarray = Array.from(document.querySelectorAll("input[type=checkbox][name=postingredients]:checked"), e => e.value.split(','));
    for (const item of mypostarray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Postingredients = mypostarray

    let myspicearray = Array.from(document.querySelectorAll("input[type=checkbox][name=spice]:checked"), e => e.value.split(','));
    for (const item of myspicearray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Spice = myspicearray

    let mysugararray = Array.from(document.querySelectorAll("input[type=checkbox][name=sugar]:checked"), e => e.value.split(','));
    for (const item of mysugararray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Sugar = mysugararray


    console.log(jerkyObject)
    previousMultiplier = 1
}


//event listeners to change the Jerky Object
smokinessform.addEventListener('change', () => {
    updateAllForms()
    
})

spicinessform.addEventListener('change', () => {
    updateAllForms()
})

sweetnessform.addEventListener('change', () => {
    updateAllForms()
})

saltinessform.addEventListener('change', () => {
    updateAllForms()
})

toughnessform.addEventListener('change', () => {
    updateAllForms()
})

shelflifeform.addEventListener('change', () => {
    updateAllForms()
})

applianceform.addEventListener('change', () => {
    updateAllForms()
})

meatform.addEventListener('change', () => {
    updateAllForms()
})

baseingredientsform.addEventListener('change', () => {
    if (bowlvariable === 0){
        bowlvariable = 1
        jerkyObject.Items.push(["Bowl", 1, "Small"])
    }
    updateAllForms()
})

postingredientsform.addEventListener('change', () => {
    updateAllForms()
})

spiceform.addEventListener('change', () => {
    updateAllForms()
})

sugarform.addEventListener('change', () => {
    updateAllForms()
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
        Meat: [],
        Baseingredients: [],
        Postingredients: [],
        Spice: [],
        Sugar: [],
        Items:[]
    }
    bowlvariable = 0
})



submitbutton1.addEventListener('click', () => {
    submitbutton1Function()
})







//slider event listener to change the meat manual input
slider.addEventListener('input', () => {
    meatmanualinput.value = slider.value
    updateList()
})

meatmanualinput.addEventListener('change', ()=> {
    updateList()
})

submitbutton2.addEventListener('click', () => {
    updateList()
})



console.log("Working")

let bowlvariable = 0
let knifevariable = 0
let jerkyGun = 0
let previousMultiplier = 1

let smokinessMultiplier = 0
let spicinessMultiplier = 0
let saltinessMultiplier = 0
let sweetnessMultiplier = 0
let toughnessMultiplier = 0
let shelflifeMultiplier = 0

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
    Items: [["Bowl", 1, "Small"], ["Plastic Wrap", 1, "Feet"], ["Knife", 1, "Medium"], ["Cutting Board", 1, "Small"], ["Jerky Gun", 1, "Medium"], ["Preparation Time", 1, "Hours"]]
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
        let originalValue = array[1] * spicinessMultiplier
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value
        spicinessMultiplier = 1

    }

    for (const array of jerkyObject.Sugar){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value

    }

    //jerkyObject.Items[5][1] = makeTime + cookTime + marinateTime 

    if (bowlvariable === 1) {
    if (meatmanualinput.value <= 2){
        jerkyObject.Items[0][2] = "Small"
        jerkyObject.Items[1][1] = 1
    } else if (meatmanualinput.value <= 5){
        jerkyObject.Items[0][2] = "Medium"
        jerkyObject.Items[1][1] = 3
    } else if (meatmanualinput.value <= 10){
        jerkyObject.Items[0][2] = "Large"
        jerkyObject.Items[1][1] = 6
    } else {
        jerkyObject.Items[0][2] = "Extremely Large"
        jerkyObject.Items[1][1] = 10
    }
    }


    if(jerkyObject.Appliance.length !== 0){
    if (meatmanualinput.value <= 8){
        jerkyObject.Appliance[0][2] = "Medium"
    } else if (meatmanualinput.value <= 15){
        jerkyObject.Appliance[0][2] = "Large"
    } else{
        jerkyObject.Appliance[0][2] = "Extremely Large"
    }
    }
    
    if (knifevariable === 1) {
        if (meatmanualinput.value <= 2){
            jerkyObject.Items[2][2] = "Small"
            jerkyObject.Items[3][2] = "Small"
        } else if (meatmanualinput.value <= 5){
            jerkyObject.Items[2][2] = "Medium"
            jerkyObject.Items[3][2] = "Medium"
        } else if (meatmanualinput.value <= 10){
            jerkyObject.Items[2][2] = "Large"
            jerkyObject.Items[3][2] = "Large"
        } else {
            jerkyObject.Items[2][2] = "Extremely Large"
            jerkyObject.Items[3][2] = "Extremely Large"
        }
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

    for (let i = 0; i < 1; i++){
        if (bowlvariable === 1){
            let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[0][1].toFixed()} ${jerkyObject.Items[0][2]} ${jerkyObject.Items[0][0]}`)
        preparationdiv.appendChild(itemptag)

        itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[1][1].toFixed()} ${jerkyObject.Items[1][2]} ${jerkyObject.Items[1][0]}`)
        preparationdiv.appendChild(itemptag)
        }
        if (knifevariable === 1){
            let itemptag = document.createElement("p");
            itemptag.classList.add("listItem")
            itemptag.innerHTML = (`${jerkyObject.Items[2][1].toFixed()} ${jerkyObject.Items[2][2]} ${jerkyObject.Items[2][0]}`)
            preparationdiv.appendChild(itemptag)

            itemptag = document.createElement("p");
            itemptag.classList.add("listItem")
            itemptag.innerHTML = (`${jerkyObject.Items[3][1].toFixed()} ${jerkyObject.Items[3][2]} ${jerkyObject.Items[3][0]}`)
            preparationdiv.appendChild(itemptag)
        }
        if (jerkyGun === 1){
            let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[4][1].toFixed()} ${jerkyObject.Items[4][2]} ${jerkyObject.Items[4][0]}`)
        preparationdiv.appendChild(itemptag)
        }

        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[5][1].toFixed()} ${jerkyObject.Items[5][2]} ${jerkyObject.Items[5][0]}`)
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

    if (document.querySelectorAll("input[type=radio][value='Ground meats,1,lbs']:checked").length > 0){
        jerkyGun = 1
    } else {
        jerkyGun = 0
    }

    if (document.querySelectorAll("input[type=checkbox][value='Ghost Peppers,0.076,Medium Peppers']:checked").length > 0 || document.querySelectorAll("input[type=checkbox][value='Carolina Reaper Peppers,0.046,Medium Peppers']:checked").length > 0 || document.querySelectorAll("input[type=checkbox][value='Habanero Peppers,0.23,Medium Peppers']:checked").length > 0 || document.querySelectorAll("input[type=checkbox][value='Jalapeno Peppers,0.7,Medium Peppers']:checked").length > 0 || ((document.querySelectorAll("input[type=radio][name=meat]:checked").length > 0) && (document.querySelectorAll("input[type=radio][value='Ground meats,1,lbs']:checked").length === 0))){
        knifevariable = 1
    } else {
        knifevariable = 0
    }

    if(jerkyObject.Smokiness === "Genuine"){
        smokinessMultiplier = 5
    } else if (jerkyObject.Smokiness === "Heavy"){
        smokinessMultiplier = 3
    } else if (jerkyObject.Smokiness === "Light"){
        smokinessMultiplier = 1
    } else if (jerkyObject.Smokiness === "None"){
        smokinessMultiplier = 0
    }

    if(jerkyObject.Spiciness === "Hellfire"){
        spicinessMultiplier = 3
    } else if (jerkyObject.Spiciness === "Scorching"){
        spicinessMultiplier = 1
    } else if (jerkyObject.Spiciness === "White"){
        spicinessMultiplier = 0.5
    } else if (jerkyObject.Spiciness === "None"){
        spicinessMultiplier = 0
    }


    if(jerkyObject.Saltiness === "Cured"){
        saltinessMultiplier = 3
    } else if (jerkyObject.Saltiness === "Moderate"){
        saltinessMultiplier = 2
    } else if (jerkyObject.Saltiness === "Light"){
        saltinessMultiplier = 1
    } else if (jerkyObject.Saltiness === "None"){
        saltinessMultiplier = 0
    }

    if(jerkyObject.Sweetness === "Sweet"){
        sweetnessMultiplier = 2
    } else if (jerkyObject.Sweetness === "Mild"){
        sweetnessMultiplier = 1
    } else if (jerkyObject.Sweetness === "None"){
        sweetnessMultiplier = 0
    }

    if(jerkyObject.Toughness === "Tough"){
        toughnessMultiplier = 2
    } else if (jerkyObject.Toughness === "Standard"){
        toughnessMultiplier = 1
    } else if (jerkyObject.Toughness === "Tender"){
        toughnessMultiplier = 0
    }

    if(jerkyObject.Shelflife === "Years++"){
        shelflifeMultiplier = 3
    } else if (jerkyObject.Shelflife === "~Month"){
        shelflifeMultiplier = 2
    } else if (jerkyObject.Shelflife === "2 Weeks"){
        shelflifeMultiplier = 1
    } else if (jerkyObject.Shelflife === "Don't Care"){
        shelflifeMultiplier = 0
    }
    

    console.log(jerkyObject)
   // console.log(makeTime)
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

    if (document.querySelectorAll("input[type=checkbox][name=baseingredients]:checked").length > 0){
        bowlvariable = 1
    } else {
        bowlvariable = 0
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
        Items: [["Bowl", 1, "Small"], ["Plastic Wrap", 1, "Feet"], ["Knife", 1, "Medium"], ["Cutting Board", 1, "Small"], ["Jerky Gun", 1, "Medium"], ["Preparation Time", 1, "Hours"]]
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



//Oreo Biscuits
const oreoBiscuitTarget = document.querySelector('.oreoBiscuits')
fetch('data/data.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.oreoBiscuits.forEach(function (item) {
        oreoBiscuitTarget.innerHTML += 
         `<tr><td class="centre">${item.flavour}</td>
            <td class="centre">${item.maya}</td>
            <td class="centre">${item.connor}</td></tr>`
    })
})

//Non Oreo Biscuits
const nonOreoBiscuitTarget = document.querySelector('.nonOreoBiscuits')
fetch('data/data.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.nonOreoBiscuits.forEach(function (item) {
        nonOreoBiscuitTarget.innerHTML += 
         `<tr><td class="centre">${item.flavour}</td>
            <td class="centre">${item.maya}</td>
            <td class="centre">${item.connor}</td></tr>`
    })
})

//Homemade Oreos
const homemadeOreosTarget = document.querySelector('.homemadeOreos')
fetch('data/data.json').then(function (response) {
    return response.json()
}).then(function (data) {
    let counter = 1
    data.homemadeOreos.forEach(function (item) {
        homemadeOreosTarget.innerHTML += 
         `<tr><td class="centre hover" onclick="showOreos('oreoPopup${counter}')"> 
                    <div class="popup">${item.flavour}
                        <span class="popuptext oPopup" id="oreoPopup${counter}">
                            <img src="${item.image}" alt="${item.alt}" class="size">
                            <p>${item.description}</p>
                        </span>
                    </div> 
            </td>
            <td class="centre">${item.maya}</td>
            <td class="centre">${item.connor}</td></tr>`
         counter += 1
    })
})

//Homemade Oreo Milkshakes
const homemadeOreoMilkshakesTarget = document.querySelector('.homemadeOreoMilkshakes')
fetch('data/data.json').then(function (response) {
    return response.json()
}).then(function (data) {
    let counter = 1
    data.homemadeOreoMilkshakes.forEach(function (item) {
        homemadeOreoMilkshakesTarget.innerHTML += 
         `<tr><td class="centre hover" onclick="showOreos('milkshakePopup${counter}')"> 
                    <div class="popup">${item.flavour}
                        <span class="popuptext mPopup" id="milkshakePopup${counter}">
                            <img src="${item.image}" alt="${item.alt}" class="size">
                            <p>${item.description}</p>
                        </span>
                    </div> 
            </td>
            <td class="centre">${item.iceCream}</td>
            <td class="centre">${item.maya}</td>
            <td class="centre">${item.connor}</td></tr>`
         counter += 1
    })
})

//Other Oreos
const otherOreoTarget = document.querySelector('.otherOreos')
fetch('data/data.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.otherOreos.forEach(function (item) {
        otherOreoTarget.innerHTML += 
         `<tr><td class="centre">${item.flavour}</td>
            <td class="centre">${item.maya}</td>
            <td class="centre">${item.connor}</td></tr>`
    })
})
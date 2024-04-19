//Oreo Biscuits
const oreoBiscuitTarget = document.querySelector('.oreoBisuits')
fetch('data/data.json').then(function (response) {
    return response.json()
}).then(function (data) {
    let counter = 1
    data.oreoBiscuits.forEach(function (item) {
        oreoBiscuitTarget.innerHTML += 
         `<tr><td class="centre">${item.flavour}</td>
            <td class="centre">${item.maya}</td>
            <td class="centre">${item.connor}</td></tr>`
         counter += 1
    })
})
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) // Função anonima que é passado e retornado somente um valor
    .then( states => {
        const ordenedStates = states.sort( function(a,b) {
            let nameA = a.nome.toUpperCase();
            let nameB = b.nome.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
    
            return 0;
        } )
        for(const state of ordenedStates){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const stateValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateValue}/municipios`
    
    citySelect.innerHTML = `<option value="">Selecione uma cidade</option>`
    citySelect.disabled = true

    fetch( url )
    .then( res => res.json() )
    .then( cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}

function handleSelectedItem(event){
    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    const alreadySelected =  selectedItems.findIndex( item => item == itemId )

    if(alreadySelected != -1){
        selectedItems.splice(alreadySelected, 1);
    }else {
        selectedItems.splice(alreadySelected, 0, itemId)
    }

    collectedItems.value = selectedItems
}

populateUFs()

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


const COHORT = '2405-FTB-ET-WEB-PT';
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
    parties:[],
};

let partyList = document.getElementById('partyList');

const addPartyForm = document.querySelector('#addArtist');
addPartyForm.addEventListener("submit",addParty);

async function getAPIData(){
    const response = await fetch(API_URL);
    const {data} = await response.json();
    data.forEach((element) => {
        state.parties.push(element);
    })
}

async function render(){
    await getAPIData();
    renderParties();
}

render();

//getAPIData();

async function renderParties(){
    console.log(partyList);
    for(const index in state.parties){
        let div = document.createElement('div');
        div.setAttribute('class','subcontainer');
        let button = document.createElement('button');
        button.innerHTML = 'Delete My Party Here';
        //button.addEventListener("submit",somethinghere);
        let li = document.createElement('li');
        li.innerHTML = `
        <h2>Party Name: ${state.parties[index].name}</h2>
        <h3>Location: ${state.parties[index].location}<h3>
        <h3>Date: ${state.parties[index].date}<h3>
        <p>${state.parties[index].description}<p>
        `;
        li.append(button);
        div.append(li);
        partyList.append(div);
    }
}

async function addParty(e){
    e.preventDefault();
    try{
        const response = await fetch(API_URL,{
            method: "POST",
            body: JSON.stringify({
                id: 1,
                name: addPartyForm.name.value,
                description: addPartyForm.description.value,
                date: addPartyForm.date.value,
                location: addPartyForm.location.value,
            })
        })
        if(!response.ok){
            throw new Error("Failed to create party");
        }
        render();
    }
    catch(error){
        console.log(error);
    }
}

async function deleteParty(e){
    e.preventDefault();
}
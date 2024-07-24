const COHORT = '2405-FTB-ET-WEB-PT';
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/recipes`;

const state = {};

async function getAPIData(){
    const response = await fetch(API_URL);
    const {data} = await response.json();
    console.log(data);
}

getAPIData();
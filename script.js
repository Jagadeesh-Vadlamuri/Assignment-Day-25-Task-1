const url = "https://covid-api.mmediagroup.fr/v1/cases";
let spanda = document.querySelector(".span-1");

let fetchData = document.querySelector("#btn-1");
fetchData.addEventListener("click", fetchdata);

async function fetchdata(){
    let data = await fetch(url).then((response)=>response.json());
    try{
        let tableBody = document.querySelector(".table-body");
        let tableRow = "";

        for(var i in data){
            tableRow +=
            `<tr>
            <td>${data[i].All.country}</td>
            <td>${data[i].All.population}</td>
            <td>${data[i].All.deaths}</td>
            <td>${data[i].All.recovered}</td>
            <td>${data[i].All.capital_city}</td>
            <td>${data[i].All.location}</td>
            </tr>`
        }

        spanda.innerHTML = "";
        tableBody.innerHTML += tableRow;
    }catch(error){
        console.log(error);
    }
}

let dataReset = document.querySelector("#btn-2");
dataReset.addEventListener("click", dataerase);

async function dataerase(){
    try{
        let tableBody = document.querySelector(".table-body");
        let timer = 3;
        setTimeout(()=>{
            spanda.innerHTML = `Data will be erased in ${timer--}`;
            setTimeout(()=>{
                spanda.innerHTML = `Data will be erased in ${timer--}`;
                setTimeout(()=>{
                    spanda.innerHTML = `Data will be erased in ${timer--}`;
                    setTimeout(()=>{
                        spanda.innerHTML = `Data will be erased in ${timer--}`;
                        setTimeout(()=>{
                            tableBody.innerHTML = "";
                            setTimeout(()=>{
                                spanda.innerHTML = 
                                "Data Erased.....Click on Fetch Data again";
                            }, 1000)
                        }, 1000)
                    },1000)
                }, 1000)
            }, 1000)
        }, 1000);    
    }catch(error){
        console.log(error);
    }
}


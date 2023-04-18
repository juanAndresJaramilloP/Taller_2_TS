import { Serie } from './serie.js';
import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonElm: HTMLElement = document.getElementById('average-seasons')!;

renderSeriesInTable(data);

avgSeasonElm.innerHTML = `${getAvgSeasons(data)}`;

function renderSeriesInTable(data : Serie[]): void {
    console.log("Desplegando series");
    data.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td><b>${serie.id}</b></td>
                               <td><a id="${serie.id}" href="#">${serie.name}</a></td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        const btn: HTMLElement = document.getElementById((serie.id).toString())!;
        btn.addEventListener("click", function () {
            const element_img: HTMLElement = document.getElementById('serie-img')!; 
            element_img.setAttribute('src', serie.image);
            const element_title: HTMLElement = document.getElementById('serie-title')!; 
            element_title.innerText = serie.name;
            const element_description: HTMLElement = document.getElementById('serie-description')!; 
            element_description.innerText = serie.description;
            const element_link: HTMLElement = document.getElementById('serie-link')!; 
            element_link.innerText = serie.link;
            element_link.setAttribute('href', serie.link);
        });
    });
}

function getAvgSeasons(data: Serie[]): string{
    let size: number = data.length;
    let avg: number = 0;
    data.forEach((serie) => {
        avg = avg + serie.seasons/size;
    });
    return avg.toFixed(1);
}
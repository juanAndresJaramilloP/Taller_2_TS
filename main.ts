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
                               <td><a href=\"${serie.link}\"> ${serie.name}</a></td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAvgSeasons(data: Serie[]): number{
    let size: number = data.length;
    let avg: number = 0;
    data.forEach((serie) => {
        avg = avg + serie.seasons/size;
    });
    return avg;
}
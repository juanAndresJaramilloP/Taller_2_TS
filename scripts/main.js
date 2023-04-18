import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonElm = document.getElementById('average-seasons');
renderSeriesInTable(data);
avgSeasonElm.innerHTML = "".concat(getAvgSeasons(data));
function renderSeriesInTable(data) {
    console.log("Desplegando series");
    data.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n                               <td><a href=\"").concat(serie.link, "\"> ").concat(serie.name, "</a></td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(data) {
    var size = data.length;
    var avg = 0;
    data.forEach(function (serie) {
        avg = avg + serie.seasons / size;
    });
    return avg;
}

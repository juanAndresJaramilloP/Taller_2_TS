import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonElm = document.getElementById('average-seasons');
renderSeriesInTable(data);
avgSeasonElm.innerHTML = "".concat(getAvgSeasons(data));
function renderSeriesInTable(data) {
    console.log("Desplegando series");
    data.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n                               <td><a id=\"").concat(serie.id, "\" href=\"#\">").concat(serie.name, "</a></td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var btn = document.getElementById((serie.id).toString());
        btn.addEventListener("click", function () {
            var element_img = document.getElementById('serie-img');
            element_img.setAttribute('src', serie.image);
            var element_title = document.getElementById('serie-title');
            element_title.innerText = serie.name;
            var element_description = document.getElementById('serie-description');
            element_description.innerText = serie.description;
            var element_link = document.getElementById('serie-link');
            element_link.innerText = serie.link;
            element_link.setAttribute('href', serie.link);
        });
    });
}
function getAvgSeasons(data) {
    var size = data.length;
    var avg = 0;
    data.forEach(function (serie) {
        avg = avg + serie.seasons / size;
    });
    return avg.toFixed(1);
}

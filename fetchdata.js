let useAPI = document.getElementsByClassName("useAPIdata")

fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPI.length; j++) {
                useAPI[j].innerHTML += `
                <li>
                <img src="${data[i].img}" alt="" style="max-width: 52px;">
                <h4>${data[i].title}<br><span>${data[i].disc}</span></h4>
              </li>
            `
            }
        }
    })

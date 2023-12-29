let useAPIct = document.getElementsByClassName("useAPIct")

fetch("./contact.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPIct.length; j++) {
                useAPIct[j].innerHTML += `
                <div class="col-lg-6">
              <div class="item phone">
                <img src="${data[i].img}" alt="" style="max-width: 52px;">
                <h6>${data[i].title}<br><span>${data[i].name}</span></h6>
              </div>
              </div>
            `
            }
        }
    })
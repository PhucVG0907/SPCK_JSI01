let useAPIhouse = document.getElementsByClassName("useAPIhouse")

fetch("./house.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPIhouse.length; j++) {
                useAPIhouse[j].innerHTML += `
                <div class="col-lg-4 col-md-6">
          <div class="item">
            <a href="property-details.html"><img src="${data[i].img}" alt=""></a>
            <span class="category">${data[i].name}</span>
            <h6>${data[i].price}</h6>
            <h4><a href="property-details.html">${data[i].title}</a></h4>
            <ul>
            ${data[i].disc}
            </ul>
            <div class="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
            `
            }
        }
    })
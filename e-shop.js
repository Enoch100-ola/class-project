let phoneListContainer = document.querySelector('#phone-list > .row');
let phoneListDetails = document.querySelectorAll('#phone-list .details');

let carListContainer = document.querySelector('#cars-list > .row');
let carListDetails = document.querySelectorAll('#cars-list .details');


for (let index = 0; index < phoneList.length; index++) {
  console.log(index);
  phoneListContainer.innerHTML += `
        <div class="col-md-3 my-5 mx-4 ">
            <div class="card shadow-primary">
            <img class="card-img-top" src="${phoneList[index].imageUrl}">
            <h5>${phoneList[index].name}</h5>
            <a class="btn btn-info details" href="product-details.html?id=${index}">read more</a>
            </div>
           
        </div>
    `;
}

for (let index = 0; index < carlist.length; index++) {
  console.log(index);
  phoneListContainer.innerHTML += `
        <div class="col-md-3 my-5 mx-4 ">
            <div class="card shadow-primary">
            <img class="card-img-top" src="${carlist[index].imageUrl}">
            <h5>${phoneList[index].name}</h5>
            <a class="btn btn-info details" href="product-details.html?id=${index}">read more</a>
            </div>
           
        </div>
    `;
}
//console.log(carlist)
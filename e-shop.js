let phoneListContainer = document.querySelector('#phone-list > .row');
let phoneListDetails = document.querySelectorAll('#phone-list .details');

for (let index = 0; index < phoneList.length; index++) {
  console.log(index);
  phoneListContainer.innerHTML += `
        <div class="col-md-3">
            <div class="card shadow-primary">
            <img class="card-img-top" src="${phoneList[index].imageUrl}">
            <h5>${phoneList[index].name}</h5>
            <a class="btn btn-info details" href="product-details.html?id=${index}">read more</a>
            </div>
        </div>
    `;
}

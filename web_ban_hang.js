let products = [
    {
        "title": " Nike Jordan 1 OG Low x Travis Scott Reverse Mocha (DM7866-162) ",
        "text": "Condition:\n New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.",
        "image": "https://i.ebayimg.com/images/g/56MAAOSw4wBi4wX0/s-l1600.png",
        "price": "$1,399",
        "size": "4-14"
    },
    {
        "title": " Nike Jordan 1 OG Low x Travis Scott Reverse Mocha (DM7866-162) ",
        "text": "Condition:\n New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.",
        "image": "https://i.ebayimg.com/images/g/56MAAOSw4wBi4wX0/s-l1600.png",
        "price": "$1,399",
        "size": "4-14"
    }
]
document.addEventListener("DOMContentLoaded", function () {
        console.log(products)
        renderData(products)
    }
)

function renderData(products1) {
    var listElement = ``;
    const containerCard = document.getElementById("container_card")
    products1.forEach((product) => {// console.log(product.title)
        var elementString = `
                <div class="card" id="card">
                <img src=${product.image} class="card-img-top" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.text}
                            <br>
                            ${product.price};
                            <br>
                            ${product.size};
                        </p>
                        <a href="#" class="btn btn-primary">Add To Cart</a>
                    </div>
                </div>    
                `
        listElement += elementString;
    })
    containerCard.innerHTML = listElement;
}

var btnAdd = document.getElementById("btn-add")
btnAdd.addEventListener('click', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const text = document.getElementById('text').value;
    const price = document.getElementById('price').value;
    const size = document.getElementById('size').value;
    const image = document.getElementById('image').value;
    // Dữ liệu mới cần thêm
    const newProduct =
        {
            "title": title,
            "text": text,
            "image": image,
            "price": price,
            "size": size
        };
    products.push(newProduct);
    renderData(products);
});



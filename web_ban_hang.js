var products = [
    {
        title: " Nike Jordan 1 OG Low x Travis Scott Reverse Mocha (DM7866-162) ",
        text: "Condition:\n New",
        image: "https://i.ebayimg.com/images/g/56MAAOSw4wBi4wX0/s-l1600.png",
        price: "Price: $1,399",
        size: "Size: 4-14",
    },
    {
        title:
            " Nike Fragment Design x Travis Scott x Air Jordan 1 Retro Low DM7866-140 ",
        text: "Condition:\n New",
        image:
            "https://authentic-shoes.com/wp-content/uploads/2023/04/travis-scott-fragment-air-jordan-1-low-lateral-side_e107a77f3f714fbea604b17bd68427b1.png",
        price: "Price: $2,299",
        size: "Size: 4-14",
    },
    {
        title: " Adidas Yeezy Slide Foam RNNR MXT Moon Grey GV7904 ",
        text: "Condition:\n New",
        image:
            "https://authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-mxt-moon_45fe093b796547a8b885c9a8f0944089-768x330.png",
        price: "Price: $600",
        size: "Price: 4-13",
    },
    {
        title:
            " Adidas BBC Ice Cream x Pharrell x NMD Human Race ‘Astronaut’ GW3955 ",
        text: "Condition:\n New",
        image:
            "https://authentic-shoes.com/wp-content/uploads/2023/04/pharrell_williams_hu_nmd_shoes_g_d857caf2dfc8476789fe09429f381878-768x768.png",
        price: "Price: $199",
        size: "Price: 4-13",
    },
];
document.addEventListener("DOMContentLoaded", function () {
    console.log(products);
    renderData(products);
});

function renderData(products1) {
    var listElement = ``;
    const containerCard = document.getElementById("container_card");
    products1.forEach((product) => {
        // console.log(product.title)
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
                `;
        listElement += elementString;
    });
    containerCard.innerHTML = listElement;
}

var btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;
    const price = document.getElementById("price").value;
    const size = document.getElementById("size").value;
    const image = document.getElementById("image").value;
    // Dữ liệu mới cần thêm
    const newProduct = {
        title: title,
        text: text,
        image: image,
        price: price,
        size: size,
    };
    products.push(newProduct);
    renderData(products);
});
function renderData(products1) {
    var listElement = ``;
    const containerCard = document.getElementById("container_card");

    products1.forEach((product, index) => {
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
                        <button type="button" class="btn btn-danger" onclick="btnDelete(${index}) ">Delete Product</button>
                    </div>
                </div>    
                `;
        listElement += elementString;
    });
    containerCard.innerHTML = listElement;
}
function btnDelete(index) {
    console.log(products)
    console.log(index)
    products.splice(index,1);
    console.log(products)
    renderData(products);
}
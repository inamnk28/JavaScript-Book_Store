// education array of objects

let items = [
    {
      id: 1,
      name: 2020,
      Image: "https://i.postimg.cc/vHSg54mr/51-HU3-Dh-Hd-SL.jpg",
      price: "This place",
    },
    {
      id: 2,
      name: 2019,
      Image: "https://i.postimg.cc/bvLsNr4S/98240.jpg",
      price: "This place",
    },
    {
      id: 3,
      name: 2018,
      Image: "https://i.postimg.cc/76s97xJf/ego-is-the-enemy-the-fight-to-master-our-greatest-opponent.jpg",
      price: "This place",
    },
    {
      id: 4,
      name: 2017,
      Image: "https://i.postimg.cc/PJ0BWbvp/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg",
      price: "This place",
    },
    {
      id: 5,
      name: 2016,
      Image: "https://i.postimg.cc/MTVPkknT/as-a-man-thinketh-9781440551185-hr.jpg",
      price: "This place",
    },
  ];
  
  let dispProducts = document.querySelector(".products");
  items.forEach((data) => {
    dispProducts.innerHTML += `
    <div class="card m-4" style="width: 350px" >
  <img src="${data.Image}" alt="Denim Jeans" style="width:100%">
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>`
  });
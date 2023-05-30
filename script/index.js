

let items = [
    {
      id: 1,
      name: "Power Of The Mind",
      Image: "https://i.postimg.cc/vHSg54mr/51-HU3-Dh-Hd-SL.jpg",
      desc: "This book is about positive Attitude, factors influence mood and mind is God",
      price: "R 300,0",
    },
    {
      id: 2,
      name: "The Way Of The Superior Man",
      Image: "https://i.postimg.cc/bvLsNr4S/98240.jpg",
      desc: "In The Way of the Superior Man, Deida explores the most important issues in men's lives―from career and family to women and intimacy to love and spirituality―to offer a practical guidebook for living a masculine life of integrity, authenticity, and freedom.",
      price: "R 550,0",
    },
    {
      id: 3,
      name: "Ego Is The Enemy",
      Image: "https://i.postimg.cc/76s97xJf/ego-is-the-enemy-the-fight-to-master-our-greatest-opponent.jpg",
      desc: "Ego Is The Enemy reveals why a tendency that’s hardwired into our brains — the belief that the world revolves around us and us alone — keeps holding us back from living the very life it dreams up for us, including what we can do to overcome our ego, be kinder to others and ourselves, and achieve true greatness.",
      price: "R 350,0",
    },
    {
      id: 4,
      name: "Atomic Habits",
      Image: "https://i.postimg.cc/PJ0BWbvp/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg",
      desc: " Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
      price: "R 400,0",
    },
    {
      id: 5,
      name: "As A Man Thinketh",
      Image: "https://i.postimg.cc/MTVPkknT/as-a-man-thinketh-9781440551185-hr.jpg",
      desc: "As A Man Thinketh is an essay and self-help classic, which argues that the key to mastering your life is harnessing the power of your thoughts and helps you cultivate the philosophy and attitude of a positive, successful person.",
      price: "R 300,0",
    },
    {
        id: 6,
        name: "Rich Dad's Cashflow Quadrant",
        Image: "https://i.postimg.cc/wvr9GscK/rich-dad-s-cashflow-quadrant-2.jpg",
        desc: "Rich Dad's Cashflow Quadrant teaches us why becoming an employee is not good for your wealth and how it can actually be detrimental to your financial situation",
        price: "R 200,0",
      },
  ];
  
  let dispProducts = document.querySelector(".products");
  items.forEach((data) => {
    dispProducts.innerHTML += `
  <div class="card m-3 col-lg-4 col-md-4 col-12" style="width: 350px; background-color: transparent; border: solid; border-color: grey; border-width: 1px"  >
  <img src="${data.Image}" style="width:100%; height: 400px">
  <h1 class="fs-4">${data.name}</h1>
  <p class="price fs-5">${data.price}</p>
  <p class="fs-6">${data.desc}</p>
  <p><button>Add to Cart</button></p>
</div>`
  });
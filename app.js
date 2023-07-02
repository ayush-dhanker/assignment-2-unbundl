const data = [
  {
    id: 0,
    data: "Chocolate - 1",
    cartValue: 0,
    price: 25,
  },
  {
    id: 1,
    data: "Chocolate - 2",
    cartValue: 0,
    price: 20,
  },
  {
    id: 2,
    data: "Chocolate - 3",
    cartValue: 0,
    price: 17,
  },
  {
    id: 3,
    data: "Chocolate - 4",
    cartValue: 0,
    price: 12,
  },
  {
    id: 4,
    data: "Chocolate - 5",
    cartValue: 0,
    price: 8,
  },
  {
    id: 5,
    data: "Chocolate - 6",
    cartValue: 0,
    price: 30,
  },
  {
    id: 6,
    data: "Chocolate - 7",
    cartValue: 0,
    price: 15,
  },
  {
    id: 7,
    data: "Chocolate - 8",
    cartValue: 0,
    price: 30,
  },
  {
    id: 8,
    data: "Chocolate - 9",
    cartValue: 0,
    price: 40,
  },
  {
    id: 9,
    data: "Chocolate - 10",
    cartValue: 0,
    price: 33,
  },
];

const card = document.querySelector(".container");
let count = 0;
let sum = 0;

const uiContent = data.map((ele, id) => {
  return `   
  <div class="card">
  <div class="img">
      <img src="./image/image-${ele.id}.png" />
  </div>
  <div class="top-text">
      <div class="name">
          ${ele.data}
      </div>
      <p>
          Rs.${ele.price}
      </p>
      <div class="wrapper" id=${ele.id}>
          <span class="minus">-</span>
          <span class="num" id='cart-${ele.id}'>${ele.cartValue}</span>
          <span class="plus">+</span>
      </div>
  </div>
</div>
`;
});

card.innerHTML = uiContent;

const cardValue = document.querySelectorAll(".wrapper");
cardValue.forEach((ele) =>
  ele.addEventListener("click", function (e) {
    //giving id
    const id = ele.attributes.id.value;
    //giving value=+ or -
    const action = e.target.textContent;
    if (action.toString() === "+" || action.toString() === "-") {
      updateValue(id, action);
    }
  })
);

function updateValue(index, action) {
  for (let i of data) {
    if (i.id.toString() === index.toString()) {
      if (action.toString() === "+") {
        if (count !== 8) {
          i.cartValue++;
          count++;
          sum += i.price;
        } else {
          alert("Limit Reached");
        }
      } else {
        if (i.cartValue !== 0) {
          i.cartValue--;
          sum -= i.price;
          count--;
        } else {
          alert("not a valid action");
        }
      }
      document.getElementById(`cart-${index}`).textContent = i.cartValue;
      document.getElementById("total").textContent = "Total : " + sum;
    }
  }
}

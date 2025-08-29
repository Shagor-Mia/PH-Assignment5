console.log("connected");
// heart
const AllHeart = document.querySelectorAll(".heart");
for (const heart of AllHeart) {
  heart.addEventListener("click", (e) => {
    e.preventDefault();
    const heartBalance = document.getElementById("heartBalance");
    heartBalance.innerText = parseInt(heartBalance.innerText) + 1;
  });
}

// copy button
const AllCpy = document.querySelectorAll("cpyBtn");
for (const btn of AllCpy) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
  });
}
// call button

const allCallBtns = document.querySelectorAll(".callBtn");

for (const btn of allCallBtns) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // reduce coin
    const coinBalance = document.getElementById("coin");
    let currentCoins = parseInt(coinBalance.innerText);

    if (currentCoins >= 20) {
      coinBalance.innerText = currentCoins - 20;

      // get info from the clicked card
      const card = btn.closest(".card");
      const title = card.querySelector(".title").innerText;
      const number = card.querySelector(".num").innerText;

      // show alert
      alert(`Calling ${title} ${number}...`);
    } else {
      alert("Not enough coins! 20 coins per call.");
    }
  });
}

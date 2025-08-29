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
const callHistory = [];
const allCallBtns = document.querySelectorAll(".callBtn");

for (const btn of allCallBtns) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const coinBalance = document.getElementById("coin");
    let currentCoins = parseInt(coinBalance.innerText);
    // alert and reduce
    if (currentCoins >= 20) {
      coinBalance.innerText = currentCoins - 20;
      const card = btn.closest(".card");
      const title = card.querySelector(".title").innerText;
      const number = card.querySelector(".num").innerText;
      alert(`Calling ${title} ${number}...`);

      // call history
      const data = {
        title: title,
        number: number,
        date: new Date().toLocaleTimeString(),
      };
      callHistory.push(data);
      console.log(callHistory);

      const historyContainer = document.getElementById("call-history");

      historyContainer.innerText = "";
      for (const data of callHistory) {
        const div = document.createElement("div");
        div.innerHTML = `
  <div class="History-container mt-4 bg-[#FAFAFA] rounded-lg p-2">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="font-semibold">${data.title}</h1>
        <p class="text-sm text-[#5c5c5c]">${data.number}</p>
      </div>
      <span class="text-sm">${data.date}</span>
    </div>
  </div>
`;
        historyContainer.prepend(div);
      }
    } else {
      alert("Not enough coins! 20 coins per call.");
    }
  });
}

// clear history
document.getElementById("clear").addEventListener("click", function (e) {
  e.preventDefault();
  callHistory.length = 0;
  const historyContainer = document.getElementById("call-history");
  historyContainer.innerHTML = ``;
});

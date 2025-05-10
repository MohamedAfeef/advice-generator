const adviceNumberEl = document.querySelector('.advice-number');
const adviceTextEl = document.querySelector('.advice');
const adviceButton = document.querySelector('.advice-button');

async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' }); // prevent caching
  const data = await res.json();

  const adviceId = data.slip.id;
  const adviceText = data.slip.advice;

  adviceNumberEl.textContent = `ADVICE #${adviceId}`;
  adviceTextEl.textContent = `"${adviceText}"`;
}

getAdvice();


adviceButton.addEventListener('click', getAdvice);

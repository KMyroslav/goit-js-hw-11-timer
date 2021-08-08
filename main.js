const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const dayEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.timerId = null;
    this.active = false;
  }

  start() {
    if (this.active) {
      return;
    }
    this.active = true;
    this.timerId = setInterval(() => {
      const timeLeft = this.targetDate - Date.now();
      this.onTick(timeLeft);
    }, 1000);
  }

  stop() {
    this.active = false;
    clearInterval(this.timerId);
  }
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimer(timeLeft) {
  dayEl.textContent = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hoursEl.textContent = pad(
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  minsEl.textContent = pad(
    Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
  );
  secsEl.textContent = pad(Math.floor((timeLeft % (1000 * 60)) / 1000));
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
  onTick: updateTimer,
});

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

// const timer = {
//   start() {
//     if (active) {
//       return;
//     }
//     active = true;
//     timerId = setInterval(countdown, 1000);
//     function countdown() {
//       const startTime = Date.now();
//       const timeLeft = targetDate - startTime;
//       dayEl.textContent = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//       hoursEl.textContent = pad(
//         Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//       );
//       minsEl.textContent = pad(
//         Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
//       );
//       secsEl.textContent = pad(Math.floor((timeLeft % (1000 * 60)) / 1000));
//     }
//   },
//   stop() {
//     active = false;
//     clearInterval(timerId);
//   },
// };

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

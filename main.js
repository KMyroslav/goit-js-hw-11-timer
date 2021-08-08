const dayEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.start();
  }

  start() {
    this.timerId = setInterval(() => {
      const timeLeft = this.targetDate - Date.now();
      this.onTick(timeLeft);
    }, 1000);
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

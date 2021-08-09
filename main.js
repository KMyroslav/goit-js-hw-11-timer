class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    this.timerId = setInterval(() => {
      const timeLeft = this.targetDate - Date.now();
      this.updateTimer(timeLeft);
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateTimer(timeLeft) {
    const wrapper = document.querySelector(`${this.selector}`);
    const dayEl = wrapper.querySelector('[data-value="days"]');
    const hoursEl = wrapper.querySelector('[data-value="hours"]');
    const minsEl = wrapper.querySelector('[data-value="mins"]');
    const secsEl = wrapper.querySelector('[data-value="secs"]');
    dayEl.textContent = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hoursEl.textContent = this.pad(
      Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    minsEl.textContent = this.pad(
      Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    );
    secsEl.textContent = this.pad(Math.floor((timeLeft % (1000 * 60)) / 1000));
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});

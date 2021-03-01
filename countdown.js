class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.timeRef = document.querySelector(selector);
    this.daysRef = this.timeRef.querySelector('[data-value="days"]');
    this.hoursRef = this.timeRef.querySelector('[data-value="hours"]');
    this.minsRef = this.timeRef.querySelector('[data-value="mins"]');
    this.secsRef = this.timeRef.querySelector('[data-value="secs"]');

    const x = setInterval(() => {
      const currentTime = Date.now() - 2 * 60 * 1000; //Як врахувати часовий пояс? Я вручну відняла 2 години різниці
      const deltaTime = this.targetDate - currentTime;

      if (deltaTime <= 0) {
        clearInterval(x);
        console.log("The end");
      } else {
        console.log("deltaTime:", deltaTime);
        this.daysRef.textContent = updateTime(deltaTime).days;
        this.hoursRef.textContent = updateTime(deltaTime).hours;
        this.minsRef.textContent = updateTime(deltaTime).mins;
        this.secsRef.textContent = updateTime(deltaTime).secs;
      }
    }, 1000);

    function updateTime(time) {
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs };
    }

    function pad(value) {
      return String(value).padStart(2, "0");
    }
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Mar 8, 2021"),
});






















// Код з html markup
// const refs = {
//   clock: document.querySelector(".timer-1"),
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]'),
// };

// const spanDays = refs.days.textContent;
// const spanHours = refs.hours.textContent;
// const spanMins = refs.mins.textContent;
// const spanSecs = refs.secs.textContent;

// const timer = {
//   start() {
//     const targetTime =
//       spanSecs * 1000 +
//       spanMins * 60 * 1000 +
//       spanHours * 60 * 60 * 1000 +
//       spanDays * 24 * 60 * 60 * 1000 +
//       Date.now();

//     const x = setInterval(() => {
//       const currentTime = Date.now();

//       const deltaTime = targetTime - currentTime;

//       if (deltaTime <= 0) {
//         clearInterval(x);
//         console.log("The end");
//       } else {
//         console.log("deltaTime:", deltaTime);
//         updateClockface(deltaTime);
//       }
//     }, 1000);
//   },
// };

// timer.start();

// function updateClockface(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   console.log(`${days}:${hours}:${mins}:${secs}`);
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.mins.textContent = `${mins}`;
//   refs.secs.textContent = `${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

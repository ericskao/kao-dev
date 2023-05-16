class TimerClass {
  id: number | null;
  endTime: number;
  remaining: number;
  callback: () => void;
  constructor(fn: () => void, delay: number) {
    this.id = window.setTimeout(fn, delay);
    this.endTime = new Date().getTime() + delay;
    this.remaining = 0;
    this.callback = fn;
  }

  getId() {
    return this.id;
  }

  getRemainingTime() {
    const remainingTime = this.endTime - new Date().getTime();
    return remainingTime > 0 ? remainingTime : 0;
  }

  pause() {
    if (this.id === null) return;
    window.clearTimeout(this.id);
    this.id = null;
    this.remaining = this.getRemainingTime();
  }

  resume() {
    if (this.id) return;
    // need to update endTime (dateNow + this.remaining)
    this.endTime = new Date().getTime() + this.remaining;
    // set id with new timeout
    this.id = window.setTimeout(this.callback, this.remaining);
  }

  clear() {
    if (this.id === null) return;
    window.clearTimeout(this.id);
  }
}

export default TimerClass;

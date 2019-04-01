export function hardWork(val) {
  let counter;
  for (let i = 0; i < 200000000; i++) {
    counter++;
  }
  return val + 1;
}

class AsyncLock {
  constructor() {
    this.setInitialState();
  }

  setInitialState() {
    this.chainOfActions = Promise.resolve();
    this.unlocker = () => {};
  }

  async waitIfLocked() {
    this.chainOfActions = this.chainOfActions.then(() => {
      return;
    });
    return this.chainOfActions;
  }

  lock() {
    this.chainOfActions = new Promise((res) => this.unlocker = res);
  }

  unlock() {
    this.unlocker();
    this.setInitialState();
  }
}

export function createAsyncLock() {
  return new AsyncLock();
}


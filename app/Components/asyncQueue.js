export class AsyncQueue {
    constructor() {
      this.queue = [];
      this.processing = false;
    }
  
    enqueue(task) {
      this.queue.push(task);
      this.#process();
    }
  
    async #process() {
      if (this.processing) return;
      this.processing = true;
  
      while (this.queue.length) {
        const task = this.queue.shift();
        try {
          await task();   // wait before next task
        } catch (err) {
          console.error("Queue task failed:", err);
        }
      }
  
      this.processing = false;
    }
  }
  
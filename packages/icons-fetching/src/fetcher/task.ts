class Task {
  private readonly name: string;

  private readonly func: () => void;

  constructor(name: string, func: () => void) {
    this.name = name;
    this.func = func;
  }

  async run() {
    const startTime = performance.now();
    console.log(`Executing Task: ${this.name}`);
    await this.func();
    const endTime = performance.now();
    console.log(`Task ${this.name} completed in ${Math.floor(endTime - startTime) / 100} seconds.`);
  }
}

export default Task;

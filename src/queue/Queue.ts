import { Event } from "../types";

export class Queue<T = Event> {
  private readonly q: T[] = [];

  public put(event: T) {
    this.q.push(event);
  }

  public get() {
    const event = this.q.shift();
    if (event === undefined) {
      throw new Error("Queue is empty");
    }

    return event;
  }

  public size() {
    return this.q.length;
  }
}

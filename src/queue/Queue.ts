import { Event } from "../types";

export class Queue<T = Event> {
  private readonly q: T[] = [];

  public put(event: T) {
    this.q.push(event);
  }

  public get() {
    return this.q.shift();
  }

  public size() {
    return this.q.length;
  }
}


export interface QueueNode<T> {
    value: T | null;
    next: QueueNode<T> | null;
}

export interface Queue<T> {
    size: number;
    top: QueueNode<T> | null;
    bottom: QueueNode<T> | null;
    enqueue(value: T): QueueNode<T> | null;
    dequeue(): QueueNode<T> | null;
    peek(): QueueNode<T> | null;
    count(): number;
}

export class QueueNode<T> implements QueueNode<T> {
    constructor(val: T) {
        this.value = val;
        this.next = null;
    }
}

export class Queue<T> implements Queue<T> {
    constructor() {
        this.size = 0;
        this.top = null;
        this.bottom = null;
    }

    enqueue(value: T): QueueNode<T> | null {
        const element = new QueueNode(value);
        if (this.size === 0) {
            this.top = element;
            this.bottom = element;
        } else {
            const currentTop = this.top;
            this.top = element;
            this.bottom!.next = currentTop;
        }

        this.size += 1;
        return this.top;
    }

    dequeue(): QueueNode<T> | null {
        if (this.size === 0) {
            return null;
        }

        if (this.size === 1) {
            this.top = null;
            this.size = 0;
            return null;
        }

        const currentBottom = this.bottom as QueueNode<T>;
        this.top = currentBottom.next;
        this.size -= 1;
        return this.bottom;
    }

    peek(): QueueNode<T> | null {
        return this.top;
    }
}
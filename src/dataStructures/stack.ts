export interface StackNode<T> {
    value: T;
    next: StackNode<T> | null;
}

export interface Stack<T> {
    size: number;
    top: StackNode<T> | null;
    bottom: StackNode<T> | null;
    push(val: T): StackNode<T> | null;
    pop(): StackNode<T> | null;
    peek(): StackNode<T> | null;
}

export class StackNode<T> implements StackNode<T>{
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class Stack<T> implements Stack<T> {
    constructor() {
        this.size = 0;
        this.top = null;
        this.bottom = null;
    }

    push(val: T): StackNode<T> | null {
        const elemToPush = new StackNode(val);
        if (this.size === 0) {
            this.top = elemToPush;
            this.bottom = elemToPush;
        } else {
            const latestElemInStack = this.top;
            this.top = elemToPush;
            this.top.next = latestElemInStack;
        }

        this.size += 1;
        return this.top;
    }

    pop(): StackNode<T> | null {
        if (this.size === 0) {
            return null;
        }

        const latestElem = this.top as StackNode<T>;
        this.top = latestElem.next;
        this.size -= 1;
        return this.top;
    }

    peek(): StackNode<T> | null {
        return this.top;
    }
}
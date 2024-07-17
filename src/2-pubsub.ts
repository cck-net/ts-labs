export class Queue<T> {
    private items: T[] = []

    enqueue(item: T): void {
        this.items.push(item)
    }

    dequeue(): T | undefined {
        return this.items.shift()
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }

    size(): number {
        return this.items.length
    }

    watch(): T[] {
        return this.items
    }
}

export class Publisher<T> {
    private queue: Queue<T>

    constructor(queue: Queue<T>) {
        this.queue = queue
    }

    async publish(item: T): Promise<void> {
        this.queue.enqueue(item)
    }
}

export class Subscriber<T> {
    private queue: Queue<T>

    constructor(queue: Queue<T>) {
        this.queue = queue
    }

    async consume(): Promise<T | undefined> {

        if (!this.queue.isEmpty()) {
            const item = this.queue.dequeue()

            if (item !== undefined) {
                return item
            }else {
                return undefined
            }
        } else {
            return undefined
        }
    }
}

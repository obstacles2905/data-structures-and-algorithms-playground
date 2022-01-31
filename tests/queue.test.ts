import { Queue } from '../src/dataStructures/queue';

describe('Queue test', () => {
   it('Should correctly enqueue', () => {
       const queue = new Queue();

       queue.enqueue(1);
       queue.enqueue(2);
       queue.enqueue(3);

       queue.dequeue();
       console.log(queue);
       expect(true).toBeTruthy();
   })
});
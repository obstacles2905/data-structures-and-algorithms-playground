import { Stack } from '../src/dataStructures/stack';


describe('Stack test', () => {
    it('Should correctly push', () => {
        const stack = new Stack();

        stack.push(1);
        expect(stack.peek()!.value).toEqual(1);

        stack.push(2);
        expect(stack.peek()!.value).toEqual(2);

        stack.push(3);
        expect(stack.peek()!.value).toEqual(3);

        expect(stack.size).toEqual(3);
        expect(stack.peek()!.value).toEqual(3);
    });

    it('Should correctly pop', () => {
        const stack = new Stack();

        stack.push(1);
        expect(stack.size).toEqual(1);

        stack.push(2);
        expect(stack.size).toEqual(2);

        const topElemInStack = stack.pop();
        expect(topElemInStack!.value).toEqual(1);
    });

    it('Should return null from pop if stack is empty', () => {
        const stack = new Stack();

        stack.push(1);
        stack.pop();
        stack.pop();

        expect(stack.peek()).toEqual(null);
        expect(stack.size).toEqual(0);
    })
});
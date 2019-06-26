let Collection = require('ruby-script');

test('Can create a collection', () => {
    let c = new Collection([1, 2, 3, 4]);
    expect(c.length).toBe(4);
    expect(c[0]).toBe(1);
    expect(c[1]).toBe(2);
    expect(c[2]).toBe(3);
    expect(c[3]).toBe(4);
});

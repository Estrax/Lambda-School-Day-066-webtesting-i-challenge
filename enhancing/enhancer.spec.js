const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('enhancer', () => {
        describe('item', () => {
            it('should accept an item', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(item.name).toBe("name");
                expect(item.durability).toBe(0);
                expect(item.enhancement).toBe(0);
            });
        });

        describe('repair(item)', () => {
            it('should repair an item', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.repair(item).name).toBe(item.name);
                expect(enhancer.repair(item).durability).toBe(100);
                expect(enhancer.repair(item).enhancement).toBe(item.enhancement);
            });
        });

        describe('succeed(item)', () => {
            it('should return an enhanced object', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.succeed(item).enhancement).toBe(item.enhancement+1);
            });

            it('should return an enhanced object at level 20', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 20
                }
                expect(enhancer.succeed(item).enhancement).toBe(20);
            });

            it('should not change the durability', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.succeed(item).durability).toBe(item.durability);
            });
        });

        describe('fail(item)', () => {
            it('should return an enhanced object', () => {
                
            });
        });

        describe('get()', () => {
            it('should pass', () => {
                
            });
        });
    });
});
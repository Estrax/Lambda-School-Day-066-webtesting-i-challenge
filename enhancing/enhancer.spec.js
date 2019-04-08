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

        describe('success(item)', () => {
            it('should pass', () => {
                
            });
        });

        describe('repair(item)', () => {
            it('should pass', () => {
                
            });
        });

        describe('repair(item)', () => {
            it('should pass', () => {
                
            });
        });
    });
});
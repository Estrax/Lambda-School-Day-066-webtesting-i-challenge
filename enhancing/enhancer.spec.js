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
                expect(item.name).toEqual("name");
                expect(item.durability).toEqual(0);
                expect(item.enhancement).toEqual(0);
            });
        });

        describe('repair(item)', () => {
            it('should repair an item', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.repair(item).name).toEqual(item.name);
                expect(enhancer.repair(item).durability).toEqual(100);
                expect(enhancer.repair(item).enhancement).toEqual(item.enhancement);
            });

            it('should not change the name of an item', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.repair(item).name).toEqual(item.name);
            });

            it('should not change the enhancement of an item', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.repair(item).enhancement).toEqual(item.enhancement);
            });

            it('should change the durability of an item to 100', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.repair(item).durability).toEqual(100);
            });
        });

        describe('succeed(item)', () => {
            it('should return an enhanced object', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.succeed(item).name).toEqual(item.name);
                expect(enhancer.succeed(item).durability).toEqual(item.durability);
                expect(enhancer.succeed(item).enhancement).toEqual(item.enhancement+1);
            });

            it('should return an enhanced object at level 20', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 20
                }
                expect(enhancer.succeed(item).name).toEqual(item.name);
                expect(enhancer.succeed(item).durability).toEqual(item.durability);
                expect(enhancer.succeed(item).enhancement).toEqual(20);
            });

            it('should enhance an item', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.succeed(item).enhancement).toEqual(item.enhancement+1);
            });

            it('should not change the item name', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.succeed(item).name).toEqual(item.name);
            });

            it('should not change the durability', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.succeed(item).durability).toEqual(item.durability);
            });
        });

        describe('fail(item)', () => {
            it('should return an enhanced object at level 0', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.fail(item).name).toEqual(item.name);
                expect(enhancer.fail(item).durability).toEqual(item.durability);
                expect(enhancer.fail(item).enhancement).toEqual(item.enhancement-5);
            });

            it('should return an enhanced object at level 14', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 14
                }
                expect(enhancer.fail(item).name).toEqual(item.name);
                expect(enhancer.fail(item).durability).toEqual(item.durability);
                expect(enhancer.fail(item).enhancement).toEqual(item.enhancement-5);
            });

            it('should return an enhanced object at level 15', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 15
                }
                expect(enhancer.fail(item).name).toEqual(item.name);
                expect(enhancer.fail(item).durability).toEqual(item.durability);
                expect(enhancer.fail(item).enhancement).toEqual(item.enhancement-10);
            });

            it('should return an enhanced object at level 16', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 16
                }
                expect(enhancer.fail(item).name).toEqual(item.name);
                expect(enhancer.fail(item).durability).toEqual(item.durability);
                expect(enhancer.fail(item).enhancement).toEqual(item.enhancement-10);
            });

            it('should return an enhanced object at level greater than 16', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 18
                }
                expect(enhancer.fail(item).name).toEqual(item.name);
                expect(enhancer.fail(item).durability).toEqual(item.durability);
                expect(enhancer.fail(item).enhancement).toEqual(item.enhancement-1);
            });

            it('should enhance an item at level 20', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 20
                }
                expect(enhancer.fail(item).enhancement).toEqual(item.enhancement-1);
            });

            it('should not change the item name', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.fail(item).name).toEqual(item.name);
            });

            it('should not change the durability', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }
                expect(enhancer.fail(item).durability).toEqual(item.durability);
            });
        });

        describe('get(item)', () => {
            it('should get an item', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }

                expect(enhancer.get(item)).toEqual(item);
            });

            it('should get an item of level 0', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 0
                }

                expect(enhancer.get(item).name).toEqual(item.name);
                expect(enhancer.get(item).durability).toEqual(item.durability);
                expect(enhancer.get(item).enhancement).toEqual(item.enhancement);
            });

            it('should get an item of level greater than 0', () => {
                const item = {
                    name: "name",
                    durability: 0,
                    enhancement: 20
                }

                expect(enhancer.get(item).name).toEqual(`[+${item.enhancement}] ${item.name}`);
                expect(enhancer.get(item).durability).toEqual(item.durability);
                expect(enhancer.get(item).enhancement).toEqual(item.enhancement);
            });
        });
    });
});
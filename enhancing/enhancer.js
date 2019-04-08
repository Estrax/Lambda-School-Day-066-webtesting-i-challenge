module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return {
    ...item,
    enhancement: item.enhancement === 20 ? 20 : item.enhancement+1
  };
}

function fail(item) {
  return {
    ...item,
    enhancement: item.enhancement > 16 ? item.enhancement-1 : item.enhancement >= 15 ? item.enhancement-10 : item.enhancement-5
  };
}

function repair(item) {
  return {
    ...item,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}

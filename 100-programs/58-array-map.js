let prices=["1", "2", "3", "4", "5"]

prices = prices.map(item => parseInt(item))

console.log(prices)

let timestamps = [ 1628049321000, 1630125721000];

timestamps = timestamps.map((timestamp) =>
new Date(timestamp).toLocaleDateString());

console.log(timestamps)
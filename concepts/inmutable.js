const orders = [
    {
        total: 100,
        id: 1,
        name: 'Nicolas'
    },
    {
        total: 120,
        id: 2,
        name: 'Santiago'
    },
    {
        total: 160,
        id: 3,
        name: 'Zulema',
    }
]
console.log('v1',orders);
orders.push({
    total: 110,
    id: 4,
    name: 'Cristobal'
});
console.log('v2',orders);
orders.pop();
console.log('v3',orders);
orders.unshift({
    total: 1340,
    id: 5,
    name: 'Sebastian'
});
console.log('v4',orders);
const rta = orders.map(item => {
    return item.total;
});
console.log('rta',rta);
console.log('v5',orders);
const rta2 = orders.map(item => {
    item.tax = 0.19;
    return item;
});
console.log('rta2',rta2);
console.log('v6',orders);
const rta3 = orders.map(item => {
    return {
        ...item,
        total2: item.total * 2
    };
});
console.log('rta3',rta3);
console.log('v7',orders);
const stats = {
    min: 0,
    max: 200,
    average: 10,
}

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
const rta = orders.map(item => {
    stats.min = item.total + 2;
    stats.average = item.id + 1;
    return {...stats};
})
console.log('rta', rta);
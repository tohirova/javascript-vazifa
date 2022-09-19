let sum = 0;
let list = [{
        id: 1,
        name: "Kartoshka",
        weight: 5,
        price: 5000,
    },
    {
        id: 2,
        name: "Sabzi",
        weight: 3,
        price: 3000,
    },
    {
        id: 3,
        name: "Piyoz",
        weight: 20,
        price: 4000,
    },
    {
        id: 4,
        name: "Guruch",
        weight: 10,
        price: 15000,
    },
    {
        id: 5,
        name: "Lavlagi",
        weight: 1,
        price: 8000,
    }
];

function tekshirish(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == string) {
            array.splice(i, 1);
        }
        sum += array[i].price * array[i].weight;
    }
    console.log(sum);
}

tekshirish(list, "Piyoz");
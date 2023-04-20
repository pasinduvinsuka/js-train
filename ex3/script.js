const dishes = [
    {
        name:'fish',
        vagetarian:false
    },
    {
        name:'salad',
        vegetarian:true
    },
    {
        name:'fruit-juice',
        vegetarian:true
    },
    {
        name:'pizza',
        vegetarian:false
    }
]

const vege = dishes.filter(dishes => dishes.vegetarian)

console.log(`first vegetarian item is ${vege[0].name}`);
type Product = { name: string, price: number, inStock: boolean } //akorát nevím co znamená že je defaultní hodnota true, protože já nevím jak to ovlivnit, já myslel že každý boolean je zezačátku false

let item1: Product = { name: "Laptop", price: 1500, inStock: true }
let item2: Product = { name: "Headphones", price: 300, inStock: false }

const prices1: number[] = [item1.price, item2.price]
const prices2: Array<number> = [item1.price, item2.price]

console.log(item1, item2, prices1[0], prices2[1])

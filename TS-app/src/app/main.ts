import { AddressModule, faker } from '@faker-js/faker';

import { addProduct, products, updateProduct, findProduct } from "./products/product.service";


for(let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.rgb(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid(),
  });
}


console.log(products);

const product = products[0];
updateProduct(product.id, {
  title:'New Title',
  stock: 80,

})



findProduct({
  title: 'New Title',
  stock: 80,
})

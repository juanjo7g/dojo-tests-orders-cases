
import { calculateDiscountTwoProductsWithPricegreaterThat100k } from '../../src/BusinessLogic/discounts';
import { Order } from '../../src/interfaces';

import { expect } from 'chai';

describe('Discount cheapest product', () => { // the tests container
    it('Just one product with unit price greater than 100000', () => { // the single test

        const order: Order = {  
            orderId: "A92B-01",
            products: [{
                productId: 1,
                categoryId: 6,
                unitPrice: 200000,
                quantity: 2
            }
            ],
            client: {
                email: "juanguti@gmail.com",
                phone: "+573018879988",
                address: "Calle 40# 66b - 12",
                city: "Medellin"
            }
         }
         let actualResult: number = calculateDiscountTwoProductsWithPricegreaterThat100k(order);
         expect(actualResult).to.equal(200000);
    });

    
});
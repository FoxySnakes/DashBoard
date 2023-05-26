import { Order, OrderStatus } from '../app/models/order'
import { Product } from '../app/models/product'
import { User } from '../app/models/user'

export const users: User[] = [
    {
        id: 1,
        name: 'Michel',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur de mathématiques'
    },
    {
        id: 2,
        name: 'Anna',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur de français'
    },
    {
        id: 3,
        name: 'Utilisateur 3',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur d\'anglais'
    },
    {
        id: 4,
        name: 'Utilisateur 4',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur de sciences'
    },
    {
        id: 5,
        name: 'Utilisateur 5',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur d\'histoire'
    },
    {
        id: 6,
        name: 'Utilisateur 6',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur de musique'
    },
    {
        id: 7,
        name: 'Utilisateur 7',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur d\'art'
    },
    {
        id: 8,
        name: 'Utilisateur 8',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur de sport'
    },
    {
        id: 9,
        name: 'Utilisateur 9',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur de géographie'
    },
    {
        id: 10,
        name: 'Utilisateur 10',
        pictureFileName: 'anabelle-isaro.png',
        job: 'Professeur de chimie'
    }
];

export const products: Product[] = [
    {
        id: 1,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 2,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 3,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 4,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 5,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 6,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 7,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 8,
        name: 'Pack de 30 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 9,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 10,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 11,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 12,
        name: 'Pack de 25 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 13,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 14,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    },
    {
        id: 15,
        name: 'Pack de 20 crayons',
        pictureFileName: 'https://example.com/pack-crayons.jpg',
        price: 9.99,
        stockQuantity: 100
    }
]

export const orders: Order[] = [
    {
        id: 1,
        articlesId: [1, 3, 5],
        userId: 1,
        state: OrderStatus.Placed,
        price: '15.99'
    },
    {
        id: 2,
        articlesId: [2, 4],
        userId: 2,
        state: OrderStatus.Pending,
        price: '9.99'
    },
    {
        id: 3,
        articlesId: [1, 3, 5, 7],
        userId: 3,
        state: OrderStatus.Completed,
        price: '24.99'
    },
    {
        id: 4,
        articlesId: [6, 8, 10],
        userId: 4,
        state: OrderStatus.Placed,
        price: '18.49'
    },
    {
        id: 5,
        articlesId: [2, 4, 6, 8],
        userId: 5,
        state: OrderStatus.Pending,
        price: '32.99'
    },
    {
        id: 6,
        articlesId: [3, 5, 7, 9],
        userId: 6,
        state: OrderStatus.Completed,
        price: '19.99'
    },
    {
        id: 7,
        articlesId: [4, 6, 8],
        userId: 7,
        state: OrderStatus.Placed,
        price: '12.99'
    },
    {
        id: 8,
        articlesId: [2, 4, 6],
        userId: 8,
        state: OrderStatus.Pending,
        price: '8.99'
    },
    {
        id: 9,
        articlesId: [1, 3],
        userId: 9,
        state: OrderStatus.Completed,
        price: '6.49'
    },
    {
        id: 10,
        articlesId: [5, 7, 9, 10],
        userId: 10,
        state: OrderStatus.Placed,
        price: '27.99'
    }
];
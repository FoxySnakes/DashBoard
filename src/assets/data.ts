import { Order, OrderStatus } from '../app/models/order'
import { Product } from '../app/models/product'
import { User } from '../app/models/user'

export const users: User[] = [
    {
        id: 1,
        name: 'Aryan Patel',
        pictureFileName: 'aryan-patel.jpg',
        job: 'Professeur de mathématiques'
    },
    {
        id: 2,
        name: 'Youssef Bouazza',
        pictureFileName: 'youssef-bouazza.jpg',
        job: 'Professeur de français'
    },
    {
        id: 3,
        name: 'Anabelle Joset',
        pictureFileName: 'anabelle-joset.jpg',
        job: 'Professeur d\'anglais'
    },
    {
        id: 4,
        name: 'Eloise Ghaut',
        pictureFileName: 'eloise-ghaut.jpg',
        job: 'Professeur de sciences'
    },
    {
        id: 5,
        name: 'Marion Hauton',
        pictureFileName: 'marion-hauton.jpg',
        job: 'Professeur d\'histoire'
    },
    {
        id: 6,
        name: 'Nicolas Dumond',
        pictureFileName: 'nicolas-dumond.jpg',
        job: 'Professeur de musique'
    },
    {
        id: 7,
        name: 'Silvie Porut',
        pictureFileName: 'silvie-porut.jpg',
        job: 'Professeur d\'art'
    }
];

export const products: Product[] = [
    {
        id: 1,
        name: 'Pack de 20 crayons de papier',
        pictureFileName: 'crayon-papier.jpg',
        price: 3.99,
        stockQuantity: 254
    },
    {
        id: 2,
        name: 'Pack de 20 stylos bleus',
        pictureFileName: 'stylo-bleu.jpg',
        price: 9.99,
        stockQuantity: 178
    },
    {
        id: 3,
        name: 'Pack de 20 stylos 4 couleurs',
        pictureFileName: 'stylo-4couleurs.jpg',
        price: 9.99,
        stockQuantity: 435
    },
    {
        id: 4,
        name: 'Pack de 10 cahier format A4 96 pages',
        pictureFileName: 'cahier-A4-96p.jpg',
        price: 9.99,
        stockQuantity: 448
    },
    {
        id: 5,
        name: 'Pack de 10 cahier de brouillons 96 pages',
        pictureFileName: 'cachier-brouillon-96p.jpg',
        price: 12.99,
        stockQuantity: 946
    },
    {
        id: 6,
        name: 'Pack de 20 classeur',
        pictureFileName: 'classeur.jpg',
        price: 34.99,
        stockQuantity: 176
    },
    {
        id: 7,
        name: 'Pack de 10 ciseaux',
        pictureFileName: 'ciseaux.jpg',
        price: 14.99,
        stockQuantity: 173
    },
    {
        id: 8,
        name: 'Pack de 20 règles 30cm',
        pictureFileName: 'regle-30cm.jpg',
        price: 9.99,
        stockQuantity: 434
    },
    {
        id: 9,
        name: 'Calculatrice TI-82',
        pictureFileName: 'calculatrice-ti82.jpg',
        price: 39.99,
        stockQuantity: 172
    },
    {
        id: 10,
        name: 'Pack de 10 compas',
        pictureFileName: 'compas.jpg',
        price: 16.99,
        stockQuantity: 349
    }
]

export const orders: Order[] = [
    {
        id: 1,
        articlesId: [1, 3, 5],
        userId: 1,
        state: OrderStatus.Placed,
        price: '15.99',
        dateCreated: new Date("2023-05-28")
    },
    {
        id: 2,
        articlesId: [2, 4],
        userId: 3,
        state: OrderStatus.Pending,
        price: '9.99',
        dateCreated: new Date("2023-05-28")
    },
    {
        id: 3,
        articlesId: [1, 3, 5, 7],
        userId: 4,
        state: OrderStatus.Completed,
        price: '24.99',
        dateCreated: new Date("2023-05-27")
    },
    {
        id: 4,
        articlesId: [6, 8, 10],
        userId: 7,
        state: OrderStatus.Placed,
        price: '18.49',
        dateCreated: new Date("2023-05-26")
    },
    {
        id: 5,
        articlesId: [2, 4, 6, 8],
        userId: 5,
        state: OrderStatus.Pending,
        price: '32.99',
        dateCreated: new Date("2023-05-26")
    },
    {
        id: 6,
        articlesId: [3, 5, 7, 9],
        userId: 1,
        state: OrderStatus.Completed,
        price: '19.99',
        dateCreated: new Date("2023-05-26")
    },
    {
        id: 7,
        articlesId: [4, 6, 8],
        userId: 7,
        state: OrderStatus.Placed,
        price: '12.99',
        dateCreated: new Date("2023-05-25")
    },
    {
        id: 8,
        articlesId: [2, 4, 6],
        userId: 3,
        state: OrderStatus.Pending,
        price: '8.99',
        dateCreated: new Date("2023-05-24")
    },
    {
        id: 9,
        articlesId: [1, 3],
        userId: 2,
        state: OrderStatus.Completed,
        price: '6.49',
        dateCreated: new Date("2023-05-22")
    },
    {
        id: 10,
        articlesId: [5, 7, 9, 10],
        userId: 2,
        state: OrderStatus.Placed,
        price: '27.99',
        dateCreated: new Date("2023-05-28")
    }
];
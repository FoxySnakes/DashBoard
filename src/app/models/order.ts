export interface Order {
    id : number,
    articles : string[],
    userId : number,
    state : OrderStatus,
    price: string;
}
enum OrderStatus {
    Placed = "Passée",
    Pending = "En cours",
    Completed = "Terminée"
}
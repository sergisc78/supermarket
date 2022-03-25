export class product{
    _id?:number;
    productName:string;
    type:string;
    stock:number;
    price:number;

    constructor(productName:string,type:string,stock:number,price:number){
        this.productName=productName;
        this.type=type;
        this.stock=stock;
        this.price=price;
    }

}
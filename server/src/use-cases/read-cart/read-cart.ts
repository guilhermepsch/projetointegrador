import { Cart } from "../../entities/cart";
import { CartRepository } from "../../repositories/cart-repository";

export class ReadCart {
    private cartRepository: CartRepository;
    
    constructor(cartRepository: CartRepository){
        this.cartRepository = cartRepository;
    }

    async execute(): Promise<Cart[]> {
        return await this.cartRepository.read();
    }
}
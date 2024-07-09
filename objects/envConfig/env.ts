export class Env {
    public static readonly INV_URL: string = `${process.env.BASE_URL}inventory.html`;
    public static readonly CART_ULR: string = `${process.env.BASE_URL}cart.html`;
    public static readonly LOGGED_STATE_PATH: string = `objects/state/loggedInState.json`;
    public static readonly ITEM_TO_CART: string = `objects/state/itemToCartState.json`;
}
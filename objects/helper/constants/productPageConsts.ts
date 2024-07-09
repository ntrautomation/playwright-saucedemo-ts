export const  BurgerMenuItems = [
        "All Items",
        "About",
        "Logout",
        "Reset App State"
];

export const SocialLinks = [
        "Twitter",
        "Facebook",
        "LinkedIn"
]

export enum LINKS {
        TWITTER = 'https://twitter.com/saucelabs',
        FACEBOOK = 'https://www.facebook.com/saucelabs',
        LINKEDIN = 'https://www.linkedin.com/company/sauce-labs/'
}

export enum PRODUCTS  {
        BACKPACK = 'Sauce Labs Backpack',
        BIKE = 'Sauce Labs Bike Light',
        BOLT_SHIRT = 'Sauce Labs Bolt T-Shirt',
        JACKET = 'Sauce Labs Fleece Jacket',
        ONESIE = 'Sauce Labs Onesie',
        RED_SHIRT = 'Test.allTheThings() T-Shirt (Red)'
}

export enum SORT {
        A_TO_Z = 'az',
        Z_TO_A = 'za',
        PRICE_LOW = 'lohi',
        PRICE_HIGH = 'hilo'
}

export const ProductItems = [
        PRODUCTS.BACKPACK,
        PRODUCTS.BIKE,
        PRODUCTS.BOLT_SHIRT,
        PRODUCTS.JACKET,
        PRODUCTS.ONESIE,
        PRODUCTS.RED_SHIRT
]

export const ProductItemsReverse = [
        PRODUCTS.RED_SHIRT,
        PRODUCTS.ONESIE,
        PRODUCTS.JACKET,
        PRODUCTS.BOLT_SHIRT,
        PRODUCTS.BIKE,
        PRODUCTS.BACKPACK
]

export const ProductsByPriceLow = [
        PRODUCTS.ONESIE,
        PRODUCTS.BIKE,
        PRODUCTS.BOLT_SHIRT,
        PRODUCTS.RED_SHIRT,
        PRODUCTS.BACKPACK,
        PRODUCTS.JACKET      
]

export const ProductsByPriceHigh = [
        PRODUCTS.JACKET,
        PRODUCTS.BACKPACK,
        PRODUCTS.BOLT_SHIRT,
        PRODUCTS.RED_SHIRT,
        PRODUCTS.BIKE,
        PRODUCTS.ONESIE
]
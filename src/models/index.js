export class Dish {
    dishId;
    numberProduct;
    name;
    weight;
    productDishes;
    photos;
    recipe;
    mealTimes;
    isDrink;
    dietDishes;
    typeLunch;
}

export class ProductDish {
    productDishId;
    product;
    dish;
    weight;
    ms;
}

export class Product {
    productId;
    productName;
    productFullName;
    likeProducts;
    problemProducts;
    productMRItems;
}

export class ProductName {
    productNameId;
    name;
    products;
}

export class MS {
    msId;
    shortName;
    fullName;
}

export class MRItem {
    mrItemId;
    ms;
    name;
    biologicalElement;
    mrs;
}

export class MR {
    mrId;
    mrItem;
    gender;
    data;
    startAge;
    finishAge;
}
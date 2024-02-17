import {Component} from "react";
import './PageDish.css';

export class PageDish extends Component {
    state = {
        dish: {}
    }

    constructor(props) {
        super(props);

        this.showProducts = this.showProducts.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('take_dish') !== null) {
            this.setState({dish: JSON.parse(sessionStorage.getItem('take_dish'))});
        }
    }

    showNutrients() {
        if (this.state.dish.productDishes == null) return;

        let buffer = [];
        let index = 1;

        for (let key in this.state.dish.nutrients) {
            buffer.push(
                <div>
                    {index++}. {key} - {this.state.dish.nutrients[key]}
                </div>
            );
        }

        return buffer;
    }

    showProducts() {
        if (this.state.dish.productDishes == null) return;

        let buffer = [];

        this.state.dish.productDishes.forEach((prDish, index) => {
            buffer.push(
                <div>
                    {index + 1}. {prDish.product.productFullName} - {prDish.weight} {prDish.ms.shortName}
                </div>
            );
        });

        return buffer;
    }

    render() {
        console.log(this.state.dish)
        return <>
            <div className={"headerPageDish"}>
                {
                    this.state.dish.name != null &&
                    this.state.dish.name
                }
            </div>

            <div className={"pageDishPhotoNutrientsProducts"}>
                {
                    this.state.dish.photos != null &&
                    <img
                        src={`data:image/jpeg;charset=utf-8;base64,${this.state.dish?.photos[0]?.data}`} alt={""}
                        style={{height: "240px"}}
                    />
                }

                <div>
                    Нутриенты:
                    <div className={"pageDishRecipeDescription"} style={{width: "100%"}}>
                        {
                            this.showNutrients()
                        }
                    </div>
                </div>
                <div>
                    Продукты:
                    <div className={"pageDishRecipeDescription"} style={{width: "100%"}}>
                        {
                            this.showProducts()
                        }
                    </div>
                </div>
            </div>

            <div className={"pageDishRecipe"}>
                Рецепт

                <br/>

                <div className={"pageDishRecipeDescription"} style={{textAlign: "justify"}}>
                    {
                        this.state.dish.recipe != null &&
                        this.state.dish.recipe.description
                    }
                </div>
            </div>

            <div className={"pageDishButton"}>
                <button>
                    Заказать
                </button>
            </div>
        </>
    }
}
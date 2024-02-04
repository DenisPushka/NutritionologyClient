import {Component} from "react";
import Header from "../Header/Header";
import "./CreateDish.css"

// 4. Тип обеда, при выборе обеда.
// 5. На стороне бека добавить логи.
export class CreateDish extends Component {

    state = {
        dish: {
            dishId: '',
            numberProduct: 0,
            name: '',
            weight: 0,
            productDishes: [],
            photos: [],
            recipe: {
                recipeId: '',
                description: '',
                private: false
            },
            mealTimes: [],
            isDrink: false,
            typeLunch: {}
        },
        getProducts: [],
        mealTimes: [
            {mealTimeId: 'E402BAC4-B55A-4FB4-94A9-7B4F8ED85E3B', name: 'Завтрак'},
            {mealTimeId: 'A48C50D5-37F6-4F22-9631-17B8198430A2', name: 'Обед'},
            {mealTimeId: 'CD10FCC3-BA04-4755-9AA0-97CB318D88E8', name: 'Полдник'},
            {mealTimeId: '6B294088-CAD0-47DA-B6B5-2DDBCE45A805', name: 'Ужин'},
            {mealTimeId: 'CADE8877-0338-4D41-AE3D-B2608346BB83', name: 'Сонник'},
        ],
        mses: [
            {msId: 'ECB9C9F2-1C4D-4A01-9433-0156C52A7E0E', shortName: 'мкг'},
            {msId: '178328E2-7B12-4496-AE7C-0E166D1FFE78', shortName: 'л'},
            {msId: '0AFC412C-755F-4D98-BC70-2EFC212F83AF', shortName: 'мл'},
            {msId: 'AFCFCD7C-A4A5-4B1C-8D55-316600593007', shortName: 'кг'},
            {msId: 'CD980CD6-5A86-440C-9EDD-4E0101D1B517', shortName: 'МЕ'},
            {msId: '0E14A061-58BF-41F3-BD48-63D422F7A1C4', shortName: 'кКал'},
            {msId: '3C9AB7DB-40DB-45FC-AAB4-94FB96D57FDC', shortName: 'г'},
            {msId: '54DCBE51-8542-454E-B206-E91370CD14F1', shortName: 'мг'}
        ],
        currentMS: {msId: 'ECB9C9F2-1C4D-4A01-9433-0156C52A7E0E', shortName: 'мкг'}
    }

    componentDidMount() {
        fetch('/product/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
            },
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({getProducts: data}, () => {
                    this.createSelectForProducts();
                    this.createSelectForMealTimes();
                    document.getElementById('create_dish_input_products_id').addEventListener('change', this.takeProduct.bind(this));
                    document.getElementById('create_dish_meal_times_input_id').addEventListener('change', this.takeMealtime.bind(this));
                    console.log(`%c download products`, "color: green");
                });
            })
            .catch((error) => console.error(error));
    }

    /*region Products*/

    createSelectForProducts() {
        let dataListElementProducts = document.createElement('datalist');
        dataListElementProducts.id = 'products_id';
        document.getElementById('create_dish_products_id').appendChild(dataListElementProducts);

        // todo css.
        this.state.getProducts.forEach((product) => {
            let option = document.createElement('option');
            option.value = product.productFullName;
            option.innerText = product.productFullName;
            dataListElementProducts.appendChild(option);
        });
    }

    takeProduct(evt) {
        if (evt.target.value === null || evt.target.value === '') return;

        let takeProduct = this.state.getProducts.find((product) => {
            if (product.productFullName === evt.target.value) {
                return product;
            }
        });

        if (takeProduct === undefined) return;

        this.state.dish.productDishes.push(
            {
                product: takeProduct,
                dish: null,
                weight: 0,
                ms: {}
            }
        );

        console.log(`%c take product - ${takeProduct.productFullName}`, "color: green");
    }

    showTakeProduct() {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdWeight = document.createElement('td');
        let weight = document.getElementById('create_dish_weight_input_id').value;
        tdName.innerText = this.state.dish.productDishes[this.state.dish.productDishes.length - 1].product.productFullName;
        tdWeight.innerText = weight;

        document.getElementById('create_dish_table_id').appendChild(tr);
        tr.append(tdName, tdWeight);
    }

    /*endregion*/

    /*region MealTime*/

    createSelectForMealTimes() {
        let dataListElement = document.createElement('datalist');
        dataListElement.id = 'meal_times_id';

        this.state.mealTimes.forEach(mealTime => {
            let option = document.createElement('option');
            option.value = mealTime.name;
            option.innerText = mealTime.name;
            dataListElement.appendChild(option);
        });

        document.getElementById('create_dish_meal_times_id').appendChild(dataListElement);
    }

    takeMealtime(evt) {
        if (evt.target.value === null || evt.target.value === '') return;

        let takeMealTime = this.state.mealTimes.find((mealTime) => {
            if (mealTime.name === evt.target.value) {
                return mealTime;
            }
        });

        if (takeMealTime === undefined) return;

        this.state.dish.mealTimes.push(takeMealTime);
        console.log(`%c take mealTime - ${takeMealTime.name}`, "color: violet");
        this.showTakeMealTime(takeMealTime);
    }

    showTakeMealTime(mealTime) {
        let td = document.createElement('td');
        td.innerText = mealTime.name;
        td.style.width = "10%";

        document.getElementById('create_dish_row_meal_time_id').appendChild(td);
    }

    /*endregion*/

    onClickButtonSaveOnProduct = (evt) => {
        console.log(Number(document.getElementById("create_dish_weight_input_id").value))
        this.state.dish.productDishes[this.state.dish.productDishes.length - 1].weight = Number(document.getElementById("create_dish_weight_input_id").value);
        this.state.dish.productDishes[this.state.dish.productDishes.length - 1].ms = this.state.currentMS;
        this.showTakeProduct();
    }

    onClickButtonSaveAll = () => {
        console.log(this.state.dish)
        fetch('/dish/add', {
            method: 'POST',
            body: JSON.stringify(this.state.dish),
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
            }
        })
            .then(r => {
                console.log(r)

                console.log('SAVE IN CREATE DISH');
                this.cleanDish();
            })
            .catch(er =>
                console.error(er)
            );
    }

    // region Inputs

    onInputInSelectMs = (evt) => {
        let choiceMS = this.state.mses.find((ms) => {
            if (ms.msId === evt.target.value)
                return ms
        });

        this.setState({currentMS: choiceMS});
    }

    onInputRecipe = (evt) => {
        this.setState({dish: {...this.state.dish, recipe: {...this.state.dish.recipe, description: evt.target.value}}});
    }

    onInputNameDish = (evt) => {
        this.setState({dish: {...this.state.dish, name: evt.target.value}});
    }

    // endregion

    cleanDish() {
        this.setState({
            dish: {
                dishId: '',
                numberProduct: 0,
                name: '',
                weight: 0,
                productDishes: [],
                photos: [],
                recipe: {
                    recipeId: '',
                    description: '',
                    private: false
                },
                mealTimes: [],
                isDrink: false,
                typeLunch: {}
            }
        });
    }

    render() {
        return (
            <>
                <Header/>

                <div className={"create_dish"}>
                    <div className={"create_dish_products"}>Продукты</div>
                    <div className={"create_dish_weight"}>Вес</div>
                    <div className={"create_dish_meal_times"}>Прием пищи</div>

                    <div id={"create_dish_products_id"} className={"create_dish_products_input"}>
                        <input id={'create_dish_input_products_id'} className={"input_products"} list={"products_id"}/>
                    </div>

                    <div className={"create_dish_weight_input"}>
                        <input id={"create_dish_weight_input_id"} type="text" className={"inputForWeight"}/>

                        <div id={"create_dish_name_weight"}></div>

                        <select name="create_dish_ms" id="create_dish_ms_id"
                                onInput={this.onInputInSelectMs}>
                            {
                                this.state.mses.map((ms) => {
                                    return <option value={ms.msId}>
                                        {ms.shortName}
                                    </option>
                                })
                            }
                        </select>

                        <button onClick={this.onClickButtonSaveOnProduct}>ок</button>
                    </div>

                    <div id={"create_dish_meal_times_id"} className={"create_dish_meal_times_input"}>
                        <input id={'create_dish_meal_times_input_id'} list={"meal_times_id"}
                            // placeholder={this.state.mealTimes[0].name}
                        />
                    </div>

                    <div className={"create_dish_take_products"}>
                        Добавленные продукты:
                        <table id={"create_dish_table_id"}>
                            <tr>
                                <th>
                                    Название продукта
                                </th>
                                <th>
                                    Вес
                                </th>
                            </tr>
                        </table>
                    </div>

                    <table className={'create_dish_table_meal_time'}>
                        <tr id={'create_dish_row_meal_time_id'}>
                            <th>
                                Приемы пищи:
                            </th>
                        </tr>
                    </table>

                    <button className={'create_dish_button_save_all'} onClick={this.onClickButtonSaveAll}>
                        Сохранить
                    </button>

                    <div className={'create_dish_input_recipe'}>
                        <div>
                            Рецепт
                        </div>

                        <textarea
                            id={'create_dish_input_recipe'}
                            onInput={this.onInputRecipe}
                            className={'create_dish_input_input_recipe'}
                        />

                        <div>
                            <input
                                type="checkbox"
                                id="scales"
                                name="scales"
                                checked={this.state.dish.recipe.private}
                                onChange={(evt) => {
                                    this.setState({
                                        dish: {
                                            ...this.state.dish,
                                            recipe: {
                                                ...this.state.dish.recipe,
                                                private: !this.state.dish.recipe.private
                                            }
                                        }
                                    });
                                }}
                            />
                            <label htmlFor="scales">Секретный</label>
                        </div>

                    </div>

                    <div id={'create_dish_create_name_dish'} className={'create_dish_create_name_dish'}>
                        <div>
                            Название блюда
                        </div>
                        <input
                            type="text"
                            onInput={this.onInputNameDish}
                            className={'create_dish_create_name_dish_input'}
                        />
                    </div>
                </div>
            </>
        )
    }
}
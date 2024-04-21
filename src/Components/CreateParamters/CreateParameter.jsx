import React, {Component} from "react";
import Header from "../Header/Header";

import './CreateParameter.css'
import Footer from "../Footer/Footer";
import {connect} from "react-redux";

class CreateParameter extends Component {

    state = {
        weight: 60,
        height: 171,
        to_weight: 60,
        gender: {
            genderId: '42A7228B-D574-4C91-8F27-A5D829A06D8B',
            shortName: 'м',
            fullName: 'Мужской'
        },
        age: 10,
        like_products: [],
        problem_products: [],
        count_meal_time_in_day: 3,
        choice_activity: {},
        choice_target: {},
        activities: [
            {
                name: 'В офисе',
                kfa: '1'
            },
            {
                name: 'Много двидагаюсь',
                kfa: '2'
            },
            {
                name: 'Тренируюсь 2 - 3 раза в неделю',
                kfa: '3'
            },
            {
                name: 'Тренируюсь более 5 раз в неделю',
                kfa: '4'
            }
        ],
        targets: [
            {
                targetId: '10D0DFD5-C416-4B45-A303-CD4D0103C3BC',
                name: 'Похудеть',
                percent: 0.7
            },
            {
                targetId: '6F1BC86B-A683-459A-AA47-3D7D6B2BB795',
                name: 'Сохранить форму',
                percent: 1
            },
            {
                targetId: '41E44321-DA68-435A-B3C3-372AFDE712A4',
                name: 'Набрать мышечную массу',
                percent: 1.3
            }
        ],
        current_parameter: "gender",
        products: [],
        props: null
    }

    constructor(props) {
        super(props);

        this.setState({props: props});
    }

    componentDidMount() {
        let callback = (data) => {
            this.props.setProducts(data);
            console.log(`%c download products`, "color: green");
        };

        console.log(this.props.products)
        if (this.props.products !== null && this.props.products.length !== 0) {
            this.setState({products: this.props.products});
            return;
        }

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
                this.setState({products: data}, () => callback(data));
            })
            .catch((error) => console.error(error));
    }

    //#region Gender

    getGender(gender) {
        if (gender === 'w') {
            this.setState({
                gender:
                    {
                        genderId: '5675D50D-35F7-4708-81B3-2AA6152F799D',
                        fullName: 'Женский',
                        shortName: 'ж'
                    }
            })
        }

        this.setState({current_parameter: "to_weight"})
    }

    takeGender() {
        return (
            <div className={"parameter_info"}>
                <div className={"par_info_input"}>
                    Выберите пол
                </div>

                <div className={"parameter_buttons"}>

                    <button onClick={this.getGender.bind(this, "m")} className={"parameter_button"}>
                        Мужской
                    </button>

                    <button onClick={this.getGender.bind(this, "w")} className={"parameter_button"}>
                        Женский
                    </button>
                </div>
            </div>
        )
    }

    //#endregion

    //#region By weight

    takeWeight() {
        return (
            <div className={"parameter_info drop_gap"}>
                <div>
                    К какому весу стремитесь:
                </div>

                <div className={"take_parameter_by_weight_info"}>
                    <div>
                        35кг
                    </div>

                    <div className={"show_take_to_weight"}>
                        {this.state.weight}
                    </div>

                    <div>
                        180кг
                    </div>

                </div>
                <input
                    className={"range_parameter"}
                    type="range"
                    value={this.state.weight}
                    min={35}
                    max={180}
                    step={1}
                    onInput={event => this.setState({weight: event.target.value})}
                />

                <div className={"button_change_weight"}>
                    <button className={"parameter_button"}
                            onClick={() => this.setState({current_parameter: "age_etc"})}
                    >
                        Продолжить
                    </button>
                </div>
            </div>
        )
    }

    //#endregion

    //#region Age && height && weight

    takeAgeEtc() {
        return (
            <div className={"parameter_info"}>

                <div className={"par_info_input"}>
                    Введите возарст, рост и вес
                </div>

                <div className={"age_height_weight"}>
                    <div>
                        Возраст
                    </div>

                    <div>
                        Рост
                    </div>

                    <div>
                        Вес
                    </div>

                    <input
                        type="number"
                        placeholder={"18"}
                        min={1}
                        max={80} required
                        value={this.state.age}
                        onInput={event => this.setState({age: event.target.value})}
                    />
                    <input
                        type="number"
                        placeholder={"180"}
                        min={100} max={250}
                        onInput={event => this.setState({height: event.target.value})}
                    />

                    <input
                        type="number"
                        placeholder={"60"}
                        min={25}
                        max={350}
                        onInput={event => this.setState({weight: event.target.value})}
                    />

                </div>

                <div className={"button_change_weight"}>
                    <button className={"parameter_button age_etc_button"}
                            onClick={() => this.setState({current_parameter: "activity"})}
                    >
                        Продолжить
                    </button>
                </div>
            </div>
        )
    }

    //#endregion

    //#region Activity

    getActivity(activity) {
        this.setState({
            choice_activity: activity,
            current_parameter: "target"
        });
    }

    takeActivity() {
        return (
            <div className={"parameter_info"}>
                <div className={"par_info_input"}>
                    Опишите свою активность
                </div>

                <div className={"activity_change"}>
                    {
                        this.state.activities.map((activity) => {
                            return <button
                                className={"activity_change_button"}
                                onClick={this.getActivity.bind(this, activity)}
                            >
                                {activity.name}
                            </button>
                        })
                    }
                </div>
            </div>
        )
    }

    //#endregion

    //#region Target

    getTarget(target) {
        this.setState({choice_target: target, current_parameter: 'products'}, () => {
            this.createSelectForProducts('create_parameter_like_products_id');
            this.createSelectForProducts('create_parameter_dont_like_products_id');
            document.getElementById('create_parameter_input_like_products_id').addEventListener('change', this.takeProduct.bind(this, 'like_products'));
            document.getElementById('create_parameter_input_dont_like_products_id').addEventListener('change', this.takeProduct.bind(this, 'dont_like_products'));
        });
    }

    takeTarget() {
        return (
            <div className={"parameter_info"}>
                <div className={"par_info_input"}>
                    Выберите цель
                </div>

                <div className={"activity_change"}>
                    {
                        this.state.targets.map((t) => {
                            return <button
                                className={"activity_change_button"}
                                onClick={this.getTarget.bind(this, t)}
                            >
                                {t.name}
                            </button>
                        })
                    }
                </div>
            </div>
        )
    }

    //#endregion

    sendParameter() {
        const parameter = {
            gender: this.state.gender,
            age: this.state.age,
            weight: this.state.weight,
            height: this.state.height,
            likeProducts: this.state.like_products,
            problemProducts: this.state.problem_products,
            countMealTimeInDay: this.state.count_meal_time_in_day,
            simpleActivity: this.state.choice_activity.name,
            activity: {name: this.state.choice_activity.kfa},
            target: this.state.choice_target,
        };


        fetch('/user/add-parameter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
            },
            body: JSON.stringify(
                {
                    user: {
                        userId: '0DADD5BD-43A1-47A0-9405-ADC2C699E94A',
                        passwordHash: '1jdsku13jsi123',
                        email: 'default@mail.ru'
                    },
                    parameter: parameter
                }
            )
        })
            .then((res) => res.json())
            .then((diet) => {
                // this.setState({product: data}, () => callback(data));
            })
            .catch((error) => console.error(error));
    }

    choiceProducts() {
        return (
            <div className={"parameter_info"}>
                <div className={"par_info_input"}>
                    Любимые продукты
                </div>

                Список продуктов:
                <div id={"create_parameter_like_products_id"} className={"create_dish_products_input"}>
                    <input
                        id={'create_parameter_input_like_products_id'}
                        className={"input_products"}
                        list={"products_id"}
                    />
                </div>

                <table>
                    <tr id={"create_parameter_like_products_table_th_id"}>
                        <th>Название продукта</th>
                    </tr>
                </table>


                <div className={"par_info_input"}>
                    Нелюбимые продукты
                </div>

                Список продуктов:
                <div id={"create_parameter_dont_like_products_id"} className={"create_dish_products_input"}>
                    <input
                        id={'create_parameter_input_dont_like_products_id'}
                        className={"input_products"}
                        list={"products_id"}
                    />
                </div>

                <table>
                    <tr id={"create_parameter_dont_like_products_table_th_id"}>
                        <th>Название продукта</th>
                    </tr>
                </table>

                <button
                    className={"parameter_button age_etc_button"}
                    onClick={this.sendParameter.bind(this)}
                >
                    Отправить
                </button>
            </div>
        )
    }

    createSelectForProducts(elementId) {
        let dataListElementProducts = document.createElement('datalist');
        dataListElementProducts.id = 'products_id';
        document.getElementById(elementId).appendChild(dataListElementProducts);

        this.state.products?.forEach((product) => {
            let option = document.createElement('option');
            option.value = product.productFullName;
            option.innerText = product.productFullName;
            dataListElementProducts.appendChild(option);
        });
    }

    takeProduct(type_products, evt) {
        if (evt.target.value === null || evt.target.value === '') return;

        let takeProduct = this.state.products.find((product) => {
            if (product.productFullName === evt.target.value) {
                return product;
            }
        });

        if (takeProduct === undefined) return;

        if (type_products === 'like_products') {
            this.state.like_products.push(takeProduct);
        } else {
            this.state.problem_products.push(takeProduct);
        }

        this.showTakeProduct(type_products);
        console.log(`%c take product - ${takeProduct.productFullName}`, "color: green");
    }

    showTakeProduct(type_products) {
        let th = document.createElement('th');
        if (type_products === 'like_products') {
            th.innerText = this.state.like_products[this.state.like_products.length - 1].productFullName;
            document.getElementById('create_parameter_like_products_table_th_id').appendChild(th);
        } else {
            th.innerText = this.state.problem_products[this.state.problem_products.length - 1].productFullName;
            document.getElementById('create_parameter_dont_like_products_table_th_id').appendChild(th);
        }
    }

    showCurrentParameter() {
        switch (this.state.current_parameter) {
            case "gender":
                return this.takeGender();
            case "to_weight":
                return this.takeWeight();
            case "age_etc":
                return this.takeAgeEtc();
            case "activity":
                return this.takeActivity();
            case "target":
                return this.takeTarget();
            case "products":
                return this.choiceProducts();
        }
    }

    render() {
        return (
            <>
                <Header/>

                <div className={"take_parameter"} style={{overflowY: "scroll", height: "600px"}}>
                    <h2>Создание параметра</h2>

                    <div>
                        Процент загрузки
                    </div>

                    <div id={"show_take_parameter"}>
                        {this.showCurrentParameter()}
                    </div>

                    <Footer/>
                </div>
            </>
        )

    }
}

export default connect(
    state => ({
        products: state.products
    }),
    dispatch => ({
        setProducts: (products) => dispatch({type: 'SET_PRODUCTS', payload: products})
    })
)(CreateParameter);
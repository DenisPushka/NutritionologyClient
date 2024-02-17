import {Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./showMenu.css";
import {connect} from "react-redux";

/**
 * Отображение меню (рациона).
 * */
class ShowMenu extends Component {
    state = {
        dietDishes: [
            {
                dietDishId: '',
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
                dayOfWeek: {
                    dayOfWeekId: '',
                    shortName: ''
                },
                mealTime: {
                    mealTimeId: '',
                    name: ''
                }
            }
        ]
    }

    componentDidMount() {
        fetch('/diet?id=E183F86B-6DF1-4B69-A33E-9F738ABFD2D4', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
            },
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({dietDishes: data.dietDishes}, () => {
                    this.downloadDishes();
                    console.log(`%c Diet download!`, "color: green");
                });
            })
            .catch((error) => console.error(error));
    }

    takeDish(dish) {
        console.log(dish);
        this.props.onTakeDish(dish);
        window.location = `#/PageDish`;
    }

    downloadDishes() {
        let buffer = [
            <div className={"table-data"}></div>, <div className={"table-data"}></div>,
            <div className={"table-data"}></div>, <div className={"table-data"}></div>,
            <div className={"table-data"}></div>
        ];

        this.state.dietDishes.forEach((dietDish, index) => {
            if (dietDish.mealTime.name === 'Завтрак') {
                buffer[0] =
                    <div
                        className={["table-data", "choice_dish"].join(' ')}
                        onClick={this.takeDish.bind(this, dietDish.dish)}
                    >
                        <div className={"box"}>
                            <img
                                src={`data:image/jpeg;charset=utf-8;base64,${dietDish.dish.photos[0]?.data}`} alt={""}
                                style={{height: "120px"}}
                            />
                        </div>
                        <div>{dietDish.dish.name}</div>
                        <div>Вес: {dietDish.dish.weight}</div>
                    </div>;
            } else if (dietDish.mealTime.name === 'Обед') {
                buffer[1] =
                    <div
                        className={["table-data", "choice_dish"].join(' ')}
                        onClick={this.takeDish.bind(this, dietDish.dish)}
                    >
                        <div className={"box"}>
                            <img
                                src={`data:image/jpeg;charset=utf-8;base64,${dietDish.dish.photos[0]?.data}`} alt={""}
                                style={{height: "120px"}}
                            />
                        </div>
                        <div>{dietDish.dish.name}</div>
                        <div>Вес: {dietDish.dish.weight}</div>
                    </div>;
            } else if (dietDish.mealTime.name === 'Полдник') {
                buffer[2] =
                    <div
                        className={["table-data", "choice_dish"].join(' ')}
                        onClick={this.takeDish.bind(this, dietDish.dish)}
                    >
                        <div className={"box"}>
                            <img
                                src={`data:image/jpeg;charset=utf-8;base64,${dietDish.dish.photos[0]?.data}`} alt={""}
                                style={{height: "120px"}}
                            />
                        </div>
                        <div>{dietDish.dish.name}</div>
                        <div>Вес: {dietDish.dish.weight}</div>
                    </div>;
            } else if (dietDish.mealTime.name === 'Ужин') {
                buffer[3] =
                    <div
                        className={["table-data", "choice_dish"].join(' ')}
                        onClick={this.takeDish.bind(this, dietDish.dish)}
                    >
                        <div className={"box"}>
                            <img
                                src={`data:image/jpeg;charset=utf-8;base64,${dietDish.dish.photos[0]?.data}`} alt={""}
                                style={{height: "120px"}}
                            />
                        </div>
                        <div>{dietDish.dish.name}</div>
                        <div>Вес: {dietDish.dish.weight}</div>
                    </div>;
            } else if (dietDish.mealTime.name === 'Сонник') {
                buffer[4] =
                    <div
                        className={["table-data", "choice_dish"].join(' ')}
                        onClick={this.takeDish.bind(this, dietDish.dish)}
                    >
                        <div className={"box"}>
                            <img
                                src={`data:image/jpeg;charset=utf-8;base64,${dietDish.dish.photos[0]?.data}`} alt={""}
                                style={{height: "120px"}}
                            />
                        </div>
                        <div>{dietDish.dish.name}</div>
                        <div>Вес: {dietDish.dish.weight}</div>
                    </div>;
            }
        });

        return buffer;
    }

    render() {
        return <>
            <Header/>

            <div className={"show_menu_container"}>

                {/* Под шапкой. */}
                <div className={"show_menu_header"}>
                    <div className={"show_menu_header_params_1"}>
                        <div className={"show_menu_header_params_1_PARAM"}>
                            Параметры
                        </div>

                        <div className={"show_menu_header_params_1_1"}>
                            <div>Пол: мужской</div>
                            <div>Рост: 180 см</div>
                            <div>Вес: 74 кг</div>
                        </div>
                    </div>

                    <div className={"show_menu_header_params_1_1"}>
                        <div>
                            <div>Любимые продукты: <select></select></div>
                            <div>Нелюбимые продукты: <select></select></div>
                        </div>

                        <div>Количество приемов пищи: 3</div>
                    </div>
                </div>

                {/* Body. */}
                <div className={"show_menu_body"}>

                    <div className={"table-menu"}>
                        <div className={"table-header-menu"}>
                            <div className={["header__item", "filter__link"].join(' ')}></div>
                            <div className={["header__item", "filter__link"].join(' ')}>Завтрак</div>
                            <div className={["header__item", "filter__link"].join(' ')}>Обед</div>
                            <div className={["header__item", "filter__link"].join(' ')}>Полдник</div>
                            <div className={["header__item", "filter__link"].join(' ')}>Ужин</div>
                            <div className={["header__item", "filter__link"].join(' ')}>Сонник</div>
                        </div>
                        <div className={"table-content"}>
                            <div
                                // id={"table_row_id"}
                                className={"table-row"}
                            >
                                <div className={"table-data"}>День 1</div>

                                {this.downloadDishes()}
                                {/*<div className={"table-data"}>*/}
                                {/*    <img src="../../logo.svg" alt={""}/>*/}
                                {/*    <div>Name dish</div>*/}
                                {/*    <div>Description</div>*/}
                                {/*</div>*/}

                                {/*<div className={"table-data"}>обед 1</div>*/}
                                {/*<div className={"table-data"}>Полдник 1</div>*/}
                                {/*<div className={"table-data"}>ужин 1</div>*/}
                                {/*<div className={"table-data"}>Сонник 1</div>*/}
                            </div>
                        </div>
                    </div>

                    <div>
                        Необходимое количество нутриентов на день:

                        {/* Функция перечисления нутриентов пользователя. */}
                        <div>
                            <div>1. Витамин А - 0.02 мкг</div>
                            <div>2. Витамин В - 0.02 мкг</div>
                            <div>3. Витамин С - 0.02 мкг</div>
                            <div>4. Витамин D - 0.02 мкг</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    }
}

export default connect(
    state => ({
        take_dish: state.take_dish,
    }),
    dispatch => ({
        onTakeDish: (dish) => {
            dispatch({type: 'TAKE_DISH', payload: dish})
        }
        // onAddUser: (user)=>{
        //     dispatch({type: 'ADD_USER', payload: user})
        // }
    })
)(ShowMenu);
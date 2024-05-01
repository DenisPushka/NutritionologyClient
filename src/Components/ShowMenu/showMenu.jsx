import {Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./showMenu.css";
import {connect} from "react-redux";
import {addUser, goToPage, setDietId, setDishes, setTakeDish} from "../../actions";

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
        ],
        diet: "",
        user: {}
    }

    componentDidMount() {
        if (this.props.diet.dietId === "") {
            fetch(`/diet/use-user-id?userId=${this.props.user.userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    this.setState({dietDishes: data.dietDishes}, () => {
                        this.downloadDishes();
                        this.props.setDietId(data.dietId);
                        this.props.setDishes(data.dietDishes);

                        console.log(`%c Diet download!`, "color: green");
                    });
                })
                .catch((error) => console.error(error));
        } else {
            this.setState({dietDishes: this.props.diet.dishes}, () => {
                this.downloadDishes();

                console.log(`%c Diet download!`, "color: green");
            });
        }


        this.setState({user: this.props.user}, () => {
            if (this.state.user.parameters.gender !== undefined && this.state.user.parameters.gender !== null) {
                return
            }

            fetch(`/user/get-param?userId=${this.state.user.userId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
                    },
                })
                .then((res) => {
                    if (res.status !== 200) {
                        console.error("Не верный логин или пароль")
                        return null;
                    }

                    return res.json();
                })
                .then((data) => {
                    if (data !== null) {
                        this.setState({...this.state, user: {...this.state.user, parameters: data}}, () => {
                            console.log(this.state.user)
                            this.props.onAddUser(this.state.user)
                        })
                    }
                });
        })
    }

    takeDish(dish) {
        console.log(dish);
        this.props.setTakeDish(dish);
        this.props.handleNavigate(`/NutritionologyClient/#/PageDish`);
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

    downloadDocument() {
        fetch('/diet/document?id=E183F86B-6DF1-4B69-A33E-9F738ABFD2D4', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
                'responseType': 'blob'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob(); // Получаем ответ в виде Blob
            })
            .then(blob => {
                // Создаем объект URL для Blob
                const url = window.URL.createObjectURL(blob);

                // Создаем ссылку для скачивания файла
                const a = document.createElement('a');
                a.href = url;
                a.download = 'diet.xls'; // Имя файла для скачивания
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
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

                        {
                            this.props.user.parameters !== undefined && this.props.user.parameters !== null && this.props.user.parameters.gender !== undefined &&
                            <div className={"show_menu_header_params_1_1"}>
                                <div>Пол: {this.props.user.parameters.gender.fullName}</div>
                                <div>Рост: {this.props.user.parameters.height} см</div>
                                <div>Вес: {this.props.user.parameters.weight} кг</div>
                            </div>
                        }
                    </div>

                    <div className={"show_menu_header_params_1_1"}>
                        <div>
                            <div>Любимые продукты: <select></select></div>
                            <div>Нелюбимые продукты: <select></select></div>
                        </div>

                        <div>Количество приемов пищи: {this.props.user.parameters.countMealTimeInDay}</div>

                        <button onClick={this.downloadDocument}>Скачать отчет</button>
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
        diet: state.diet,
        user: state.user
    }),
    dispatch => ({
        setTakeDish: (dish) => dispatch(setTakeDish(dish)),
        setDietId: (dietId) => dispatch(setDietId(dietId)),
        setDishes: (dishes) => dispatch(setDishes(dishes)),
        onAddUser: (user) => dispatch(addUser(user)),
        handleNavigate: (page) => dispatch(goToPage(page))
    })
)(ShowMenu);
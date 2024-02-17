import React, {Component} from "react";
import Header from "../Header/Header";

import './CreateParameter.css'
import Footer from "../Footer/Footer";

class CreateParameter extends Component {

    state = {
        parameter: {
            weight: 60,
            height: 0,
            to_weight: 60,
            gender: {
                shortName: '',
                fullName: ''
            },
            age: 0,
            like_products: {},
            problem_products: {},
            count_meal_time_in_day: 0,
            activity: [
                {
                    id: '',
                    name: 'В офисе'
                },
                {
                    id: '',
                    name: 'Много двидагаюсь'
                },
                {
                    id: '',
                    name: 'Тренируюсь 2 - 3 раза в неделю'
                },
                {
                    id: '',
                    name: 'Тренируюсь более 5 раз в неделю'
                }
            ],
            target: [
                {
                    name: 'Похудеть'
                },
                {
                    name: 'Поддержание формы'
                },
                {
                    name: 'Набирание мышечной массы'
                }
            ]
        },
        // current_parameter: "gender" // ToDo change to deploy
        current_parameter: "target"
    }

    //#region Gender

    getGender(gender) {

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

    handleMinChange = event => {
        event.preventDefault();

        const value = parseFloat(event.target.value);
        // the new min value is the value from the event.
        // it should not exceed the current max value!
        const newMinVal = Math.min(value, 180 - 35);
    };

    getWeight() {
        // weight достается из state

        this.setState({current_parameter: "age_etc"});
    }

    takeWeight() {
        console.log(this.state)
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
                        {this.state.parameter.to_weight}
                    </div>

                    <div>
                        180кг
                    </div>

                </div>
                <input
                    className={"range_parameter"}
                    type="range"
                    value={this.state.parameter.to_weight}
                    min={35}
                    max={180}
                    step={1}
                    // onChange={this.handleMinChange.bind(this)}
                    onInput={event => this.setState({
                        parameter: {
                            ...this.state.parameter, to_weight: event.target.value
                        }
                    })}
                />

                <div className={"button_change_weight"}>
                    <button className={"parameter_button"} onClick={this.getWeight.bind(this)}>
                        Продолжить
                    </button>
                </div>
            </div>
        )
    }

    //#endregion

    //#region Age && height && weight

    getAgeEtc() {
        // age && height && weight достается из state

        this.setState({current_parameter: "activity"});
    }

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

                    {/*ToDo validation!*/}
                    <input type="text" placeholder={"18"} min={1} max={80} required
                           onInput={event => this.setState({
                               parameter: {
                                   ...this.state.parameter, age: event.target.value
                               }
                           })}/>

                    <input type="text" placeholder={"180"} min={100} max={250}
                           onInput={event => this.setState({
                               parameter: {
                                   ...this.state.parameter, height: event.target.value
                               }
                           })}/>

                    <input type="text" placeholder={"60"} onInput={event => this.setState({
                        parameter: {
                            ...this.state.parameter, weight: event.target.value
                        }
                    })}/>

                </div>

                <div className={"button_change_weight"}>
                    <button className={"parameter_button age_etc_button"} onClick={this.getAgeEtc.bind(this)}>
                        Продолжить
                    </button>
                </div>
            </div>
        )
    }

    //#endregion

    //#region Activity

    getActivity(activity) {

        this.setState({current_parameter: "target"});
    }

    takeActivity() {
        return (
            <div className={"parameter_info"}>
                <div className={"par_info_input"}>
                    Опишите свою активность
                </div>


                <div className={"activity_change"}>
                    {
                        this.state.parameter.activity.map((activity) => {
                            return <button className={"activity_change_button"}
                                           onClick={this.getActivity.bind(this, activity)}>
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

        // todo кинуть запрос на запрос
        this.setState({current_parameter: "target"});
        window.location = '/';
    }

    takeTarget() {
        return (
            <div className={"parameter_info"}>
                <div className={"par_info_input"}>
                    Выберите цель
                </div>

                <div className={"activity_change"}>
                    {
                        this.state.parameter.target.map((t) => {
                            return <button className={"activity_change_button"}
                                           onClick={this.getTarget.bind(this, t)}>
                                {t.name}
                            </button>
                        })
                    }
                </div>
            </div>
        )
    }

    //#endregion

    showCurrentParameter() {
        console.log(this.state)
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
        }
    }

    render() {
        return (
            <>
                <Header/>

                <div className={"take_parameter"}>
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

export default CreateParameter;
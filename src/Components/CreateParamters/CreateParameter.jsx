import React, {Component} from "react";
import Header from "../Header/Header";

class CreateParameter extends Component {

    state = {
        parameter: {
            weight: 0,
            height: 0,
            gender: {
                shortName: '',
                fullName: ''
            },
            age: 0,
            like_products: {},
            problem_products: {},
            count_meal_time_in_day: 0,
            activity: {
                name: ''
            },
            target: {
                name: ''
            }
        }
    }

    render() {
        return(
            <>
                <Header/>

                <h2>Выберите параметры:</h2>

                <form action="">
                    <div>Рост:</div>
                    <input type="number"/>

                    <div>Возраст:</div>
                    <input type="number"/>

                    <div>Вес:</div>
                    <input type="number"/>

                    <div>Пол:</div>

                    <div>Цель:</div>

                    <div>Активность:</div>

                    <div>Предпочитаемые продукты:</div>

                    <div>Нежелательные продукты:</div>

                    <div>Количество приемов в день:</div>

                </form>
            </>
        )

    }
}
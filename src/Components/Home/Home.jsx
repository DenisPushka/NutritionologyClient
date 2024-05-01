import {Component} from "react";
import Header from "../Header/Header";
import ".//Home.css";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";
import {goToPage, setMealTime} from "../../actions";

// Главная (Домашняя страница).
class Home extends Component {

    constructor(props) {
        super(props);
    }

    getDishes(nameMealTime) {
        console.log(nameMealTime)
        let mres = {};

        switch (nameMealTime) {
            case 'Завтрак':
                mres = {mealTimeId: 'E402BAC4-B55A-4FB4-94A9-7B4F8ED85E3B', name: nameMealTime}
                break;
            case 'Обед':
                mres = {mealTimeId: 'A48C50D5-37F6-4F22-9631-17B8198430A2', name: nameMealTime}
                break
            case 'Полдник':
                mres = {mealTimeId: 'CD10FCC3-BA04-4755-9AA0-97CB318D88E8', name: nameMealTime}
                break
            case 'Ужин':
                mres = {mealTimeId: '6B294088-CAD0-47DA-B6B5-2DDBCE45A805', name: nameMealTime}
                break
            case 'Сонник':
                mres = {mealTimeId: 'CADE8877-0338-4D41-AE3D-B2608346BB83', name: nameMealTime}
                break
        }

        this.props.setMealTime(mres)
        this.props.handleNavigate(`/NutritionologyClient/#/PageDishesOnMealTime`)
    }

    render() {
        return (
            <div>
                <Header/>

                <body>
                <div className={"container_body"}>

                    <div>
                        <b className={"subTittle"}>Дни недели</b>

                        <div className={"blocks"}>
                            <div className={"block"}>ПН</div>
                            <div className={"block"}>ВТ</div>
                            <div className={"block"}>СР</div>
                            <div className={"block"}>ЧТ</div>
                            <div className={"block"}>ПТ</div>
                            <div className={"block"}>СБ</div>
                            <div className={"block"}>ВС</div>

                        </div>
                        <hr/>

                    </div>

                    <div>
                        <b className={"subTittle"}> Время еды </b>

                        <div className={"blocks"}>
                            <button className={"block"} onClick={() => this.getDishes("Завтрак")}>
                                Завтрак
                            </button>
                            <button className={"block"} onClick={() => this.getDishes("Обед")}>
                                Обед
                            </button>
                            <button className={"block"} onClick={() => this.getDishes("Полдник")}>
                                Полдник
                            </button>
                            <button className={"block"} onClick={() => this.getDishes("Ужин")}>
                                Ужин
                            </button>
                            <button className={"block"} onClick={() => this.getDishes("Сонник")}>
                                Сонник
                            </button>
                        </div>

                        <hr/>
                    </div>

                    {/*<div>*/}
                    {/*    <b className={"subTittle"}> Блюдо </b>*/}

                    {/*    <div className={"blocks"} c>*/}
                    {/*        <div className={"block"}>Крем-суп + напиток</div>*/}
                    {/*        <div className={"block"}>Салат + напиток</div>*/}
                    {/*        <div className={"block"}>Горячее + напиток</div>*/}
                    {/*    </div>*/}

                    {/*    <hr/>*/}
                    {/*</div>*/}

                    <div>
                        <b className={"subTittle"}> Выберите команию</b>

                        <div className={"blocks"}>
                            <div className={"block"}>Компания</div>
                            <div className={"block"}>Компания</div>
                            <div className={"block"}>Компания</div>
                        </div>

                        <hr/>
                    </div>
                </div>
                </body>

                <Footer/>
            </div>
        );
    }
}

export default connect(
    state => ({
        mealTime: state.mealTime
    }),
    dispatch => ({
        handleNavigate: (page) => dispatch(goToPage(page)),
        setMealTime: (mealTime) => dispatch(setMealTime(mealTime))
    })
)(Home)
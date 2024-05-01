import React, {Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./PK.css";
import CreateParameter from "../CreateParamters/CreateParameter";
import {connect} from "react-redux";
import {addUser, goToPage} from "../../actions";

// Личный кабинет.
class PK extends Component {

    state = {
        // Пользователь.
        user: {
            userId: "",
            email: "",
            password: "",
            photo: null,
            subscription: {
                subscriptionId: "",
                name: "",
                price: 0
            },
            phone: "",
            customer: {
                customerId: "",
                name: "",
                lastName: ""
            },

            // Юр. лицо.
            company: {
                companyId: "",
                name: ""
            },
            parameters: {}
        },
    };

    componentDidMount() {
        this.setState({user: this.props.user}, () => {
            if (this.state.user.parameters !== null) {
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

    render() {
        return (
            <div>

                <Header/>

                <div className={"containerPK"}>

                    <div className={"photo_pk"}>
                        <div>
                            Фото {this.state.user.photo}
                        </div>

                        <button>
                            Изменить фото
                        </button>
                    </div>

                    <div className={"parameter_in_pk"}>

                        {/*Юр лицо.*/}
                        {
                            this.state.user.customer !== undefined && this.state.user.customer !== null && this.state.user.customer.name !== undefined &&
                            <div>
                                {/*<div>*/}
                                {/*    Имя: {this.state.user.customer.name}*/}
                                {/*</div>*/}
                                Имя:
                                <input type="text" placeholder={this.state.user.customer.name}/>

                                <br/>
                                {/*<div>*/}
                                {/*    Фамилия: {this.state.user.customer.lastName}*/}
                                {/*</div>*/}
                                Фамилия:
                                <input type="text" placeholder={this.state.user.customer.lastName}/>

                            </div>
                        }

                        {/*Физ лицо.*/}
                        {
                            this.state.user.company !== undefined && this.state.user.company !== null &&
                            <div>
                                <div>
                                    Название: {this.state.user.company.name}
                                </div>
                                <input type="text"/>
                            </div>
                        }

                        {/* Общие данные.*/}
                        {
                            <div>
                                {/*<div>*/}
                                {/*    Почта: {this.state.user.email}*/}
                                {/*</div>*/}
                                Почта:
                                <input type="text" placeholder={this.state.user.email}/>

                                <br/>

                                <div className={'show_menu_header_params_1_PARAM'}>
                                    Подписка:
                                </div>

                                <div>
                                    {
                                        this.state.user.subscription !== null &&
                                        <div>
                                            <div>
                                                Название подписки: {this.state.user.subscription.name}
                                            </div>

                                            <div>
                                                Цена: {this.state.user.subscription.price}
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        }

                        <div>
                            <div className={'show_menu_header_params_1_PARAM'}>
                                Параметры:
                            </div>
                            <hr/>
                            <div>Рост (см.): {this.state.user.parameters.height}</div>
                            <div>Вес (кг.): {this.state.user.parameters.weight}</div>
                            <div>Возраст: {this.state.user.parameters.age}</div>
                            <div>Любимые продукты: </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        onAddUser: (user) => dispatch(addUser(user)),
        handleNavigate: (page) => dispatch(goToPage(page))
    })
)(PK);
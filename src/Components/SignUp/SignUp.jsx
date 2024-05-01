import {Component} from "react";
import Header from "../Header/Header";
import "./SignUp.css";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";
import {addUser, goToPage} from "../../actions";

// Регистрация.
class SignUp extends Component {

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
            phone: ""
        },

        // Физ. лицо.
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
        // физ/юр лицо.
        isCustomer: true
    };

    postNewUser() {
        let user = JSON.stringify({
            userId: "",
            photo: this.state.user.photo,
            phone: this.state.user.phone,
            subscription: {
                subscriptionId: "75801D9F-EC46-4D2E-A450-0D9DCE4CD6B4",
                name: "Бесплатная",
                price: 0
            },
            customer: {
                customerId: "",
                name: this.state.customer.name,
                lastName: this.state.customer.lastName
            },
            company: {
                companyId: "",
                name: this.state.company.name
            },
            userRole: {
                userRoleId: "DE2A8343-A536-4AEA-93F1-27F392EC8029",
                name: "USER"
            },
            email: this.state.user.email,
            passwordHash: this.state.user.password,
        });

        console.log(user)

        fetch('/user/signUp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: user
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // this.props.onAddUser(data);
                // this.props.handleNavigate("/NutritionologyClient/#/")
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Header/>

                <div className={"containerSignUp"}>

                    <div>
                        <button style={{marginRight: 10}} onClick={() => this.setState({isCustomer: true})}>
                            Физ лицо
                        </button>

                        <button style={{marginLeft: 10}} onClick={() => this.setState({isCustomer: false})}>
                            Юр лицо
                        </button>

                    </div>

                    {/*Для пользователя.*/}
                    {
                        this.state.isCustomer &&
                        <form action="" id={"formForCustomer"} className={"formSignUp"}>
                            <div>
                                Имя:
                            </div>
                            <input
                                type="text"
                                id="formCustomerFirstName"
                                required
                                placeholder="Имя"
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, customer:
                                            {
                                                ...this.state.customer, name: data.target.value
                                            }
                                    })
                                }}
                            />

                            <div>
                                Фамилия:
                            </div>
                            <input
                                type="text"
                                id="formCustomerLastName"
                                required
                                placeholder="Фамилия"
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, customer:
                                            {
                                                ...this.state.customer, lastName: data.target.value
                                            }
                                    })
                                }}
                            />

                            <div>
                                Почта:
                            </div>
                            <input
                                type="text"
                                id="formCustomerEmail"
                                required
                                placeholder="qwert@mail.com"
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, user:
                                            {
                                                ...this.state.user, email: data.target.value
                                            }
                                    })
                                }}
                            />

                            <div>
                                Пароль:
                            </div>
                            <input
                                type="text"
                                id="formCustomerPassword"
                                required
                                placeholder="***"
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, user:
                                            {
                                                ...this.state.user, password: data.target.value
                                            }
                                    })
                                }}
                            />

                            <div>
                                Фото:
                            </div>
                            <input type="file" id="formCustomerPhoto" required placeholder=""/>

                            <div>
                                Телефон:
                            </div>
                            <input
                                type="text"
                                id="formCustomerPhone"
                                required
                                placeholder="+(111) 111 - 11 - 11"
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, user:
                                            {
                                                ...this.state.user, phone: data.target.value
                                            }
                                    })
                                }}
                            />
                        </form>
                    }

                    {/*Для компании.*/}
                    {
                        !this.state.isCustomer &&
                        <form action="" id={"formForCompany"} className={"formSignUp"}>
                            <div>
                                Название компании:
                            </div>
                            <input
                                type="text"
                                id="formCompanyName"
                                required
                                placeholder="Название"
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, company:
                                            {
                                                ...this.state.company, name: data.target.value
                                            }
                                    })
                                }}
                            />

                            <div>
                                Почта:
                            </div>
                            <input
                                type="text"
                                id="formCompanyEmail"
                                required
                                placeholder="Почта"
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, user:
                                            {
                                                ...this.state.user, email: data.target.value
                                            }
                                    })
                                }}
                            />

                            <div>
                                Пароль:
                            </div>
                            <input
                                type="text"
                                id="formCompanyPassword"
                                required
                                placeholder="***"
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, user:
                                            {
                                                ...this.state.user, password: data.target.value
                                            }
                                    })
                                }}
                            />

                            <div>
                                Фото:
                            </div>
                            <input type="file" id="formCompanyPhoto" required placeholder=""/>

                            <div>
                                Телефон:
                            </div>
                            <input
                                type="text"
                                id="formCompanyPhone"
                                required
                                placeholder=""
                                onChange={(data) => {
                                    this.setState({
                                        ...this.state, user:
                                            {
                                                ...this.state.user, password: data.target.value
                                            }
                                    })
                                }}
                            />
                        </form>
                    }

                    <button onClick={this.postNewUser.bind(this)}>
                        Отправить
                    </button>

                </div>

                <Footer/>
            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.user,
    }),
    dispatch => ({
        onAddUser: (user) => dispatch(addUser(user)),
        handleNavigate: (page) => dispatch(goToPage(page))
    })
)(SignUp);
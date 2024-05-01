import {Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LogIn.css";
import {connect, useDispatch} from "react-redux";
import {addUser, goToPage} from "../../actions";

// Атворизация.
class LogIn extends Component {

    state = {
        /**
         * User auth.
         * */
        login: "",
        password: ""
    };

    constructor(props) {
        super(props);

        this.checkLogin = this.checkLogin.bind(this);
    }

    /**
     * Send request to server with form's login.
     * */
    async checkLogin(event) {
        event.preventDefault()

        fetch(`/user/login?login=${this.state.login}&password=${this.state.password}`,
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
                    this.props.onAddUser(data)
                    this.props.handleNavigate("/NutritionologyClient/#/");
                }
            });
    }

    render() {
        return (
            <div>
                <Header/>

                <div className="login">
                    <h2>Вход</h2>
                    <form action="" className="login-form" id={"login_form"}>

                        <div> Логин</div>
                        <input
                            type="text"
                            name="login_input"
                            id="login_input"
                            onChange={(data) => this.setState({login: data.target.value})}
                            placeholder="Логин"
                        />

                        <div> Пароль</div>
                        <input
                            type="text"
                            name="password_input"
                            id="password_input"
                            onChange={(data) => this.setState({password: data.target.value})}
                            placeholder="Пароль"
                        />

                    </form>
                    <button type="button" className="button_input_login" onClick={this.checkLogin}>Войти</button>
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
)(LogIn);
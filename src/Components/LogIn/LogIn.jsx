import {Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LogIn.css";
import {connect} from "react-redux";

// Атворизация.
class LogIn extends Component {

    state = {
        /**
         * User auth.
         * */
        user: {
            login: "",
            password: ""
        }
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

        let form = document.getElementById("login_form");

        let data = new FormData();
        data.append("json", JSON.stringify({Login: form.children[1].value, Password: form.children[3].value}));

        fetch("/Account/Login",
            {
                method: 'POST',
                body: data
            })
            .then(res => {
                console.log(1)
                res.json().then(async (data) => {
                    this.setState({user: data});
                    this.props.onAddUser(data);
                    window.location  = '/';
                });
            });
    }

    render() {
        return (<div>

            <Header/>

            <div className="login">
                <h2>Вход</h2>
                <form action="" className="login-form" id={"login_form"}>

                    <div> Логин</div>
                    <input type="text" name="login_input" id="login_input" placeholder="Логин"/>

                    <div> Пароль</div>
                    <input type="text" name="password_input" id="password_input" placeholder="Пароль"/>

                </form>
                <button type="button" className="button_input_login" onClick={this.checkLogin}>Войти</button>
            </div>

            <Footer/>
        </div>);
    }
}

export default connect(
    state => ({
        user: state.user,
    }),
    dispatch => ({
        onAddUser: (user) => dispatch({type: 'ADD_USER', payload: user})
    })
)(LogIn);
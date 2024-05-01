import {Component} from "react";
import {Nav} from "react-bootstrap";
import ".//Header.css";
import {connect} from "react-redux";
import {goToPage} from "../../actions";

// Шапка.
class Header extends Component {


    /**
     * Показывает меню при нажатии на "гамбургер".
     */
    // async showLittleMenu() {
    //     let openDropdown = document.getElementById('navId');
    //
    //     openDropdown.className = openDropdown.className !== 'show' ? 'show' : 'hide';
    //
    //     if (openDropdown.className === 'show') {
    //         window.setTimeout(function () {
    //             openDropdown.style.opacity = 1;
    //             openDropdown.style.transform = 'translateY(0px)';
    //         }, 0);
    //     } else if (openDropdown.className === 'hide') {
    //         openDropdown.style.opacity = 0.2;
    //         openDropdown.style.transform = 'translateY(-500px)';
    //     }
    // }

    /**
     * Проверка на скрытие "гамбургера".
     */
    // async checkOpenMenu() {
    //     window.onclick = (event: MouseEvent) => {
    //         if (!event.target.matches('.hamburger')) {
    //             let openDropdown = document.getElementById('navId');
    //             if (openDropdown.className === 'show') {
    //                 openDropdown.style.opacity = 0;
    //                 openDropdown.style.transform = 'translateY(-500px)';
    //                 openDropdown.className = 'hide';
    //             } else {
    //                 openDropdown.style.opacity = 0.2;
    //                 openDropdown.style.transform = 'translateY(-500px)';
    //             }
    //         }
    //     };
    // }


    render() {

        return (<>
            {/*<EventChangeWindow/>*/}

            <header className={"container_header"}>

                <Nav.Link onClick={() => this.props.handleNavigate("/NutritionologyClient/#/")}>
                    <div className={["name", "logo"].join(' ')}>
                        Nutritionology
                    </div>
                </Nav.Link>

                {
                    this.props.user.email !== undefined && this.props.user.email !== ''
                        ? (
                            <>
                                <div>
                                    <Nav.Link onClick={() => this.props.handleNavigate("/NutritionologyClient/#/ShowMenu")}>
                                        Мой рацион
                                    </Nav.Link>
                                </div>

                                <div>
                                    <Nav.Link onClick={() => this.props.handleNavigate("/NutritionologyClient/#/PK")}>
                                        Личный кабинет
                                    </Nav.Link>
                                </div>

                                {
                                    (
                                        this.props.user.company !== null
                                        || (this.props.user.userRole !== undefined && this.props.user.userRole !== null
                                            && this.props.user.userRole.name === 'ADMIN')
                                    ) &&
                                    <div><Nav.Link href="/NutritionologyClient/#/CreateDish">Создание блюда</Nav.Link></div>
                                }
                            </>
                        ) : (
                            <div className={"login_and_reg"}>
                                <div><Nav.Link href="/NutritionologyClient/#/SignUp">Регистрация</Nav.Link></div>
                                <div><Nav.Link href="/NutritionologyClient/#/LogIn">Вход</Nav.Link></div>
                            </div>
                        )
                }
            </header>
        </>);
    }
}

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        handleNavigate: (page) => dispatch(goToPage(page))
    })
)(Header);
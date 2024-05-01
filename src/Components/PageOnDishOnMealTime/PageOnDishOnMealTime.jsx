import {Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";
import './PageOnDishOnMealTime.css';

class PageOnDishOnMealTime extends Component {

    state = {
        dishes: []
    }

    componentDidMount() {
        console.log(JSON.stringify(this.props.mealTime))
        if (this.props.mealTime.name === "")
            return;

        fetch(`/dish/get-dishes-by-meal-time`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
            },
            body: JSON.stringify(this.props.mealTime)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({dishes: data})
            })
            .catch(e => console.log(e))
    }

    renderDish(dish) {
        return (
            <div className={"blockDish"}>
                {dish.name}
                <br/>
                <img
                    src={`data:image/jpeg;charset=utf-8;base64,${dish.photos[0]?.data}`} alt={""}
                    style={{height: "120px", borderRadius: "10px", marginTop: "5px"}}
                />
            </div>
        )
    }

    render() {
        console.log(this.state.dishes)
        return (
            <>
                <Header/>

                <div style={{padding: "0 5vw", color: "#f8f8d9"}}>
                    {
                        this.props.mealTime.name
                    }
                </div>

                <hr/>

                <div className={"bodyBlockDish"}>
                    {
                        this.state.dishes.length !== 0 &&
                        this.state.dishes.map(this.renderDish)
                    }
                </div>

                <Footer/>
            </>
        )
    }
}

export default connect(
    state => ({
        mealTime: state.mealTime
    })
)(PageOnDishOnMealTime);
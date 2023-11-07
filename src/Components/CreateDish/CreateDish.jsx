import { Component } from "react";
import Header from "../Header/Header";
import "./CreateDish.css"

class CreateDish extends Component {

    render() {
        return (
            <>
                <Header />

                <div className="body_create_dish">
                    <div className="container_up">


                        <div className="div1">Номер рецептуры</div>
                        <div className="div2">Наименование кулинарного изделия</div>
                        <div className="div3">Наименование номенклатуры</div>
                        <div className="div4">Признак приема пищи</div>
                        <div className="div5">Количество порций на цикл производства</div>



                        <input className="div6" type="text" />
                        <input className="div7" type="text" />
                        <input className="div8" type="text" />

                        <div className="div9">Вес одной порции</div>
                        <input className="div10" type="text" />
                        <input className="div11" type="text" />



                        <div className="div12" >Классификация</div>
                        <div className="div13" >Статус</div>
                        <div className="div14" >Конфиденциальность</div>

                        <div className="div15" >Основная / вспомогательная</div>
                        <div className="div16" >Активная / черновик / архив</div>
                        <div className="div17" >Открытая / закрытая</div>

                        <div className="div18">Описание технологии</div>


                        <div>Артикул сырья</div>
                        <div>Происхождение сырья</div>
                        <div>Наименования сырья</div>
                        <div>Ед. изм.</div>
                        <div>Расход сырья и полуфабрикатов</div>
                        <div>на цикл производства</div>
                        <div>на производство</div>
                        
                        <div>брутто</div>
                        <div>нетто</div>
                        <div>брутто</div>
                        <div>нетто</div>

                        <div>Тип холодной обработки</div>
                        <div>Тип тепловой обработки</div>


                         <div>Итого по ингридиентам</div>
                         <div>Выход готово блюда</div>
                         <div>Коэффициент потерь</div>

                         <div>Сохранить</div>
                         <div>Сохранить как копию</div>
                         <div>Химический состав</div>

                         <div>+</div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateDish;
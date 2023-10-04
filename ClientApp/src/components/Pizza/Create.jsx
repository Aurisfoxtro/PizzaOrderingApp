import React, { Component } from "react";
import axios from "axios";

export class Create extends Component{

    constructor(props){
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            id: '',
            size: '',
            ingredients: [],
            price: '' 
        }
    }

    onChangeId(e){
        this.setState({
            id: e.target.value
        })
    }

    onChangeSize(e){
        this.setState({
            size: e.target.value
        })
    }

    onChangeIngredients(e){
        this.setState({
            ingredients: e.target.value
        })

    }

    onSubmit(e){
        e.preventDefault();
        const {history} = this.props;

        let pizzaObj = {
            id: this.state.id,
            size: this.state.size,
            ingredients: this.state.ingredients
        }

        axios.post("api/Pizzas/AddPizza", pizzaObj).then(result => {
            history.push('/pizzas');
        })
    }

    render(){
        return(
            <div>
            <form action="">
              <p>Id:</p>
              <input type="text" id="id" name="id"></input><br></br>
              <p>Pasirinkite picos dydį:</p>
              <input type="radio" id="maža" name="picos_dydis" value="Maža"></input>
              <label for="maža">Maža</label><br></br>
              <input type="radio" id="vidutinė" name="picos_dydis" value="Vidutinė"></input>
              <label for="vidutinė">Vidutinė</label><br></br>
              <input type="radio" id="didelė" name="picos_dydis" value="Didelė"></input>
              <label for="didelė">Didelė</label><br></br>
              <label for="ingredients">Pasirinkite picos ingredientus:</label>
              <br></br>
              <select name="ingredients" id="ingredients" multiple>
                <option value="jautiena">Jautiena</option>
                <option value="saliamis">Saliamis</option>
                <option value="vištiena">Vištiena</option>
                <option value="šoninė">Šoninė</option>
                <option value="kumpis">Kumpis</option>
                <option value="tunas">Tunas</option>
                <option value="lašiša">Lašiša</option>
                <option value="sūris">Sūris</option>
                <option value="mocarela">Mocarela</option>
                <option value="ananasai">Ananasai</option>
                <option value="alyvuogės">Alyvuogės</option>
                <option value="pomidorai">Pomidorai</option>
                <option value="agurkai">Agurkai</option>
                <option value="pievagrybiai">Pievagrybiai</option>
                <option value="svogūnai">Svogūnai</option>
                <option value="jalapenas">Jalapenas</option>
                <option value="paprika">Paprika</option>
              </select>
              <br></br>
              <input type="submit" value="Užsakyti"></input>
              </form>     
          </div>
        )
    }

}
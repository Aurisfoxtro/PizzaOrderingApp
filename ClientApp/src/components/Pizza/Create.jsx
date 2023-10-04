import React, { Component } from "react";
import axios from "axios";

export class Create extends Component{

    constructor(props){
        super(props);

        this.onPizzaCreate = this.onPizzaCreate.bind(this);

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
        //console.log(e.target);
        //console.log("------------");
        //console.log(e.target.value);
        this.setState({
            size: e.target.value
        })
    }

    onChangeIngredients(e){

        var options = document.getElementById('ingredients').selectedOptions;
        var values = Array.from(options).map(({ value }) => value);
        //console.log(values);

        this.setState({
            ingredients: values
        })

    }
    
   onPizzaCreate()
    {
        const {history} = this.props;
        history.push('/create');
    }
    
    onSubmit(e){
        e.preventDefault();

        const {history} = this.props;

        let pizzaObj = {
            id: this.state.id,
            size: this.state.size,
            ingredients: this.state.ingredients
        }
        //console.log(pizzaObj);

        axios.post("api/Pizzas/AddPizza", pizzaObj).then(result => {
            history.push('/pizzas');
        })
    }

    render(){
        return(
            <div>
            <form onSubmit={this.onSubmit}>
              <p>Id:</p>
              <input type="text" id="id" name="id" value={this.state.id} onChange={this.onChangeId}></input><br></br>
              <p>Pasirinkite picos dydį:</p>
              <input type="radio" id="maža" name="picos_dydis" value="Maža" onChange={this.onChangeSize}></input>
              <label for="maža">Maža</label><br></br>
              <input type="radio" id="vidutinė" name="picos_dydis" value="Vidutinė" onChange={this.onChangeSize}></input>
              <label for="vidutinė">Vidutinė</label><br></br>
              <input type="radio" id="didelė" name="picos_dydis" value="Didelė" onChange={this.onChangeSize}></input>
              <label for="didelė">Didelė</label><br></br>
              <label for="ingredients">Pasirinkite picos ingredientus:</label>
              <br></br>
              <select name="ingredients" id="ingredients" multiple onChange={this.onChangeIngredients}>
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
              <input type="submit" value="Užsakyti" class="btn btn-primary"></input>
              </form>
                 
          </div>
        )
    }

}
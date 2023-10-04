import React, {Component} from 'react';
import axios from 'axios';

export class Pizzas extends Component
{
    constructor(props){
        super(props);

      //  this.onPizzaCreate = this.onPizzaCreate.bind(this);

        this.state = {
            pizzas: [],
            loading: true,
            failed: false,
            error: ''
        }
    }

    componentDidMount(){
        this.populatePizzasData();
    }

    populatePizzasData(){
        axios.get("api/Pizzas/GetPizzas").then(result => {
            const response = result.data;
            this.setState({pizzas: response, loading: false, error: ""});
        }).catch(error => {
            this.setState({pizzas: [], loading: false, failed: true, error: "Picų neužkrovė!"});
        });
    }

    renderAllPizzasTable(pizzas){
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Dydis</th>
                        <th>Ingredientai</th>
                        <th>Kaina</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pizzas.map(pizza => (
                            <tr key={pizza.id}>
                                <td>{pizza.id}</td>
                                <td>{pizza.size}</td>
                                <td>{pizza.ingredients}</td>
                                <td>{pizza.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    render(){

        let content = this.state.loading ? (
            <p>
                <em>Kraunasi...</em>
            </p>
        ):(
            this.renderAllPizzasTable(this.state.pizzas)
        )

        return(
            <div>
                {content}  
            </div>
        );
    }
}
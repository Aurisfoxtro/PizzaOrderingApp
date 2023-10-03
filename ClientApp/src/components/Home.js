import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <form action="/action_page.php">
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
    );
  }
}

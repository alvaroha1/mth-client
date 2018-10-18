import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
const mapInfo = require('./mapInfo.json');


export default class CitySelector extends Component {
  setCity = (value) => {
    const { name, latitude, longitude } = mapInfo.mapInfo.filter(obj => obj.name === value.target.value )[0];
    this.setState({
      city: name,
      centerLatitude: latitude,
      centerLongitude: longitude,
    }, () => {})
  }

  render () {
    return (
      <article className="message is-link">
        <div className="message-header">
        <h4><strong>City</strong></h4>
        </div>
        <div className="message-body">
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth is-link">
                <select name="city" onChange={this.setCity}>
                  <option >Select one</option>
                  <option value="ajaccio">Ajaccio</option>
                  <option value="marseille">Marseille</option>
                  <option value="nice">Nice</option>
                  <option value="cannes">Cannes</option>
                  <option value="montpellier">Montpellier</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }
};

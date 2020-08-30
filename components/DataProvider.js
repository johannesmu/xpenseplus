import React, {Component} from 'react';
import * as Data from '../data/data.json'

export class DataProvider extends Component {
  getData = async () => {
    return await Data
  }
  render() {
    return null
  }
}
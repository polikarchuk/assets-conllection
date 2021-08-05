import Component from '@glimmer/component';
import constants from "../const/constants";
import { action } from '@ember/object';

export default class Asset extends Component {


  get assetTypes() {
    const assetTypesItems = constants.asset_types;
    return Object.keys(assetTypesItems).map((key) => {
      return assetTypesItems[key];
    });
  }

  @action
  onchange(e) {
    console.log(e)
  }
}


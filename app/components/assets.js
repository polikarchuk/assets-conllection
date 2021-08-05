import Component from '@glimmer/component';
import constants from "../const/constants";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Assets extends Component {
  @service store;
  list={};

  get assetTypes() {
    const assetTypesItems = constants.asset_types;
    return Object.keys(assetTypesItems).map((key) => {
      return assetTypesItems[key];
    });
  }

  @action
  onchange(e) {
    this.store.findAll('collections', { filter: { type: e } }).then(function(peters) {
      console.log(peters)
    });
  }
}


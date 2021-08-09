import Route from '@ember/routing/route';
import constants from '../const/constants';
import { action } from '@ember/object';

export default Route.extend({
  get assetTypes() {
    const assetTypesItems = constants.asset_types;
    return Object.keys(assetTypesItems).map((key) => {
      return assetTypesItems[key];
    });
  },

  async model() {
    let assetTypes = this.assetTypes;
    let assetList = this.store.findAll('collections');

    return { assetTypes, assetList };
  },

  @action
  onchange(e) {
    return this.store.findAll('collections');
  },
});

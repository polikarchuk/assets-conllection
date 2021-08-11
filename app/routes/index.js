import Route from '@ember/routing/route';
import constants from '../const/constants';

export default class Index extends Route {


  get assetTypes() {
    const assetTypesItems = constants.asset_types;
    return Object.keys(assetTypesItems).map((key) => {
      return assetTypesItems[key];
    });
  }

  async model() {
    let assetTypes = this.assetTypes;
    let assetList = (await this.store.findAll('product')).toArray().slice(0, 50);
    return { assetTypes, assetList };
  }
}

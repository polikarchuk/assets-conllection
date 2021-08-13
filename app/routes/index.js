import Route from '@ember/routing/route';
import constants from '../const/constants';
import { get } from '@ember/object';

export default class Index extends Route {
  queryParams = {
    sortBy: {
      reloadModel: true,
    },
  };

  get assetTypes() {
    const assetTypesItems = constants.asset_types;
    return Object.keys(assetTypesItems).map((key) => {
      return {
        type: assetTypesItems[key].type,
        value: assetTypesItems[key].value,
        isChecked: true,
      };
    });
  }

  async model(params) {
    let assetTypes = this.assetTypes;
    let assetList = (await this.store.findAll('product')).toArray();

    if (params.sortBy) {
      assetList = assetList.sort(this._sortBy.bind(this, params.sortBy));
    }
    return { assetTypes, assetList: assetList.slice(0, 50) };
  }

  _sortBy(key, a, b) {
    if (!(get(a, key) && get(b, key))) {
      return a - b;
    }

    return get(a, key) - get(b, key);
  }
}

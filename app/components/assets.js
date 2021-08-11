import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';

export default class Assets extends Component {

  get _sortAssetList() {
    return this.args.model.assetList
  }

  @sort('_sortAssetList', function (a, b) {
    return a.usedTotalCount - b.usedTotalCount;
  })
  sortAssetList;

}

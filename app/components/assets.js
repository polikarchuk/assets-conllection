import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class Assets extends Component {
  @tracked assetList = [];
  @tracked savedItems = [];
  @tracked isCheckedItem = false;

  constructor() {
    super(...arguments);
    this.assetList = this.args.model.assetList;
  }

  @sort('assetList', function (a, b) {
    return b.usedTotalCount - a.usedTotalCount;
  })
  sortAssetList;

  @action
  onchange(e) {
    let type = Number(e.target.dataset.type);
    if (e.target.checked) {
      this.assetList = [
        ...this.assetList,
        ...this.args.model.assetList.filter((el) => el.type === type),
      ];
    } else {
      this.assetList = this.assetList.filter((el) => el.type !== type);
    }
  }

  @action
  isSaveItem(e){
    this.savedItems.push(this.sortAssetList[e]);
    this.isCheckedItem = true;
  }
}

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
  onchange(checkedList) {
    checkedList || (checkedList = []);
    this.assetList = this.args.model.assetList.filter((el) =>
      checkedList.includes(el.type)
    );
  }

  @action
  isSaveItem(e) {
    this.savedItems.push(this.sortAssetList[e]);
    this.isCheckedItem = true;
  }

  @action
  controlUseButton() {
    console.log('click button');
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class Aside extends Component {

  constructor() {
    super(...arguments);
    this.assetTypes = this.args.assetTypes;
  }

  @action
  filterChanged(item) {
    item.isChecked = !item.isChecked;
    const checkedList = this.assetTypes
      .filter((item) => item.isChecked)
      .map((item) => item.type);
    this.args.onChange?.(checkedList || []);
  }
}

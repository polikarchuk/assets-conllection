import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Card extends Component {
  @tracked showToggleablePopover=false;
  get isTitleIcon() {
    if (this.args.type === 0) {
      return 'Template';
    } else if (this.args.type === 1) {
      return 'Image';
    } else if (this.args.type === 2) {
      return 'Video';
    } else if (this.args.type === 3) {
      return 'PDF';
    } else if (this.args.type === 4) {
      return 'GIF';
    } else if (this.args.type === 5) {
      return 'Article';
    }
  }

  get formatTags() {
    return {
      firstsTags: this.args.tags?.slice(0, 2),
      lastsTags: this.args.tags?.slice(3),
      countTags: this.args.tags?.slice(3).length,
    };
  }


  @action
  togglePopover(){
    this.showToggleablePopover = true;
  }



}

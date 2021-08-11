import Component from '@glimmer/component';

export default class Card extends Component {

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
      return 'PDF';
    } else if (this.args.type === 5) {
      return 'Article';
    }
  }

}

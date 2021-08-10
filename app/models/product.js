import Model, {attr} from '@ember-data/model';

export default class Product extends Model {
  @attr('string') title;
  @attr('number') usedTotalCount;
  @attr('date') createdAt;
  @attr('string') previewImage;
}

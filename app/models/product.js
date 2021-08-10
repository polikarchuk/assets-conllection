import Model, {attr} from '@ember-data/model';

export default class Product extends Model {
  @attr('number') id;
  @attr('string') title;
  @attr('number') usedTotalCount;
  @attr('utc') createdAt;
  @attr('string') previewImage;
}

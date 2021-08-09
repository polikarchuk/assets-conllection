import Model, {attr} from '@ember-data/model';

export default class Collections extends Model {
  @attr('number') id;
  @attr('number') type;
  @attr('string') title;
  @attr('number') usedTotalCount;
  @attr('utc') createdAt;
  @attr('string') previewImage;
}

import Model, {attr} from '@ember-data/model';

export default class Product extends Model {
  @attr('number') type;
  @attr('string') title;
  @attr('number') usedTotalCount;
  @attr('number') createdAt;
  @attr('string') description;
  @attr('string') previewImage;
  @attr('string') originalFileSrc;
  @attr() externalLink;
}

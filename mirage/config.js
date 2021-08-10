
export default function () {
  this.get('/products', function (schema, request) {
    return schema.products.all();
  });
}

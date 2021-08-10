import products from "../fixtures/product";

export default function (server) {
  server.db.loadData({
    products
  });
}


export default function () {
  this.get('/collections', function () {
    return {
      data: [
        {
          "id": 0,
          "type": 2,
          "title": "Sus scrofa",
          "used-total-count": 28,
          "created-at": 1611675869,
          "preview-image": "https://stevensegallery.com/400/300"
        },
      ]
    }
  });
}

const PubSub = require('../../helpers/pub_sub.js');
const Request = require('../../helpers/request.js');

const CategoryDataHandler = function(){
  this.url = 'https://opentdb.com/api_category.php';
  this.categoryArray = null;
}

CategoryDataHandler.prototype.getData = function () {
  const request = new Request(this.url);

  request.get()
    .then((categories) => {
      this.categoryArray = categories;
      console.log(this.categoryArray);
    });
};

module.exports = CategoryDataHandler;

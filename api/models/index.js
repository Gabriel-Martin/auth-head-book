const thinky = require("thinky");

const db = thinky({
  db: "authHeadBook"
});

let User = require("./user")(db);
let Post = require("./post")(db);

module.exports = {
  User: User,
  Post: Post
};

module.exports = db => {
  let Post = db.createModel("Post", {
    message: db.type.string().required(),
    name: db.type.string().required(),
    image: db.type.string().required()
  });

  return Post;
};

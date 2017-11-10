module.exports = {
  method: "POST",
  path: "/api/posts",
  config: {
    handler: function(request, reply) {
      let post = new this.models.Post(request.payload);

      post
        .save()
        .then(post => {
          reply(post);
        })
        .catch(error => reply(error));
    }
  }
};

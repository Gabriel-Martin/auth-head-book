module.exports = {
  method: "GET",
  path: "/api/posts",
  config: {
    handler: function(request, reply) {
      this.models.Post
        .filter({})
        .then(result => reply(result))
        .catch(err => reply(err));
    }
  }
};

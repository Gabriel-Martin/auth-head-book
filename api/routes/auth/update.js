module.exports = {
  method: ["PUT", "PATCH"],
  path: "/api/users/{id}",
  config: {
    handler: function(request, reply) {
      let updatedUser = request.payload;
      let id = request.params.id;

      this.models.User
        .get(id)
        .update(updatedUser)
        .then(result => reply(result))
        .catch(err => reply(err));
    }
  }
};

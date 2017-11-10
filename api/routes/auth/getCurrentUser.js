module.exports = {
  method: "GET",
  path: "/api/users/current",
  config: {
    handler: function(request, reply) {
      let id = request.auth.credentials.id;

      this.models.User
        .get(id)
        .then(result => reply(result))
        .catch(err => {
          console.log(err);
          reply(err);
        });
    }
  }
};

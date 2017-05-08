var connection = require('../db/database');


module.exports = {
  users: {
    get: (user) => {
      return connection.queryAsync(
      //NEED TO FIGURE OUT HOW WE ARE CALLING THIS AITH AUTHENITCATION 
      );
    },
    post: (new_user) => {
      return connection.queryAsync(
        `INSERT INTO users (Name, password, salt) VALUES ('${new_user.name}', '${new_user.password}',
        '${new_user.salt}');`
      );
    }
  },
  dive_sites: {
    get: (sites) => {
      return connection.queryAsync(
        `SELECT * FROM dives;`;
      );
    },
    post: (new_sites) => {
      return connection.queryAsync(
        `INSERT INTO dives (name, longitude, latitude, rating, description)
         VALUES ('${new_sites.name}', '${new_sites.longitude}', '${new_sites.latitude}',
          '${new_sites.rating}, '${new_sites.description}');`
      );
    }
  },
  comments: {
    get: (comments) => {
      return connection.queryAsync(
        `SELECT * FROM comments;`
      );
    }
  }
};


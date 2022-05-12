import pg from 'pg'
import config from "../config.json" assert {type: "json"};
var conString = config.psqlConnectionString //Can be found in the Details pagee

// SELECT 
// 	stocks.symbol as symbol,
// 	users.username as username,
// 	stocks.price as price
// FROM stocks
// JOIN favourites ON favourites.stock_id=stocks.stock_id
// JOIN users ON users.user_id=favourites.user_id;
// WHERE users.username = 'niko';

// const signUp

const signUp = (username, password) => new Promise((resolve, reject) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if (err) {
        console.error('error running query', err);
        client.end();
        reject(err)
        return
      }
      const insertUserQuery = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

      client.query(insertUserQuery, function(err, result) {
        if (err) {
            console.error('error running query', err);
            client.end();
            reject(err)
            return
        }
        // console.log(result);
        resolve(result.rows)
        client.end();
      });
    });
})

const getUsersWithUsernameAndPassword = (username, password) => new Promise((resolve, reject) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if (err) {
        console.error('error running query', err);
        client.end();
        reject(err)
        return
      }
      const insertUserQuery = `select * from users
      where users.username = '${username}' and users.password = '${password}'`

      client.query(insertUserQuery, function(err, result) {
        if (err) {
            console.error('error running query', err);
            client.end();
            reject(err)
            return
        }
        // console.log(result);
        resolve(result.rows)
        client.end();
      });
    });
})


export default { signUp, getUsersWithUsernameAndPassword };

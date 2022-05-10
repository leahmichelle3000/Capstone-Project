import pg from 'pg'

import config from "../config.json";
var conString = config.psqlConnectionString //Can be found in the Details pagee

// SELECT 
// 	stocks.symbol as symbol,
// 	users.username as username,
// 	stocks.price as price
// FROM stocks
// JOIN favourites ON favourites.stock_id=stocks.stock_id
// JOIN users ON users.user_id=favourites.user_id;
// WHERE users.username = 'niko';

const getUsersStocks = (user_id) => new Promise((resolve, reject) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if (err) {
        console.error('could not connect to postgres', err);
        client.end();
        reject(err)
      }
      const getUserStocksQuery = `SELECT 
                stocks.symbol as symbol,
                users.username as username,
                stocks.price as price
            FROM stocks
            JOIN favourites ON favourites.stock_id=stocks.stock_id
            JOIN users ON users.user_id=favourites.user_id
            WHERE users.user_id = '${user_id}';`
    
      client.query(getUserStocksQuery, function(err, result) {
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

const getAllStocks = (user_id) => new Promise((resolve, reject) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if (err) {
        console.error('could not connect to postgres', err);
        client.end();
        reject(err)
      }
      const getAllStocks = `SELECT * from stocks`
    
      client.query(getAllStocks, function(err, result) {
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


export default { getUsersStocks, getAllStocks };

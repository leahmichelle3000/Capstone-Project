import React, {useState, useEffect} from "react";
import 'antd/dist/antd.css';
import { Input,Table } from 'antd';
// import './App.css';

//Text field input basic code from Ant Design
// import { Input } from 'antd';
// export default () => <Input placeholder="Basic usage" />;

let StockTable = ({userId}) => {
    const [stockFormattedDataForTable, setFormattedDataForTable] = useState([])
    const [allStockData, setAllStockData] = useState([])
    const [allStockDataFiltered, setAllStockDataFiltered] = useState([])
    // const [userId, setUserId] = useState()
    // const [stockData, setStockData] = useState([])
    const [tableColumns, setTableColumns] = useState([])



    const favouriteStock = (record) => {
      console.log(record, userId)
      const body = JSON.stringify({
        stock_id: record.id,
        user_id: userId
      })
    
      fetch('http://localhost:3003/stock/favourite', { 
        method: 'POST',
        headers: {
        'Access-Control-Allow-Origin' : '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: body
      }).then(result => {
        console.log(result)
        fetch(`http://localhost:3003/stock/favourites/${userId}`).then(data => {
          return data.json();
        }).then(json => {
          console.log(json)
            const formattedData = json.map((stock, index) => {
                  return {
                      symbol: stock.symbol,
                      // name: stock.shortName,
                      price: "$" + stock.price,
                      id: stock.id,
                      // change: stock.regularMarketChangePercent + "%",
                      // volume: stock.regularMarketVolume + " shares",
                      // sharesOutstanding: stock.sharesOutstanding, 
                      // marketCap: "$" + stock.marketCap,
                      // fullExchangeName: stock.fullExchangeName,
                      key: `${index}`
                  }
              }) 
              setFormattedDataForTable(formattedData)
        })
      })


    }

    //NOTE TO SELF: What does useEffect Hook do? 
    //Tells React that your component needs to do something after render. 
    //React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

    useEffect(() => {
      if (typeof userId === 'undefined') {
        return
      }
        // setUserId(userId)
        console.log(userId)
        userId = userId

      setTableColumns([
        {
            dataIndex: "symbol",
            title: "Symbol",
            key: "symbol"
        },
        //  {
        //     dataIndex: "name",
        //     title: "Name",
        //     key: "name"
        // },
         {
            dataIndex: "price",
            title: "Price",
            key: "price"
        },
        {
          title: 'Favourite',
          key: 'id',
          dataIndex: 'id',
          render: (text, record) => (
           <button style={{backgroundColor: "#f8e7d7", borderRadius: "11px", cursor: "pointer"}} onClick={()=> favouriteStock(record)}>
             Watch
           </button>
          ),
        },
          
        //  {
        //     dataIndex: "change",
        //     title: "Daily Change",
        //     key: "change"
        // },
        //  {
        //     dataIndex: "volume",
        //     title: "Volume",
        //     key: "volume"
        // },
      //    {
      //       dataIndex: "marketCap",
      //       title: "Market Cap",
      //       key: "marketcap"
      //   },
      //    {
      //       dataIndex: "sharesOutstanding",
      //       title: "Shares Outstanding",
      //       key: "sharesout"
      //   },

      //   {
      //     dataIndex: "fullExchangeName",
      //     title: "Exchange",
      //     key: "exchangeName"
      // },
        
    ])
      
       fetch(`http://localhost:3003/stock/favourites/${userId}`).then(data => {
          return data.json();
       }).then(json => {
           const formattedData = json.map((stock, index) => {
                return {
                    symbol: stock.symbol,
                    // name: stock.shortName,
                    price: "$" + stock.price,
                    id: stock.id,
                    // change: stock.regularMarketChangePercent + "%",
                    // volume: stock.regularMarketVolume + " shares",
                    // sharesOutstanding: stock.sharesOutstanding, 
                    // marketCap: "$" + stock.marketCap,
                    // fullExchangeName: stock.fullExchangeName,
                    key: `${index}`
                }
            }) 
            setFormattedDataForTable(formattedData)
       })

       fetch(`http://localhost:3003/stock/`).then(data => {
          return data.json();
       }).then(json => {
         console.log(json)
           const formattedData = json.map((stock, index) => {
                return {
                    symbol: stock.symbol,
                    // name: stock.shortName,
                    price: "$" + stock.price,

                    id: stock.id,
                    // change: stock.regularMarketChangePercent + "%",
                    // volume: stock.regularMarketVolume + " shares",
                    // sharesOutstanding: stock.sharesOutstanding, 
                    // marketCap: "$" + stock.marketCap,
                    // fullExchangeName: stock.fullExchangeName,
                    key: `${index}`
                }
            }) 
            setAllStockData(formattedData)
            setAllStockDataFiltered(formattedData)
       })
    }, [userId]);

    const applyFilter = (filterQuery) => {
      console.log(filterQuery)
      if (filterQuery === "") {
        setAllStockDataFiltered(allStockData)
        return
      } 

      const filterdData = allStockData.filter(stock => {
        return stock.symbol.toLowerCase().includes(filterQuery.toLowerCase())
      })

      setAllStockDataFiltered(filterdData)

    }

    return(
        <>
        <h2>User id = {userId}</h2>
        <div style={{display: "flex"}}>
          <div style={{width: "50%", paddingRight: "20px"}}>
            <h2> All Stocks</h2>
            <input placeholder="Filter Stocks" onChange={e => applyFilter(e.target.value)}/>
            <Table dataSource={allStockDataFiltered} columns={tableColumns} />
          </div>
          <div style={{width: "50%", paddingLeft: "20px"}}>
            <h2> Watchlist</h2>
            <Table  style={{marginTop: "42px"}} dataSource={stockFormattedDataForTable} columns={tableColumns} />
          </div>
        </div>
       
        
        {/* allStockData represents all stocks in the database */}
        {JSON.stringify(allStockData)}

            {/* {stockData.map(stock => (
                <h2>{stock.longName} ${stock.regularMarketPrice}</h2>
            ))} */}
        </>
    )
}

// find a public API (open API) create a route in the backend to fetch from that

export default StockTable


//NOTE TO SELF
// three ways of declaring a function
// 1) const myFunction = function(paramaters) {
// }
// 2) function myFunction(paramaters) {
// }
// 3) const myFunction = (paramaters) => {
// }
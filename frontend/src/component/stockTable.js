import React, {useState, useEffect} from "react";
import 'antd/dist/antd.css';
import { Input,Table } from 'antd';
// import './App.css';

//Text field input basic code from Ant Design
// import { Input } from 'antd';
// export default () => <Input placeholder="Basic usage" />;

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      color: "red"
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      color: "blue"
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: 'Favourite Color',
        dataIndex: 'color',
        key: 'aasdsasda',
    },
  ];

let StockTable = (props) => {
    const [stockFormattedDataForTable, setFormattedDataForTable] = useState([])
    const [allStockData, setAllStockData] = useState([])
    // const [stockData, setStockData] = useState([])
    const [tableColumns, setTableColumns] = useState([
        {
            dataIndex: "symbol",
            title: "Symbol",
            key: "symbol"
        },
         {
            dataIndex: "name",
            title: "Name",
            key: "name"
        },
         {
            dataIndex: "price",
            title: "Price",
            key: "price"
        },
         {
            dataIndex: "change",
            title: "Daily Change",
            key: "change"
        },
         {
            dataIndex: "volume",
            title: "Volume",
            key: "volume"
        },
         {
            dataIndex: "marketCap",
            title: "Market Cap",
            key: "marketcap"
        },
         {
            dataIndex: "sharesOutstanding",
            title: "Shares Outstanding",
            key: "sharesout"
        },

        {
          dataIndex: "fullExchangeName",
          title: "Exchange",
          key: "exchangeName"
      },
        
    ])

    //NOTE TO SELF: What does useEffect Hook do? 
    //Tells React that your component needs to do something after render. 
    //React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

    useEffect(() => {
      if (typeof props.userId === 'undefined') {
        return
      }
       fetch(`http://localhost:3003/stock/favourites/${props.userId}`).then(data => {
          return data.json();
       }).then(json => {
           const formattedData = json.map((stock, index) => {
                return {
                    symbol: stock.symbol,
                    // name: stock.shortName,
                    price: "$" + stock.price,
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
                    // change: stock.regularMarketChangePercent + "%",
                    // volume: stock.regularMarketVolume + " shares",
                    // sharesOutstanding: stock.sharesOutstanding, 
                    // marketCap: "$" + stock.marketCap,
                    // fullExchangeName: stock.fullExchangeName,
                    key: `${index}`
                }
            }) 
            setAllStockData(formattedData)
       })
    }, [props.userId]);

    return(
        <>
        <h2>User id = {props.userId}</h2>
        <Table dataSource={stockFormattedDataForTable} columns={tableColumns} />
        <Input placeholder="Stock Search" />
        
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
import React, { useState, useEffect } from "react";
import fetch from './api/dataService';
import {Table} from './Table'
import "./App.css";

function App() {
const [data, setData] = useState(null);
useEffect(() => { 
  fetch().then((data)=> {             
    const results = calculateInfo(data);      
    setData(results);
  });
},[]);

if (data == null) {
  return <div>Loading...</div>;   
}

return <div>   
    <div className="container">
      <div className="row">
        <div className="col-8">
          <br></br><br></br>
          <Table
            data={data}
             />             
          </div>
        </div>
      </div>     
  </div>
;
}

function calculateRewards(amt){
  let reward = 0;

  if (amt > 100) {    
    reward = 2*(amt)+50;
  } else if (amt > 50 && amt<=100) {
    reward = amt - 50;      
  }
  else{
    reward = 0;
  }
  return reward;
}


function calculateInfo(data) {
const rewardPerTransaction = data.map(transaction=> {
  let reward = calculateRewards(transaction.amt);
  const month = new Date(transaction.transactionDt).getMonth();
  return {...transaction, reward, month};
});
let byCustomer = {};
let totalrewardByCustomer = {};
rewardPerTransaction.forEach(rewardPerTransaction => {
  let {custid, name, month, reward, transactionDt} = rewardPerTransaction;   
  if (!byCustomer[custid]) {
    byCustomer[custid] = [];      
  }    
  if (!totalrewardByCustomer[custid]) {
    totalrewardByCustomer[custid] = 0;
  }
 
  totalrewardByCustomer[custid] += reward;
  
  if (byCustomer[custid][month]) {
    byCustomer[custid][month].reward += reward;
    byCustomer[custid][month].monthNumber = month;
    byCustomer[custid][month].numTransactions++;      
  } else {
    byCustomer[custid][month] = {
      custid,
      name,
      month:new Date(transactionDt).toLocaleString('en-us',{month:'long'}),
      numTransactions: 1,        
      reward
    }
  }    
});

return {
  summaryByCustomer: buildSummaryInfo(byCustomer, totalrewardByCustomer),
  rewardPerTransaction,
};
}

function buildSummaryInfo(byCustomer, totalrewardByCustomer){
let summary = [];
for (var custKey in byCustomer) {    
  byCustomer[custKey].forEach(cRow=> {
    cRow.totalrewardByCustomer = totalrewardByCustomer[custKey];
    summary.push(cRow);
  });    
}
return summary;
}


export default App;

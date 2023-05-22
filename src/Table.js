import React,{Component} from "react";
import ReactTable from 'react-table';
import "react-table/react-table.css";  
import _ from 'lodash';


const montlyColumn = [
    {
      Header:'Customer',
      accessor: 'name',     
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
    },    
    {
      Header:'Month',
      accessor: 'month',
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
    },
    {
      Header: "Num of Transactions",
      accessor: 'numTransactions',
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
    },
    {
      Header:'Reward',
      accessor: 'reward',
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
    },
  ];

  const columns_sub = [
    {
        Header:'Transaction Date',
        accessor:'transactionDt',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
    },
    {
        Header:'Amount',
        accessor:'amt',
        Cell: row => <div style={{ textAlign: "center" }}> ${row.value}</div>
     },
     {
         Header:'Points',
         accessor:'reward',
         Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
     }
    ];
     const yearlyColumn = [
      {
        Header:'Customer',
        accessor: 'name',     
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },    
      {
          Header:'Total Rewards',
          accessor: 'totalrewardByCustomer',
          Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
        }
    ];



export class Table extends Component{

    getUserTransactionInfo = (row) => {
        let byCustMonth = _.filter(this.props.data.rewardPerTransaction, (tRow)=>{    
          return row.original.custid === tRow.custid && row.original.monthNumber === tRow.month;
        });
        return byCustMonth;
      }

     getTotalTransaction(data)  {
      const uniqueTags = [];
      data.map((item) => {
        var findItem = uniqueTags.find((x) => x.custid === item.custid);
        if (!findItem) uniqueTags.push(item);
      });

      return uniqueTags
      }

    render(){
        return(
            <><div>
            <div>
              <h2>Points Rewarded To Customer By Each Month</h2>
              <br></br>
            </div>
            <ReactTable
              showPagination={false}
              data={this.props.data.summaryByCustomer}
              defaultPageSize={this.props.data.summaryByCustomer.length}
              columns={montlyColumn}
              SubComponent={row => {
                return (
                  <ReactTable
                    showPagination={false}
                    defaultPageSize={this.getUserTransactionInfo(row).length}
                    data={this.getUserTransactionInfo(row)}
                    columns={columns_sub} />
                );
              } } />
          </div><div>
              <div>
                <h2>Total Rewarded Points To Customer</h2>
                <br></br>
              </div>
              <ReactTable
                showPagination={false}
                data={this.getTotalTransaction(this.props.data.summaryByCustomer)}
                defaultPageSize={this.getTotalTransaction(this.props.data.summaryByCustomer).length}
                columns={yearlyColumn}
           />
            </div></> 
        )

    }
}

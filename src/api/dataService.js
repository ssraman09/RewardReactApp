

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
      {
        custid: 1,
        name: "Sam",
        amt: 50,
        transactionDt: "05-02-2021"
      },
        {
          custid: 1,
          name: "Sam",
          amt: 210,
          transactionDt: "05-02-2021"
        },
        {
          custid: 2,
          name: "John",
          amt: 125,
          transactionDt: "05-02-2021"
        },
        {
          custid: 1,
          name: "Sam",
          amt: 78,
          transactionDt: "05-21-2021"
        },
        {
          custid: 2,
          name: "John",
          amt: 65,
          transactionDt: "05-30-2021"
        },
        {
          custid: 1,
          name: "Sam",
          amt: 110,
          transactionDt: "06-01-2021"
        },
        {
          custid: 2,
          name: "John",
          amt: 50,
          transactionDt: "06-04-2021"
        },
        {
          custid: 1,
          name: "Sam",
          amt: 25.10,
          transactionDt: "06-21-2021"
        },
        {
          custid: 1,
          name: "Sam",
          amt: 200,
          transactionDt: "06-29-2021"
        },
        {
          custid: 2,
          name: "John",
          amt: 300,
          transactionDt: "06-30-2021"
        },
        {
          custid: 1,
          name: "Sam",
          amt: 230,
          transactionDt: "07-01-2021"
        },
        {
          custid: 2,
          name: "John",
          amt: 89,
          transactionDt: "07-02-2019"
        },
        {
          custid: 1,
          name: "Sam",
          amt: 80,
          transactionDt: "07-03-2021"
        },
        {
          custid: 1,
          name: "Sam",
          amt: 180,
          transactionDt: "07-21-2021"
        },

        {
          custid: 2,
          name: "John",
          amt: 190,
          transactionDt: "07-21-2019"
        }
    ]
  );
};
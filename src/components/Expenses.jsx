function Expenses(props) {
    return (
      <div>
        {props.expenses.map((item, index) => {
          const month = item.date.toLocaleString("en-US", { month: "long" });
          const day = item.date.toLocaleString("en-US", { day: "2-digit" });
          const year = item.date.getFullYear();
          return (
            <div>
              <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
              </div>
              <div key={item.id}>
                <h2>{item.title}</h2>
                <div>${item.amount}</div>
                <button>Change title</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  export default Expenses;
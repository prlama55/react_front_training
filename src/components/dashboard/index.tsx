import React, { Component } from "react";
import Cards from "./Cards";
import Charts from "./Charts";
interface Props {}
interface State {
  chartData: any;
  cardData: any;
}
class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      chartData: { c1: [1, 2, 3] },
      cardData: { title: "Card" },
    };
  }
  render() {
    const { chartData, cardData } = this.state;
    return (
      <div>
        <Cards cardData={cardData} />
        <Charts chartData={chartData} />
      </div>
    );
  }
}

export default Dashboard;

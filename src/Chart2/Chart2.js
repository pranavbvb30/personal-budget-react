import React from "react";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js/auto";

Chart.register(CategoryScale);

function Chart2(props) {
    return (
        <div className="chart-container" style={{width:450, height:600}}>
            <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
            <Pie
                data={props.chartData}
            />
        </div>
    );

}
export default Chart2;
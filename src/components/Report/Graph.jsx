import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import GraphLegend from './GraphLegend';


class Graph extends React.Component {

  render() {
    const { 
      optionA, 
      optionAcount, 
      optionB, 
      optionBcount
    } = this.props.graphStats;

    const optionBcolor = '#c066b1';
    const optionAcolor = '#61a5ff';

    return (
      <div className="graph-container">
        <PieChart
          className={'piechart'}
          data={[
            {
              title: optionA,
              value: optionAcount,
              color: optionAcolor
            },
            {
              title: optionB,
              value: optionBcount,
              color: optionBcolor
            }
          ]}
          label
          labelStyle={{
            fontSize: '7px',
            fontFamily: 'sans-serif'
          }}
          radius={42}
          labelPosition={112}
          animate
        />
        <GraphLegend 
          optionA={optionA} 
          optionAcolor={optionAcolor}
          optionB={optionB}
          optionBcolor={optionBcolor}
        />
      </div>
    );
  }
}

export default Graph;
d3.selectAll('p').style('color', 'blue');

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    var p = d3
      .select('body')
      .selectAll('p')
      .data(data)
      .enter()
      .append('p')
      .style('color', d => {
        if (d.Mean < 0) {
          return 'grey';
        } else if (d.Mean >= 0.0 && d.Mean <= 0.5) {
          return 'green';
        } else {
          return 'red';
        }
      })
      .text(function(d, i) {
        return d.Mean;
      });
  });

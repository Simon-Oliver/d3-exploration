d3.selectAll('p').style('color', 'blue');

fetch('./data.json')
  .then(res => res.json())
  .then(data => console.log(data));

const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const dateArr = (start, end) => {
  let years = end - start;
  let year = start;
  let yearArray = [];
  while (years >= 0) {
    yearArray.push(year);
    year++;
    years--;
  }
  return yearArray;
};

// prettier-ignore
const render = data => {
  svg.selectAll('rect').data(data)
    .enter().append('rect')
    .attr('width', 300)
    .attr('height', 300);
};

d3.csv('./population.csv').then(data => {
  const filtered = data.filter(d => {
    if (d.Year >= 2000 && d.Year <= 2017) {
      return d;
      // render(d.year);
    }
  });
  console.log(filtered);
  render(data);
});

console.log(dateArr(2000, 2017));

// d3.selectAll('p').style('color', 'blue');

// fetch('./data.json')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     var p = d3
//       .select('body')
//       .selectAll('p')
//       .data(data)
//       .enter()
//       .append('p')
//       .style('color', d => {
//         if (d.Mean < 0) {
//           return 'grey';
//         } else if (d.Mean >= 0.0 && d.Mean <= 0.5) {
//           return 'green';
//         } else {
//           return 'red';
//         }
//       })
//       .text(function(d, i) {
//         return d.Mean;
//       });
//   });

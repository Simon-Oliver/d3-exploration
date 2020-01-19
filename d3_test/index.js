const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

d3.csv('./population.csv').then(data => {
  data.forEach(d => {
    if (d.Year === '2016') {
      console.log(d['Country Name'], d.Year, d.Value);
    }
  });
});

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

console.log('Connected');
d3.selectAll('p').style('color', 'blue');

fetch(
  'https://opendata.swiss/api/3/action/package_show?id=automatische-wetterstationen-aktuelle-messwerte'
)
  .then(res => res.json())
  .then(data => console.log(data));

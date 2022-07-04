(function () {

  let btns = document.querySelectorAll('.js-chart-btn');
  let firstBtn = document.querySelector('.js-chart-btn');
  let chartData = JSON.parse(firstBtn.dataset.val);
  let yAxisTitle = firstBtn.dataset.title;

  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btns.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');
      chartData = JSON.parse(btn.dataset.val);
      yAxisTitle = btn.dataset.title;
      handlers.update();
    });
  });

  const labels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: 'rgba(255, 134, 19, 0.1)',
        borderColor: '#FF8613',
        data: chartData,
        borderWidth: 2,
        tension: 0.4,
        fill: 'start',
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    borderJoinStyle: 'round',
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Месяцы (январь - декабрь)'
          }
        },
        y: {
          title: {
            display: true,
            text: yAxisTitle
          }
        },
      },
      layout: {
        autoPadding: false,
        padding: 10
      }
    }
  };

  let c = new Chart(
    document.querySelector('.js-chart'),
    config
  );

  const handlers = {
    update: function () {
      data.datasets[0].data = chartData;
      config.options.scales.y.title.text = yAxisTitle;
      c.destroy();
      c = new Chart(
        document.querySelector('.js-chart'),
        config
      );
    }
  };

})();

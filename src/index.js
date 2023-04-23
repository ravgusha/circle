import '@/styles/index.scss';

const underscoreLegend = (e) => {
  if (e.target.tagName === 'path') {
    const color = e.target.getAttribute('class');

    let currentLegend = document.querySelector('.legends').querySelector(`.${color}`);
    currentLegend.classList.toggle('active');
    currentLegend.style.textDecorationColor = 'var(--' + color + ')';
  }
};

let pie = document.getElementById('pie');

pie.addEventListener('mouseover', underscoreLegend);
pie.addEventListener('mouseout', underscoreLegend);

import './css/style.css';
import {renderDatas}  from './js/logic.js';
import {renderChartDoughnut}  from "./js/charts.js";

document.addEventListener('DOMContentLoaded', () => {
renderChartDoughnut(2,2);
renderDatas();
});
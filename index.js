import $ from 'jquery';
import * as solution from './solution';

const inputs = [];

const addInput = (...params) => inputs.push(params);

const printInput = (input) => input.map((i) => {
  if(typeof i === 'function') return i.toString();
  return JSON.stringify(i, null, 2);
}).join(', ');

const execAndPrint = async (name, fn, input) => {
  if(name !== 'default'){
    $('#results').append(`<div>${name}</div>`);
  }
  const $result = $(`<pre class="result">...</pre>`);
  $('#results').append($result);

  $result.html(JSON.stringify(await fn.apply(fn, input), null, 2));
};

const exec = () => {
  inputs.forEach(async (input, i) => {
    if(input.length > 1) $('#results').append(`<div>${i + 1}.</div>`);
    $('#results').append(`<pre class="input">await getMonstersHitPoints(${printInput(input)});</pre>`);

    const funcs = Object.keys(solution);
    funcs.forEach((name) => {
      execAndPrint(name, solution[name], input);
    });    
  });
}

addInput('spider');

addInput('goblin');

exec();







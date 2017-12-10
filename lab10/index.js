// 1
function sequence(start, step) {
  if(step === undefined)  step = 1
  if(start === undefined) start = 0
  var current = start - step
  return function(){ return current += step };
}

// 2
function take(fn, count) {
  return Array(count).fill().map(fn);
}
  
// 3.
function map(fn, array) {
  arr = Array(array.lenght);
  for(var i = 0; i < array.length; i++)
    arr[i] = fn(array[i]);
  return arr;
}

// 4. 
function fmap(a, gen) {
  return function(...args){
    return a(gen(...args));
  }
}

// 5.
function partial(func, ...argsOut) {
  return function(...argsIn) {
    return func(...argsOut, ...argsIn);
  }
}

// 6.
function partialAny(func, ...argsOut) {
  return function(...argsIn) {
    var arg = argsOut.map(function(el){ return el === undefined ? argsIn.shift() : el});
    return func(...arg, ...argsIn);
  }
}

// 7.
function bind(fn, context) {
return function() { return fn.apply(context, arguments)  }
}

// 8.
function pluck(objects, fieldName) {
  return objects.map(function(e){ return e[fieldName] });
} 

// 9.
function filter (arr, fn) {
  var out = [];
  for(var i = 0; i < arr.length; i++)
    if(fn(arr[i])) out.push(arr[i]);
  return out;
}

// 10. 
function count (obj) {
  return Object.keys(obj).length
}
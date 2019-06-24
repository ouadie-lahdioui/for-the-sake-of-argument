var numbers = function() {
  return Array.prototype.filter.call(arguments, function(argument) {
  	return typeof argument !== 'number';
  }).length === 0;
}

function numbers( ...args ) {
  return args.every( arg => typeof arg === "number" )
}

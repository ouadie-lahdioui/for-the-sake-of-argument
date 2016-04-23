var numbers = function() {
  return Array.prototype.filter.call(arguments, function(argument) {
  	return typeof argument !== 'number';
  }).length === 0;
}
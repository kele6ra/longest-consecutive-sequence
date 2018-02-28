module.exports = function longestConsecutiveLength(array) {
  var max = 0, i = 0;
  var hashSet = new Set();

  for (i = 0; i<array.length; i++){
    hashSet.add(array[i]);
  }

  for (i = 0; i < array.length; i++) {
        if (!hashSet.has(array[i]-1))
        {
            var j = array[i];
            while (hashSet.has(j)){
                j++;
            }
            if (max<j-array[i]) max = j-array[i];
        }
    
  }

  return max;
}

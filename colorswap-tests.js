testAsyncMulti('colorswap loaded', [
  function(test, expect){
    test.isTrue(ColorSwap);
    ColorSwap({
      find: '#090',
      replace: '#00c',
      animation: 'hsl'
    });
  }
]);

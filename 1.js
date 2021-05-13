const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

  const createArrayOfArrays = (countries) => {
      let result = [] ;
      countries.map(item=>{
          let newEle = [] ;
          let newName = item[0] + item.slice(1, item.length).toLowerCase();
          newEle.push(newName);
          newEle.push(item.slice(0,3));
          newEle.push(item.length);

          result.push(newEle);
      });

      return result;
  }
  console.log(createArrayOfArrays(countries));
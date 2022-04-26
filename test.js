const _data = new WeakMap();

class Test {
  constructor(data) {
    _data.set(this, data);
  }
  get data() {
    return _data.get(this);
  }

  get t() {
    console.log(this);
    return 'tttt'
  }
}

const testData = new Test('weakMapTest');
testData.data // 'weakMapTest'

// const proxy = new Proxy(testData, {
//   get: function (target, propKey) {
//     return target[propKey];
//   }
// });
// proxy.data // undefined
// console.log('proxy.data: ', proxy.data);

console.log('testData.t: ', testData.t);
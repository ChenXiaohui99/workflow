const withTest = (a) => (b) => {
  return a + b;
};

const withTest1 = (a) => {
  return (b) => {
    return a + b;
  };
};

const v = withTest(1);
const v1 = v(2);
console.log('[ v1 ] >', v1);
console.log('v', v);

const v11 = withTest1(1);
const v111 = v(2);
console.log('[ v111 ] >', v111);
console.log('v11', v11);

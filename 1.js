const emsStatusList = [];

const completeList = () => {
  return emsStatusList
    .filter((item) => item.name === '已签收')
    .map((item) => {
      return item.dictValue;
    })
    .join(',');
};

const whisper = 1000;
console.log('11');

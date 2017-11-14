// Write your solution in this file!
const driver = {

};

function updateDriverWithKeyAndValue(driver, name, address) {
  const newDriver = {...driver};
  newDriver[name] = 'Sam';
  newDriver[address] = '11 Broadway';
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, name, address) {
  driver.assign({}, {[name]: Sam}, {[address]: 12 Broadway} );
  return;
}

'use strict';

const path = require('path');
const fs = require('fs');

exports.getCCP = async () => {
  try {
    const ccpPath = path.resolve(__dirname, '..', '..', '..', '..', 'gateway', 'org1', 'connection-org1.json');
    const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
    let ccp = JSON.parse(ccpJSON);

    return ccp;
  } catch (err) {
    console.log(err);
    return err;
  }
};

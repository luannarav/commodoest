const crypto = require('crypto');

function hash(params) {
  const hash = crypto.createHash('sha256');
  hash.update(JSON.stringify(params));
  return hash.digest('hex');
}

return "Graticule " + hash(this.params);

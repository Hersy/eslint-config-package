import test from 'tape';

import index from '..';
import fs from 'fs';
import path from 'path';

const files = { ...{ index } }; // object spread is to test parsing

const rulesDir = path.join(__dirname, '../rules');
fs.readdirSync(rulesDir).forEach(name => {
  files[name] = require(path.join(rulesDir, name));
});

Object.keys(files).forEach(
  (
    name, // trailing function comma is to test parsing
  ) => {
    const config = files[name];

    test(`${name}: does not reference typescript`, t => {
      t.plan(2);

      // scan plugins for typescript and fail if it is found
      const hasTypescriptPlugin =
        Object.hasOwn(config, 'plugins') &&
        config.plugins.indexOf('typescript') !== -1;
      t.notOk(hasTypescriptPlugin, 'there is no typescript plugin');

      // scan rules for typescript/ and fail if any exist
      const typescriptRuleIds = Object.keys(config.rules).filter(
        ruleId => ruleId.indexOf('typescript/') === 0,
      );
      t.deepEquals(typescriptRuleIds, [], 'there are no typescript/ rules');
    });
  },
);

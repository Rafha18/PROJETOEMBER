import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | produtos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:produtos');
    assert.ok(route);
  });
});

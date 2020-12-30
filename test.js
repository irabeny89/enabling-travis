const test = require('tape')
test('test integer addition', t => {
  t.plan(1)
  t.equal(1 + 2, 3)
})
test('test string addition', t => {
  t.plan(1)
  // Expected to fail
  t.equal('1' + '1', 2)
})
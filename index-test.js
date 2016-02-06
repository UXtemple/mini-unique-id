import test from 'tape';
import uniqueId from './index';

test('#uniqueId', t => {
  t.equals(uniqueId(), '1', 'starts at 1');
  t.equals(uniqueId(), '2', 'increments on subsequent calls (2)');
  t.equals(uniqueId(), '3', 'increments on subsequent calls (3)');
  t.equals(typeof uniqueId(), 'string', 'returns a string');
  t.end();
});

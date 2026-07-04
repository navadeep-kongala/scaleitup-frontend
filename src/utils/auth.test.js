import test from 'node:test';
import assert from 'node:assert/strict';

import { isValidAdminLogin } from './auth.js';

test('accepts the configured admin credentials', () => {
  assert.equal(isValidAdminLogin('admin', 'scaleitup2026'), true);
});

test('rejects invalid credentials', () => {
  assert.equal(isValidAdminLogin('admin', 'wrong-password'), false);
});

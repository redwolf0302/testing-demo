const path = require('path');
const settings = require('../../dist/server/settings');

describe('settings correctly', () => {
    it('should be correct', () => {
        expect(settings).toHaveProperty('DATABASE_PATH');
        expect(settings.DATABASE_PATH).toBe(path.resolve('./dist/server/db/demo.db'));
    });
});
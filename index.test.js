const utf8Array2Str = require('./index');

describe('Uint8Array convert to string', () => {
	test('should equal "hello"', () => {
		expect(Buffer.from(new Uint8Array(Buffer.from('hello'))).toString()).toBe('hello');
		expect(utf8Array2Str(new Uint8Array(Buffer.from('hello')))).toBe('hello');
	});

	test('should equal "你好"', () => {
		expect(Buffer.from(new Uint8Array(Buffer.from('你好'))).toString()).toBe('你好');
		expect(utf8Array2Str(new Uint8Array(Buffer.from('你好')))).toBe('你好');
	});
});

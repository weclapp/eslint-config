module.exports = {
	env: {
		es6: true
	},

	extends: [
		'eslint:recommended'
	],

	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},

	rules: {

		// Soften eslint's recommend rules
		'no-console': 'warn',
		'no-debugger': 'warn',

		// Custom rules
		'no-mixed-spaces-and-tabs': 'warn',
		'no-unused-vars': 'warn',
		'no-alert': 'error',
		'no-eval': 'error',
		'no-implied-eval': 'error',
		'no-empty-function': 'error',
		'no-proto': 'error',
		'no-label-var': 'error',
		'no-lone-blocks': 'error',
		'no-useless-constructor': 'error',
		'no-use-before-define': 'error',
		'no-else-return': 'error',
		'no-return-await': 'error',
		'no-useless-call': 'error',
		'no-useless-return': 'error',
		'no-sequences': 'error',
		'no-extend-native': 'error',
		'no-invalid-this': 'error',
		'no-undef-init': 'error',
		'default-case': 'warn',
		'dot-notation': 'error',
		'eqeqeq': 'error',

		// Node specific
		'callback-return': 'error',
		'handle-callback-err': 'error',
		'no-process-exit': 'warn',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': 'warn',
		'no-new-require': 'warn',

		// Force esnext features
		'no-var': 'error',
		'prefer-const': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-template': 'error',
		'prefer-spread': 'error',
		'prefer-rest-params': 'error',

		'yoda': [
			'error',
			'never',
			{'onlyEquality': true}
		],

		// Enforce pow operator
		'no-restricted-properties': [
			'error',
			{
				'object': 'Math',
				'property': 'pow',
				'message': 'Use the exponentiation operator (**) instead of Math.pow()'
			}
		],

		'no-empty': [
			'error',
			{'allowEmptyCatch': true}
		],

		'no-labels': [
			'error',
			{'allowLoop': true}
		],

		'no-constant-condition': [
			'error', {checkLoops: false}
		],

		'indent': ['error', 'tab'],
		'quotes': ['error', 'single']
	}
};

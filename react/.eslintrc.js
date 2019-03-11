/* eslint-env amd, node */
module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	"plugins": [
		"react"
	],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	rules: {
		// Possible Errors
		"no-await-in-loop": "error",
		"no-extra-parens": ["error", "all", {
			"nestedBinaryExpressions": false,
			"ignoreJSX": "multi-line"
		}],
		"no-irregular-whitespace": ["error", {
			"skipStrings": true,
		}],
		"no-template-curly-in-string": "error",
		"require-atomic-updates": "error",

		// Best Practices
		"class-methods-use-this": "error",
		"consistent-return": "error",
		"curly": "error",
		"default-case": "error",
		"dot-location": ["error", "property"],
		"dot-notation": "error",
		"eqeqeq": "error",
		"guard-for-in": "error",
		"max-classes-per-file": "error",
		"no-alert": "error",
		"no-caller": "error",
		"no-else-return": "error",
		"no-empty-pattern": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-floating-decimal": "error",
		"no-global-assign": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-loop-func": "error",
		"no-magic-numbers": ["error", {
			"ignoreArrayIndexes": true,
			"ignore": [1, -1]
		}],
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-param-reassign": "error",
		"no-proto": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": ["error", {
			"allowShortCircuit": true,
			"allowTernary": true
		}],
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-concat": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-with": "error",
		"require-await": "error",
		"require-unicode-regexp": "error",
		"wrap-iife": ["error", "inside"],
		"yoda": "error",

		// Variables
		"init-declarations": ["error", "always"],
		"no-delete-var": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-undef-init": "error",
		"no-use-before-define": "error",

		// Stylistic Issues
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never"],
		"array-element-newline": ["error", "consistent"],
		"block-spacing": ["error", "always"],
		"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
		"camelcase": "error",
		"comma-dangle": ["error", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "always-multiline"
		}],
		"comma-spacing": ["error", { "before": false, "after": true }],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never"],
		"eol-last": ["error", "always"],
		"func-call-spacing": ["error", "never"],
		"func-names": ["error", "as-needed"],
		"function-paren-newline": ["error", "consistent"],
		"id-length": "error",
		"implicit-arrow-linebreak": ["error", "beside"],
		"indent": ["error", "tab", {
			"SwitchCase": 1,
			"outerIIFEBody": 1
		}],
		"jsx-quotes": ["error", "prefer-double"],
		"key-spacing": ["error", {
			"afterColon": true,
			"beforeColon": false
		}],
		"keyword-spacing": ["error", {
			"after": true,
			"before": true
		}],
		"line-comment-position": ["error", { "position": "above" }],
		"linebreak-style": ["error", "unix"],
		"lines-between-class-members": ["error", "always"],
		"max-statements-per-line": ["error", { "max": 1 }],
		"multiline-ternary": ["error", "always-multiline"],
		"new-cap": ["error", {
			"newIsCap": true,
			"capIsNew": true
		}],
		"new-parens": "error",
		"no-array-constructor": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-multi-assign": "error",
		"no-negated-condition": "error",
		"no-new-object": "error",
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": ["error", "beside"],
		"object-curly-newline": ["error", { "consistent": true }],
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
		"one-var": ["error", "never"],
		"operator-linebreak": ["error", "before"],
		"padded-blocks": ["error", "never"],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
			{ blankLine: "always", prev: ["const", "let", "var"], next: "*" },
			{ blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
			{ blankLine: "always", prev: "directive", next: "*" },
    		{ blankLine: "any", prev: "directive", next: "directive" }
		],
		"prefer-object-spread": "error",
		"quote-props": ["error", "consistent-as-needed"],
		"quotes": ["error", "single", { "allowTemplateLiterals": true }],
		"semi": ["error", "always"],
		"semi-spacing": "error",
		"semi-style": ["error", "last"],
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always"
		}],
		"space-in-parens": ["error", "never"],
		"space-unary-ops": ["error", { "words": true, "nonwords": false }],
		"switch-colon-spacing": ["error", { "after": true, "before": false }],
		"template-tag-spacing": ["error", "never"],
		"unicode-bom": ["error", "never"],

		// ECMAScript 6
		"arrow-body-style": ["error", "as-needed"],
		"arrow-parens": ["error", "as-needed"],
		"arrow-spacing": "error",
		"constructor-super": "error",
		"generator-star-spacing": ["error", { "before": false, "after": true }],
		"no-duplicate-imports": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"prefer-const": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"rest-spread-spacing": ["error", "never"],
		"template-curly-spacing": "error",
		"yield-star-spacing": ["error", "after"],

		// React
	}
};

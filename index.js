module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  "overrides": [
    {
      "files": ["**/*.vue"],
      "customSyntax": "postcss-html"
    },
    {
      "files": ["**/*.scss"],
      "customSyntax": "postcss-scss"
    }
  ],
  rules: {
    'order/properties-alphabetical-order': true,

    // NOTE: プロジェクト単位で設定するべき
    'selector-class-pattern': null,

    // NOTE: 新しいモジュールシステムへの移行のため
    'at-rule-disallowed-list': ['import'],

    // NOTE: プライベート変数は許容
    'scss/dollar-variable-pattern': [
			'^_?([-a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: 'Expected variable to be kebab-case',
			},
		],

    // NOTE: grepしにくくなるので禁止
    'scss/selector-no-union-class-name': true,

    // NOTE: 不明なプロパティと値の組み合わせは禁止
    'declaration-property-value-no-unknown': true,

    // NOTE: vendor prefixはautoprefixer任せでOK
    'at-rule-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  },
}

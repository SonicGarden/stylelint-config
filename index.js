module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  rules: {
    'order/properties-alphabetical-order': true,

    // NOTE: プロジェクト単位で設定するべき
    'selector-class-pattern': null,

    // NOTE: 新しいモジュールシステムへの移行のため
    'at-rule-disallowed-list': ['import'],

    // NOTE: vendor prefixはautoprefixer任せでOK
    'at-rule-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  },
}

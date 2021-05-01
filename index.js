module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    // NOTE: scssで必要
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'order/properties-alphabetical-order': true,

    // NOTE: vendor prefixはautoprefixer任せでOK
    'at-rule-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  },
}

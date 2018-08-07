module.exports = {
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'transform-react-jsx',
    'syntax-dynamic-import',
    'dynamic-import-node',
    [
      'emotion',
      {
        autoLabel: true,
      },
    ],
  ],
  presets: ['env', 'react'],
};

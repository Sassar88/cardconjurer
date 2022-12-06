const path = require('path');
const webpack = require('webpack');

module.exports = {
    babel: {
        test: /\.[jt]sx?$/,
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: false }],
            ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
            ['@babel/plugin-proposal-private-methods', { loose: false }],
        ],
    },
    compilerOptions: {
        baseUrl: "src"
    },
    webpack: {
        plugins: {
            add: []
        }
    }
};

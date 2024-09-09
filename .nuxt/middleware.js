const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['cors'] = require('..\\middleware\\cors.js')
middleware['cors'] = middleware['cors'].default || middleware['cors']

middleware['pageAuth'] = require('..\\middleware\\pageAuth.js')
middleware['pageAuth'] = middleware['pageAuth'].default || middleware['pageAuth']

export default middleware

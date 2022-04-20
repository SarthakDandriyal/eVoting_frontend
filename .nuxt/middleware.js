const middleware = {}

middleware['blocker'] = require('../middleware/blocker.js')
middleware['blocker'] = middleware['blocker'].default || middleware['blocker']

export default middleware

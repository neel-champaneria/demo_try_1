# Guide To Use environment variables in project backend

## Create ".env" file in the backend folder.

## Open ".env" file to add data in it.

### Add below information in it:

`NODE_ENV = "development"`
`PORT = 5000`
`DEV_LOG_LEVEL = "debug"`
`PROD_LOG_LEVEL = "info"`
You can define more environment variable like shown above to use in code.

## Backend will run on port 5000 and frontend will run on port 3000.

## Next create "config.js" in "config" folder.

### Add below code in config.js

`const dotenv = require("dotenv");`
`dotenv.config();`
`module.exports = {`
`node_env: process.env.NODE_ENV,`
`port: process.env.PORT,`
`dev_log_level: process.env.DEV_LOG_LEVEL,`
`prod_log_level: process.env.PROD_LOG_LEVEL,`
`};`

As you can see we are getting the environment variable value in config.js file.
example:
in .env file:
`PORT = 5000`
Next we are getting it using "dotenv" library.
you can see in config.js file that,
`port: process.env.PORT`

Next whenever we require "port", we get it from "config.js".
Example: We need port to start express server in `express.listen()` method.

So first get it like: `const { port } = require("./config/config");`
And use it like normal variable.

# Guide To Use environment variables in project backend

## Create ".env" file in the backend folder.

## Open ".env" file to add data in it.

### Add below information in it:

```JavaScript
NODE_ENV = "development"
PORT = 5000
DEV_LOG_LEVEL = "debug"
PROD_LOG_LEVEL = "info"
DB_NAME = ""
DB_USER = ""
DB_PASS = ""
DB_HOST = "localhost"
DB_PORT =
```

Add Database information according to your system.
You can define more environment variable like shown above to use in code.

## Backend will run on port 5000 and frontend will run on port 3000.

## Next create "config.js" in "config" folder.

### Add below code in config.js

```JavaScript
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
node_env: process.env.NODE_ENV,
port: process.env.PORT,
dev_log_level: process.env.DEV_LOG_LEVEL,
prod_log_level: process.env.PROD_LOG_LEVEL,
db_name: process.env.DB_NAME,
db_user: process.env.DB_USER,
db_pass: process.env.DB_PASS,
db_host: process.env.DB_HOST,
db_port: process.env.DB_PORT
};
```

As you can see we are getting the environment variable value in config.js file.
example:
in .env file:

```JavaScript
PORT = 5000
```

Next we are getting it using "dotenv" library.
you can see in config.js file that,

```JavaScript
port: process.env.PORT
```

Next whenever we require "port", we get it from "config.js".
Example: We need port to start express server in `express.listen()` method.

So first get it like:

```JavaScript
const { port } = require("./config/config");
```

And use it like normal variable.

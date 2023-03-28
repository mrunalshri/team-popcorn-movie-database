# APIFetch

This file contains the readme for APIFetch and can be placed into a useEffect directly (No need to wrap in an additional function)

APIFetch takes 3 parameters:

- the extension to the base fetch url ( /movies/500 for example.)
  - Don't add a trailing \/ as this is left exposed for the queries
- Your API key
  - **I'd highly suggest using `dotenv` to manage your API key.**
  - Make a file called .env to the root directory (Where package.json is)
  - there is no prefix, no `api.env` just `.env`
  - open .env and on a line enter the following
  - `APIKEY=YOURAPIKEYHERE`
  - To access your api key use the details in the Dotenv example below
- params
  - This is an array made of the following interface `{param: string, value:any}`
  - Add any additional parameters to the query in here,
  - Look below for examples

## Dotenv setup example

```js
import * as dotenv from "dotenv";
//other imports

dotenv.config();

// To access your api key (if you set it up like I mentioned above) from then on simply use the following as a variable
process.env.APIKEY;
```

### No parameter Query (with .env API key)

```js
const data = await APIFetch("/movie/550", process.env.APIKEY)`
```

### Query with Parameters (with .env API key)

```js
const data = await APIFetch("/search/person", process.env.APIKEY, [
	{ param: "query", value: "Bradley" },
]);
```

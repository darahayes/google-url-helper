# google-url-helper


## Parsing
```js
const gurl = require('google-url-helper')

var url = 'https://docs.google.com/document/d/1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls/edit'

gurl.parse(url)

// { key: '1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls', type: 'document' }

gurl.keyParse(url)
// '1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls'
```
Supported url types:

- google docs
- google sheets
- google forms
- google slides
- google drive folders
- google drive files

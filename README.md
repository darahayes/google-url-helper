# google-url-helper

 - Parsing
   - parseId ( _url_ )
   - parse ( _url_ )
 - Building
   - url ( _id_ , _type_ )

## Parsing

### parseId ( _url_ )
```js
const gurl = require('google-url-helper')
var url = 'https://docs.google.com/document/d/1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls/edit'

gurl.parseId(url)
// '1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls'
```

### parse ( _url_ )
```js
const gurl = require('google-url-helper')
var url = 'https://docs.google.com/document/d/1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls/edit'

gurl.parse(url)
// {id: '1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls, type: 'document'}
```
The following url types can be parsed:

- `document` - Google Docs
- `spreadsheet` - Google Sheets
- `form` - Google Forms
- `presentation` - Google Slides
- `folder` - Google Drive folder
- `file` - Google Drive file

## Building

### url ( _id_ , _type_ )
```js
const gurl = require('google-url-helper')

var id = '1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls'
var type = 'document'

gurl.url(id, type)
// 'https://docs.google.com/document/d/1ss-FBQi1TGq8kiYLAjYkKx9672oxb9u_JJyL4lCVmls'
```
The following url types can be built

- `document`
- `spreadsheet`
- `presentation`
- `folder`
- `file`

Note: forms cannot be built because they are specific to organizations.

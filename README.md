# next-method-router

> Package to easily map HTTP requests to methods by HTTP verb when using [Next.js API routes](https://nextjs.org/docs#api-routes)

## Installation

```
$ yarn add next-method-router
```

## Usage

```ts
import router from 'next-method-router'

export default router<{ hello: string; message?: string }>({
  async get(req, res) {
    await doStuff()
    return res.status(200).json({
      hello: 'world',
    })
  },
  async put(req, res) {
    return res.status(200).json({
      hello: req.body.hello,
      message: 'Thanks for the update!',
    })
  },
})
```

## Credits

This is based on [micro-method-router](https://github.com/jamo/micro-method-router), but rewritten in typescript and
designed to be used with Next.js API routes.

## License

MIT License

Copyright (c) 2019 Garth Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

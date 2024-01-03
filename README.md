# Next.js logger

Simple Next.js logger for client and server side

## Setup

1. Add `logger.js` file to your project.
2. Set the required log level:
- Client side: add `LOG_LEVEL` to local storage.
- Server side: add `LOG_LEVEL` environment variable.

### Available logging levels

> [!WARNING] 
> Use levels in the upper case

- `DEBUG`
- `INFO`
- `WARN`
- `ERROR`

## Usage

The logger has the following methods for outputting information:

- `debug`
- `info`
- `warning`
- `error`

It is possible to pass an unlimited number of arguments to methods.

### Examples

Client side example:
```js
"use client"

import { useEffect } from 'react';
import logger from '../logger';

export default function Home() {
  useEffect(() => {
    logger.debug('Debug message');
    logger.info('Info message');
    logger.warning('Warning message');
    logger.error('Error message', new Error('custom error'));
  }, []);

  return (
    <div>
      Page content
    </div>
  );
}
```

Server side example:
```js
import logger from '../logger';

export async function GET() {
  logger.debug('API debug');
  logger.info('API info');
  logger.warning('API warning');
  logger.error('API error', new Error('custom error'));

  return Response.json({ data: 'API response' });
}
```
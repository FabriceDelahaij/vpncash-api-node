# VPNCash NODE API Client
[![Build Status](https://travis-ci.org/FabriceDelahaij/vpncash-api-node.svg?branch=master)](https://travis-ci.org/FabriceDelahaij/vpncash-api-node)

## Install

By far the easiest way to install the VPNCash API client is to install it with [npm](https://npmjs.org/).

    $ npm install vpncash-api-node --save

    {
        "dependencies": {
            "vpncash-api-node": "^1.0.0"
        }
    }


## Requirements ##
To use the VPNCash API client, the following things are required:

+ Visit website for [VPNCash account](https://vpncash.com)
+ Create a new [profile](http://www.vpncash.com/api-access) to generate API keys

```javascript
	'use strict';

	const VPNCash = require('vpncash-api-node');

	const API = new VPNCash['Client']();

	API['setApiKey']('test_');

	API['client']('POST', 'radius/check-username', {
		'vpn_username': 'test123'
	});

```

## License
[BSD (Berkeley Software Distribution) License](https://opensource.org/licenses/bsd-license.php). Copyright (c) 2017, Extreemhost.

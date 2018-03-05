# VPNCash NODE API Client
[![NPM Version](https://img.shields.io/npm/v/vpncash-api-node.svg)](https://www.npmjs.com/package/vpncash-api-node)
[![NPM Downloads](https://img.shields.io/npm/dm/vpncash-api-node.svg)](https://www.npmjs.com/package/vpncash-api-node)
[![Build Status](https://travis-ci.org/FabriceDelahaij/vpncash-api-node.svg?branch=master)](https://travis-ci.org/FabriceDelahaij/vpncash-api-node)
[![Greenkeeper badge](https://badges.greenkeeper.io/FabriceDelahaij/vpncash-api-node.svg)](https://greenkeeper.io/)
[![GitHub issues](https://img.shields.io/github/issues/FabriceDelahaij/vpncash-api-node.svg)](https://github.com/FabriceDelahaij/vpncash-api-node/issues)
[![GitHub license](https://img.shields.io/github/license/FabriceDelahaij/vpncash-api-node.svg)](https://github.com/FabriceDelahaij/vpncash-api-node/blob/master/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/fabricedelahaij/vpncash-api-node/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fabricedelahaij/vpncash-api-node?targetFile=package.json)

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

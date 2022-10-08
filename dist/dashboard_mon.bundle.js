/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/array-sort/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-sort/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * array-sort <https://github.com/jonschlinkert/array-sort>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var defaultCompare = __webpack_require__(/*! default-compare */ "./node_modules/default-compare/index.js");
var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/array-sort/node_modules/kind-of/index.js");
var get = __webpack_require__(/*! get-value */ "./node_modules/get-value/index.js");

/**
 * Sort an array of objects by one or more properties.
 *
 * @param  {Array} `arr` The Array to sort.
 * @param  {String|Array|Function} `props` One or more object paths or comparison functions.
 * @param  {Object} `opts` Pass `{ reverse: true }` to reverse the sort order.
 * @return {Array} Returns a sorted array.
 * @api public
 */

function arraySort(arr, props, opts) {
  if (arr == null) {
    return [];
  }

  if (!Array.isArray(arr)) {
    throw new TypeError('array-sort expects an array.');
  }

  if (arguments.length === 1) {
    return arr.sort();
  }

  var args = flatten([].slice.call(arguments, 1));

  // if the last argument appears to be a plain object,
  // it's not a valid `compare` arg, so it must be options.
  if (typeOf(args[args.length - 1]) === 'object') {
    opts = args.pop();
  }
  return arr.sort(sortBy(args, opts));
}

/**
 * Iterate over each comparison property or function until `1` or `-1`
 * is returned.
 *
 * @param  {String|Array|Function} `props` One or more object paths or comparison functions.
 * @param  {Object} `opts` Pass `{ reverse: true }` to reverse the sort order.
 * @return {Array}
 */

function sortBy(props, opts) {
  opts = opts || {};

  return function compareFn(a, b) {
    var len = props.length, i = -1;
    var result;

    while (++i < len) {
      result = compare(props[i], a, b);
      if (result !== 0) {
        break;
      }
    }
    if (opts.reverse === true) {
      return result * -1;
    }
    return result;
  };
}

/**
 * Compare `a` to `b`. If an object `prop` is passed, then
 * `a[prop]` is compared to `b[prop]`
 */

function compare(prop, a, b) {
  if (typeof prop === 'function') {
    // expose `compare` to custom function
    return prop(a, b, compare.bind(null, null));
  }
  // compare object values
  if (prop && typeof a === 'object' && typeof b === 'object') {
    return compare(null, get(a, prop), get(b, prop));
  }
  return defaultCompare(a, b);
}

/**
 * Flatten the given array.
 */

function flatten(arr) {
  return [].concat.apply([], arr);
}

/**
 * Expose `arraySort`
 */

module.exports = arraySort;


/***/ }),

/***/ "./node_modules/array-sort/node_modules/kind-of/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/array-sort/node_modules/kind-of/index.js ***!
  \***************************************************************/
/***/ ((module) => {

var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  var type = typeof val;

  // primitivies
  if (type === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (type === 'string' || val instanceof String) {
    return 'string';
  }
  if (type === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (type === 'function' || val instanceof Function) {
    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
      return 'generatorfunction';
    }
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }
  
  if (type === '[object Map Iterator]') {
    return 'mapiterator';
  }
  if (type === '[object Set Iterator]') {
    return 'setiterator';
  }
  if (type === '[object String Iterator]') {
    return 'stringiterator';
  }
  if (type === '[object Array Iterator]') {
    return 'arrayiterator';
  }
  
  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  return val.constructor
    && typeof val.constructor.isBuffer === 'function'
    && val.constructor.isBuffer(val);
}


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _data = {
  "SiteStatus": "",
  "AccountID": "1",
  "ZoneID": "",
  "CircleID": "",
  "ClusterID": "",
  "SiteID": {
    "id": 0
  },
  "SiteIDs": "113,132,405,433,1911,7000,414,7198,6991,7529,6990,415,6970,428,586,7177,418,7219,1849,592,1913,7200,7199,1989,244,4709,6971,4492,7014,4613,4893,19789,561,4651,6966,285,6914,404,6913,20829,1990,7178,6972,4857,7215,7235,7211,6952,7214,7231,5012,7192,7194,5230,420,7236,412,432,130,407,7013,6894,7029,6997,7024,573,582,6915,596,6963,577,6973,581,7021,7030,7092,5531,7022,406,7069,6967,4553,7016,6959,7010,7109,429,7171,4511,2511,7131,7180,587,7169,7132,7136,7189,5289,4309,6992,7026,4769,6968,6989,6957,6895,403,7011,6953,6961,6927,6999,4512,116,7001,5533,4342,4853,366,7212,419,7195,205,1893,1915,7130,426,2010,7398,580,6962,6951,6993,1914,7135,430,400,115,6921,7018,123,5028,7134,5016,6893,6916,408,423,7209,7213,7218,6958,6920,7603,416,6996,6917,4337,1589,6995,6994,6998,7023,150,7019,7009,6926,410,6922,7234,6965,591,5236,7210,5020,4351,5141,7232,7233,7002,7176,4515,7172,7181,7179,427,425,7173,1912,7174,4649,7149,4611,7193,7170,141,182,195,1629,402,1550,7191,7197,422,7217,7229,585,1870,589,7017,4529,7578,4589,161,4516,7614,409,411,7563,7557,7550,7551,7593,7631,4911,4610,12329,4939,4491,5237,5056,4869,12233,12240,4469,12231,1309,7400,6617,7519,1329,7370,4670,4914,4830,5032,13829,16369,16409,18129,13849,17932,13750,13869,6912,20809,19209,17931,4653,7031,6964,22091,22089,22072,22229,22149,22169,22830,22170,22209,22189,25289,22190,21909,22191,21989,22092,22009,22090,22889,22029,22809,22109,22049,22849,21949,22829,22111,22071,21969,24289,24309,24389,24409,25350,25069,47129,50729,49809,28390,27429,27409,27389,27449,28409,28309,28449,28272,28509,50789,29369,48909,47150,34349,28489,28429,28549,35290,52429,35409,38869,39029,38910,35849,44950,35550,48249,36169,44709,48131,38749,34049,48269,35829,35810,34509,34989,34631,34949,48289,34469,34169,34269,48229,47510,44171,46669,48069,47529,35691,47429,48089,47549,48150,44231,35569,48189,35650,48309,35729,47489,48209,43851,35649,43049,43169,36551,35629,44313,35529,44751,34889,34749,34710,35869,44869,45049,35389,35469,43630,35029,34991,34550,35050,35510,36089,35610,36249,44071,47409,35710,39189,34791,32770,35789,35890,43271,35950,44152,34310,36009,36031,44971,34609,34951,34859,43969,34530,34110,35609,36210,35931,34690,36229,34909,35969,34229,35930,35209,35612,35449,36129,35509,44649,34430,46590,34409,35489,44969,44829,46530,46189,44809,44610,44730,44409,46969,46089,44989,46229,44691,46389,44713,46489,44870,46349,46629,45029,46449,46809,46710,46289,47049,46910,46949,43774,43330,43189,43729,47109,43371,46831,46749,46569,46612,35251,29509,36069,37029,34429,34450,34950,34689,34589,34473,34990,34792,36929,36889,51669,35089,35090,29489,36972,51109,51069,51229,50649,46849,51309,50629,50589,50570,51269,50450,50389,49709,46970,47012,47149,50189,49969,50109,46630,46709,50509,50489,49209,46589,47190,49089,48829,49069,50269,50149,49989,50529,51349,51390,46730,50049,49189,49149,52710",
  "LastUpdatedTime": "1440",
  "TimeZoneSec": "0",
  "DateTimeFormat": "MM/dd/yyyy HH:mm",
  "UserID": "6633",
  'SESSIONID': 'ypfdih55sldm2emjspm3ek55'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_data);

/***/ }),

/***/ "./src/site_data.js":
/*!**************************!*\
  !*** ./src/site_data.js ***!
  \**************************/
/***/ ((module) => {

module.exports = [{
  "Site_ID": 604261,
  "MTN_Name": "2901TAMCMOSQ_AT",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604262,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604263,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 604264,
  "MTN_Name": "",
  "VDF_Name": "ZOGBELI",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 604265,
  "MTN_Name": "3646NOBISCO_AT",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 604266,
  "MTN_Name": "",
  "VDF_Name": "KALPOHIN_ALIU_MAHAMA",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604267,
  "MTN_Name": "2671TAMGANAS_AT",
  "VDF_Name": "KUKOU_WURISHIE",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604271,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 604273,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604334,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 604335,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 604336,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 604337,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 604338,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 604344,
  "MTN_Name": "1650CHAMBA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 604447,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 604476,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 604477,
  "MTN_Name": "3669ZEBILLA3_AT",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 604478,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 604479,
  "MTN_Name": "3968KOLONGO_AT",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 604480,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 604481,
  "MTN_Name": "3991NAKPANDURI_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 604482,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 604483,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 604512,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 604513,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604514,
  "MTN_Name": "3687BIMBILA_ET",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 604515,
  "MTN_Name": "3658WALWALE2_AT",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 604517,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 604519,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 604520,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 604521,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 604537,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 604538,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 604539,
  "MTN_Name": "3956NAKPALE_AT",
  "VDF_Name": "NAKPALI",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604540,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604541,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 604552,
  "MTN_Name": "5912BUNKPRGU_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 604554,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 604581,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 604583,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 604588,
  "MTN_Name": "5987NABORI_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 604592,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 604593,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 604594,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 604599,
  "MTN_Name": "4657KUKPALIGU",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604640,
  "MTN_Name": "3940BAWKU_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 604641,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 604642,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 604656,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604657,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 604659,
  "MTN_Name": "4661GHANI",
  "VDF_Name": "GHANI",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604424,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 604446,
  "MTN_Name": "3660KULMASA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 604470,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 604471,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 604472,
  "MTN_Name": "4964BOO_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 604473,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 604474,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 604475,
  "MTN_Name": "",
  "VDF_Name": "DORIMON",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 604536,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 604542,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 604543,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 604590,
  "MTN_Name": "4934JANTILPE_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 604591,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 604601,
  "MTN_Name": "5646KALBA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 604602,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 604639,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 604707,
  "MTN_Name": "3958GARU_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 604739,
  "MTN_Name": "3676ZABZUGU_2",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604753,
  "MTN_Name": "3691TOLON_2_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 604754,
  "MTN_Name": "3964DAMONGO_2",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 604755,
  "MTN_Name": "3967GUSHEGU_2",
  "VDF_Name": "Gushegu Palace",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 604756,
  "MTN_Name": "5668JEKOLG_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 604766,
  "MTN_Name": "4902NALEGU_2_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 604767,
  "MTN_Name": "3969KPANDAI_ET",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 604800,
  "MTN_Name": "5627BAWKU_4",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 604849,
  "MTN_Name": "4650BIMBILLA_3_ET",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 604853,
  "MTN_Name": "4695KADNGA_2_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 604855,
  "MTN_Name": "4682SAVLGU_3_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 604858,
  "MTN_Name": "4646KPATIA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 604859,
  "MTN_Name": "4694LUNGU_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 604860,
  "MTN_Name": "4655DUNGU_HSTL_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 604861,
  "MTN_Name": "4653ZUGU_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 604862,
  "MTN_Name": "4648ZABZUGU_3_ET",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604863,
  "MTN_Name": "4647MANGA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 604864,
  "MTN_Name": "4667MUSIGA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 604871,
  "MTN_Name": "4671ZAMBALA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 604885,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 604888,
  "MTN_Name": "3018NAV_NTC_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 604896,
  "MTN_Name": "5603WANJAGA_ET",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 604902,
  "MTN_Name": "3009YNDI_NTC_ET",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604903,
  "MTN_Name": "4997MALESHGU_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 604906,
  "MTN_Name": "3004YEN_KUGA_ET",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 604907,
  "MTN_Name": "3017MONGORI_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 604917,
  "MTN_Name": "4645SIRIGU_2_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 604934,
  "MTN_Name": "3007JKERYILI_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604938,
  "MTN_Name": "4998TAM_CBD1_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604947,
  "MTN_Name": "4936JEGBO_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 604951,
  "MTN_Name": "4999TAM_CBD2_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 604983,
  "MTN_Name": "3039KUSANABA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 604987,
  "MTN_Name": "3029NALEGU_3_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 604988,
  "MTN_Name": "3034SHEIGA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 604998,
  "MTN_Name": "3032BUIPE_3_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612677,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601451,
  "MTN_Name": "2634WANCHIKI",
  "VDF_Name": "WENCHIKI HUB",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601459,
  "MTN_Name": "2642TAMALE_9",
  "VDF_Name": "3G_WURISHIE_T_POLY",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601085,
  "MTN_Name": "1645WAKAWAKA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 600482,
  "MTN_Name": "0621PIGU",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601074,
  "MTN_Name": "1634WULENSI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601829,
  "MTN_Name": "3642TAM_ABOABU",
  "VDF_Name": "TAMALE_ABOABU",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601419,
  "MTN_Name": "2601GURUGU",
  "VDF_Name": "TIZZAA_HOSPITAL (2G/3G/4G)",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601072,
  "MTN_Name": "1632NASIA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 602173,
  "MTN_Name": "4633LITO",
  "VDF_Name": "LITO",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 601484,
  "MTN_Name": "2670TAMALE_ESTAT",
  "VDF_Name": "TAMALE_ESTATE",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601452,
  "MTN_Name": "2635ZANGBALI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 600496,
  "MTN_Name": "0637PWALGU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601731,
  "MTN_Name": "2934MORLE_PARK",
  "VDF_Name": "MOLE_NATIONAL_PARK",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 602024,
  "MTN_Name": "4602DUU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601086,
  "MTN_Name": "1646Yapei",
  "VDF_Name": "YAPEI",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 600744,
  "MTN_Name": "0901CHANBULUGU",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601403,
  "MTN_Name": "1998NAGBO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601747,
  "MTN_Name": "2950Yipeligu",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601740,
  "MTN_Name": "2943Gbelung",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 602493,
  "MTN_Name": "0692ZABZUGU",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 601736,
  "MTN_Name": "2939BOGUNAYILI",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601056,
  "MTN_Name": "1616SANKPALA",
  "VDF_Name": "SANKPALA",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 602023,
  "MTN_Name": "4601NASUAN",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601756,
  "MTN_Name": "2960KUNFUGSI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 601396,
  "MTN_Name": "1988TAMALE_10",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601080,
  "MTN_Name": "1640MPEASIM",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 601069,
  "MTN_Name": "1629DIARA_KADIA",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601720,
  "MTN_Name": "2922Tamle_Idtry",
  "VDF_Name": "RADACH_MEMORIAL_CENTER",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 601081,
  "MTN_Name": "1641GRUPE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 601722,
  "MTN_Name": "2924DUNGU",
  "VDF_Name": "DUNGU",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 600578,
  "MTN_Name": "0723KUMBUGU",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601113,
  "MTN_Name": "1673NAKPACHI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 601733,
  "MTN_Name": "2936Worvoguma",
  "VDF_Name": "KALPOHINI",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601828,
  "MTN_Name": "3641TAM_WARD_K",
  "VDF_Name": "TAMALE_WARDERS",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601741,
  "MTN_Name": "2944SAVELUGU_2",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 600770,
  "MTN_Name": "0936NALERIGU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601827,
  "MTN_Name": "3640TAM_CHOGU",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601093,
  "MTN_Name": "1653WULUGU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601453,
  "MTN_Name": "2636NAKPABONE",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601092,
  "MTN_Name": "1652NANTON",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601742,
  "MTN_Name": "2945Banvim",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601068,
  "MTN_Name": "1628TAMALE_7",
  "VDF_Name": "GBANYAMI",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601449,
  "MTN_Name": "2632KPASEMPE",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601738,
  "MTN_Name": "2941Mankarigu",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 600536,
  "MTN_Name": "0678TOLON",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 602005,
  "MTN_Name": "3932MOSI_ZONGO",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601088,
  "MTN_Name": "1648PONG_TAMALE",
  "VDF_Name": "KPUNG",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601089,
  "MTN_Name": "1649LARABANGA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 600472,
  "MTN_Name": "0605TAMALE_2",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601078,
  "MTN_Name": "1638Fulfulsu",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 601744,
  "MTN_Name": "2947Sagnarigu_2",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601450,
  "MTN_Name": "2633GUANGBIANG",
  "VDF_Name": "GUANBIANG",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601075,
  "MTN_Name": "1635SAWLA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 600483,
  "MTN_Name": "0622SANG",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 602495,
  "MTN_Name": "0694SABOBA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601421,
  "MTN_Name": "2603MPAHA",
  "VDF_Name": "MPAHA",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 602494,
  "MTN_Name": "0693GUSHIEGU",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601397,
  "MTN_Name": "1990SAKOGU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 600582,
  "MTN_Name": "0727BUIPE",
  "VDF_Name": "BUIPE_TOWN",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 602025,
  "MTN_Name": "4603SAKPE",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601095,
  "MTN_Name": "1655BUYA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601420,
  "MTN_Name": "2602LUNGNI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601732,
  "MTN_Name": "2935BUIPELE",
  "VDF_Name": "TAMALE_HUASA_ZONGO",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601482,
  "MTN_Name": "2668SABARE",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 601730,
  "MTN_Name": "2933TAM_NOBISCO",
  "VDF_Name": "TAMALE_NOBISCO",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 600471,
  "MTN_Name": "0603TAMALE_3",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601123,
  "MTN_Name": "1683WANGASI",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601399,
  "MTN_Name": "1994SANERIGU",
  "VDF_Name": "SHISHEGU",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601729,
  "MTN_Name": "2932TU_WUO",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601737,
  "MTN_Name": "2940BINDA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 600769,
  "MTN_Name": "0935KARAGA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601073,
  "MTN_Name": "1633EKUMDIPE",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 602026,
  "MTN_Name": "4604NAKWABI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 601077,
  "MTN_Name": "1637KARAMANGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 602184,
  "MTN_Name": "4632BONBONAYILI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601483,
  "MTN_Name": "2669PUSUGA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601087,
  "MTN_Name": "1647GONDO_TUNA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 601067,
  "MTN_Name": "1627TAMALE_4",
  "VDF_Name": "VITTING_BARRIER",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 600577,
  "MTN_Name": "0722YENDI",
  "VDF_Name": "YENDI_NORTH",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 601070,
  "MTN_Name": "1630KAKPAYILI",
  "VDF_Name": "Kakpayili_Township",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601719,
  "MTN_Name": "2921KALIPOHIN",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 600479,
  "MTN_Name": "0618SALAGA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601071,
  "MTN_Name": "1631KPADAE",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601398,
  "MTN_Name": "1992GUMA",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 600579,
  "MTN_Name": "0724BIMBILLA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 602001,
  "MTN_Name": "3919TUUNAYILI",
  "VDF_Name": "Tamale Fanmilk Pond",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601458,
  "MTN_Name": "2641TAMALE_8",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601042,
  "MTN_Name": "1600GBIMSI",
  "VDF_Name": "GBIMSI",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601727,
  "MTN_Name": "2930TALI",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601400,
  "MTN_Name": "1995JANGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601395,
  "MTN_Name": "1987NYAKPALA_2",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601051,
  "MTN_Name": "1611Kpatinga",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601094,
  "MTN_Name": "1654CHEREPONI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 600773,
  "MTN_Name": "0939TAMALE_6",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 602172,
  "MTN_Name": "4636KUI_MINE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 601084,
  "MTN_Name": "1644TINGA_JK",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 600583,
  "MTN_Name": "0728BOLE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 602183,
  "MTN_Name": "4631KANDIN",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 601734,
  "MTN_Name": "2937NYOHINI",
  "VDF_Name": "NYOHNI",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601079,
  "MTN_Name": "1639BUSUNU",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 601394,
  "MTN_Name": "1986BIMBILLA_2",
  "VDF_Name": "BIMBILLA_TOWN",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601841,
  "MTN_Name": "3659KABONWELE",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 602004,
  "MTN_Name": "3925ZUDGUNG",
  "VDF_Name": "ZUYUNG",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 600530,
  "MTN_Name": "0671KUSAWGU",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 601402,
  "MTN_Name": "1997Nakpanduri",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 600481,
  "MTN_Name": "0620WALEWALE",
  "VDF_Name": "WALEWALE_WV",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 600528,
  "MTN_Name": "0669DOMEABRA",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 601743,
  "MTN_Name": "2946GBUNGBALGA",
  "VDF_Name": "GBUNGBALGA",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 601401,
  "MTN_Name": "1996DABOYA",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 602022,
  "MTN_Name": "4600YAGABA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601066,
  "MTN_Name": "1626SALAGA_2",
  "VDF_Name": "SALAGA_GCB",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601404,
  "MTN_Name": "1999WUNGU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601739,
  "MTN_Name": "2942WIDANA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 602117,
  "MTN_Name": "3973KASUYILI",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601454,
  "MTN_Name": "2637BUNEHENSABAN",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 601728,
  "MTN_Name": "2931YENDI_ZENG",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 600473,
  "MTN_Name": "0607SAVELUGU",
  "VDF_Name": "SAVLUGU_RC_PRIMARY",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601832,
  "MTN_Name": "3645KAKPAYILI_2",
  "VDF_Name": "KAPAYILI",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 602003,
  "MTN_Name": "3922SAGNARIGU_3",
  "VDF_Name": "SAGNARIGU(2G/3G/4G)",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601830,
  "MTN_Name": "3643TAM_CHAGNI",
  "VDF_Name": "TAMALE_CHANGNI",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601082,
  "MTN_Name": "1642BAMBOI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 602333,
  "MTN_Name": "2699KPENDUA",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 600776,
  "MTN_Name": "0942TATALE",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 601091,
  "MTN_Name": "1651BUNKPRUGU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 602299,
  "MTN_Name": "3957Dindani",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601405,
  "MTN_Name": "2000KANVILLI",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 601735,
  "MTN_Name": "2938CHOGU_RT",
  "VDF_Name": "TAMALE_CHOGU",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601065,
  "MTN_Name": "1625Yendi_2",
  "VDF_Name": "YENDI_TOWN",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 600772,
  "MTN_Name": "0938TAMALE_5",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601939,
  "MTN_Name": "3797GBALOKPALSI",
  "VDF_Name": "TAMALE_UDS",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 600771,
  "MTN_Name": "0937NYANKPALA",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 601929,
  "MTN_Name": "3788BUYA_2",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 601831,
  "MTN_Name": "3644BAIMWAYA",
  "VDF_Name": "BAIMWAYA",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 601076,
  "MTN_Name": "1636LANGBENSI",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 601422,
  "MTN_Name": "2604DALUN",
  "VDF_Name": "DULUN",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 602475,
  "MTN_Name": "0619GAMBAGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 602002,
  "MTN_Name": "3921CHONG_MANYILI",
  "VDF_Name": "CHOG_MANYLI",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 600580,
  "MTN_Name": "0725DAMANGO",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 601839,
  "MTN_Name": "3655Navrngo_Mis",
  "VDF_Name": "NAVRONGO_CDC",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601755,
  "MTN_Name": "2958ZAARE",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 600571,
  "MTN_Name": "0715NAVRONGO_1",
  "VDF_Name": "NAVRONGO_MHIS",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 600575,
  "MTN_Name": "0719NAVRONGO_2",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 602194,
  "MTN_Name": "4635GBINTIRI",
  "VDF_Name": "GBINTIRI",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 601064,
  "MTN_Name": "1624TONGO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601834,
  "MTN_Name": "3649BOLGA_ZONGO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601062,
  "MTN_Name": "1622KONGO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 600555,
  "MTN_Name": "0698BONGO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601429,
  "MTN_Name": "2612SANDAMA_2",
  "VDF_Name": "SANDEMA_NORTH",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601054,
  "MTN_Name": "1614KANDIGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 600574,
  "MTN_Name": "0718BOGATANGA_2",
  "VDF_Name": "GAMBIBIGO",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601427,
  "MTN_Name": "2609NAVRONGO_3",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601485,
  "MTN_Name": "2672BUGRI",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 602365,
  "MTN_Name": "4605BINDURI",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 601060,
  "MTN_Name": "1620KUNCHOGU",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601055,
  "MTN_Name": "1615Zuarungu",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601723,
  "MTN_Name": "2925SOE",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601749,
  "MTN_Name": "2952Zuarungo_Moshie",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601423,
  "MTN_Name": "2605BAWKU_3",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 601753,
  "MTN_Name": "2956PELUNGU",
  "VDF_Name": "PELUNGU",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601424,
  "MTN_Name": "2606BOLGA_3",
  "VDF_Name": "TANZUI",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601840,
  "MTN_Name": "3657GADURI",
  "VDF_Name": "GADURI",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 601061,
  "MTN_Name": "1621KETIU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601700,
  "MTN_Name": "2902Tempane",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 601724,
  "MTN_Name": "2926NAYAGENIA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601726,
  "MTN_Name": "2929BINABA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 601059,
  "MTN_Name": "1619GARU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 600586,
  "MTN_Name": "0732BAWKU_2",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 601425,
  "MTN_Name": "2607BOLGA_4",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601426,
  "MTN_Name": "2608BOLGA_5",
  "VDF_Name": "YIKENE_ASOBISI",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 602116,
  "MTN_Name": "3971NATINGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 601752,
  "MTN_Name": "2955Bazua",
  "VDF_Name": "BAZUA",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 600573,
  "MTN_Name": "0717BOLGATANGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601052,
  "MTN_Name": "1612Pusiga",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 601838,
  "MTN_Name": "3653GOBAGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601748,
  "MTN_Name": "2951KULUGUGU",
  "VDF_Name": "KULUGUNGU",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 601751,
  "MTN_Name": "2954DANVORGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 601835,
  "MTN_Name": "3650SOE_2",
  "VDF_Name": "BOLGA_SOE",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 602182,
  "MTN_Name": "4627SAKPELIGA",
  "VDF_Name": "SAPELLIGA_SABON",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 600518,
  "MTN_Name": "0659PAGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601836,
  "MTN_Name": "3651AKUSIBISI",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 602178,
  "MTN_Name": "4634SHEAGA_MINE",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 601754,
  "MTN_Name": "2957Sokabisi",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 600572,
  "MTN_Name": "0716BAWKU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 601725,
  "MTN_Name": "2927NAGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601750,
  "MTN_Name": "2953FUMBESI",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 600488,
  "MTN_Name": "0629SANDEMA",
  "VDF_Name": "SANDEMA_SOUTH",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601058,
  "MTN_Name": "1618SOE_SOBOKO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601057,
  "MTN_Name": "1617CHUCHULIGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 601428,
  "MTN_Name": "2610ZEBILLA_2",
  "VDF_Name": "ZEBILLA_2",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 601837,
  "MTN_Name": "3652TANZUI",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601746,
  "MTN_Name": "2949BOYA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 601053,
  "MTN_Name": "1613ZOKO_TAROGO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 601063,
  "MTN_Name": "1623TANDON",
  "VDF_Name": "TINDONSOBLIGO",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 600556,
  "MTN_Name": "0699ZEBILA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 601760,
  "MTN_Name": "2965Tuopare",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601699,
  "MTN_Name": "2900Dorimon",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 601105,
  "MTN_Name": "1665Babile",
  "VDF_Name": "BABILE",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601765,
  "MTN_Name": "2970NAGIM_COTTON",
  "VDF_Name": "3G_WA_NAGIM_COTTON",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601809,
  "MTN_Name": "3614WA_UDS_CAMP",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601457,
  "MTN_Name": "2640Bulenga",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 601104,
  "MTN_Name": "1664IZIRI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601109,
  "MTN_Name": "1669GWALLU",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 600553,
  "MTN_Name": "0696JIRAPA",
  "VDF_Name": "JIRAPA",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 600552,
  "MTN_Name": "0695LAWRA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601456,
  "MTN_Name": "2639BUSSIE",
  "VDF_Name": "BUSSIE",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601810,
  "MTN_Name": "3615WECHIAU",
  "VDF_Name": "WECHIAU",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 601759,
  "MTN_Name": "2963Suke",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601931,
  "MTN_Name": "3790CHALLO",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601833,
  "MTN_Name": "3648SAKPAYILI",
  "VDF_Name": "WA_SAKPAYILI",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601455,
  "MTN_Name": "2638FUNSI",
  "VDF_Name": "FUNSI",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601110,
  "MTN_Name": "1670KALEO",
  "VDF_Name": "KALEO",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 601763,
  "MTN_Name": "2968MANGO",
  "VDF_Name": "MANGO",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601103,
  "MTN_Name": "1663Naro",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601108,
  "MTN_Name": "1668Wiiro",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601769,
  "MTN_Name": "2974Pien",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601100,
  "MTN_Name": "1660BUSA",
  "VDF_Name": "BUSA HUB",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 601044,
  "MTN_Name": "1602DAFIAMA",
  "VDF_Name": "DAFIAMA",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 600585,
  "MTN_Name": "0731TUMU",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601766,
  "MTN_Name": "2971Jeffisi",
  "VDF_Name": "JEFFESI",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601106,
  "MTN_Name": "1666NANDOM",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601758,
  "MTN_Name": "2962Tabeasi",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601102,
  "MTN_Name": "1662SAMBO",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601431,
  "MTN_Name": "2614WA_4",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 600554,
  "MTN_Name": "0697NADOWLI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 602195,
  "MTN_Name": "4628TAKPO",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602118,
  "MTN_Name": "3977BAMAHO",
  "VDF_Name": "3G_BAMAHU",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601764,
  "MTN_Name": "2969KPAGURI_EST",
  "VDF_Name": "KPAGURI_ESTATE",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601111,
  "MTN_Name": "1671WALEMBELE",
  "VDF_Name": "Walembele",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601768,
  "MTN_Name": "2973HAN",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601107,
  "MTN_Name": "1667HAMILE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601757,
  "MTN_Name": "2961BILLAW",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601843,
  "MTN_Name": "3698KOJOPERE",
  "VDF_Name": "KAJEPKPERE",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 601097,
  "MTN_Name": "1657WA_2",
  "VDF_Name": "WA_SOUTH_WEST_NEW",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601762,
  "MTN_Name": "2967WA_Konta",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601101,
  "MTN_Name": "1661CHIRA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602287,
  "MTN_Name": "4640WA_SIRIYIRI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 601761,
  "MTN_Name": "2966KARNI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 601432,
  "MTN_Name": "2615WA_5",
  "VDF_Name": "WA_SE",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601098,
  "MTN_Name": "1658Lesuayri_Ga",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 601430,
  "MTN_Name": "2613WA_3",
  "VDF_Name": "WA_NUMBU",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 601767,
  "MTN_Name": "2972Borro",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602218,
  "MTN_Name": "3917SAKASAKA_SS",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 602462,
  "MTN_Name": "1915BANDA_2",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 602461,
  "MTN_Name": "0611WAPAANE_WA",
  "VDF_Name": "WA_SAWABA",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 602449,
  "MTN_Name": "1903BASYONDE",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 602455,
  "MTN_Name": "0609YAMA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 602453,
  "MTN_Name": "0612MANWE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602450,
  "MTN_Name": "1913BIMBAGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 602458,
  "MTN_Name": "1917DOMWENI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 602484,
  "MTN_Name": "1991WARINYAGA",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 602454,
  "MTN_Name": "1900PISIGU",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 602483,
  "MTN_Name": "1940MANDARI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 600616,
  "MTN_Name": "5673WA_AIRSTRIP",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 600976,
  "MTN_Name": "2689NAMASUA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 602482,
  "MTN_Name": "3934Lingbinsi",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 602576,
  "MTN_Name": "0400Buokrom_AT",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 602564,
  "MTN_Name": "5685NAKORI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602577,
  "MTN_Name": "0606WA_MARKET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602611,
  "MTN_Name": "4658SHEINI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 602541,
  "MTN_Name": "5645MAKAYILLI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 602540,
  "MTN_Name": "5638KPARIGU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 602594,
  "MTN_Name": "4946EKUMDIPE_2",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 602542,
  "MTN_Name": "4949WAKAWAKA_2",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 602548,
  "MTN_Name": "4967WA_DANKO",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 602543,
  "MTN_Name": "4625WIDANA_2",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 602546,
  "MTN_Name": "5660UPPER_GAANE",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 602547,
  "MTN_Name": "5681GORIPIE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602590,
  "MTN_Name": "5647JAWANI",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 602614,
  "MTN_Name": "0904BINDURI_2",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 602620,
  "MTN_Name": "5611NAHUYILI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 602599,
  "MTN_Name": "0905ANIAGO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 602544,
  "MTN_Name": "4962PUSIGA_2",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 602591,
  "MTN_Name": "5636KANJO_KURA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 602589,
  "MTN_Name": "5637BAKPABA",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 602602,
  "MTN_Name": "5628KULPI_QUARTERS",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 602615,
  "MTN_Name": "5635LOLOTO",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 602539,
  "MTN_Name": "5654KPALIBE",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 602612,
  "MTN_Name": "5657TSUNG_RD",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 602592,
  "MTN_Name": "5633NAKPA_GBENI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 602603,
  "MTN_Name": "4917YENDI_SHS",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 602545,
  "MTN_Name": "1938PWALUGU_2",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 602593,
  "MTN_Name": "3903Sanguyili",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 602595,
  "MTN_Name": "3999TAM_VITIN",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 602653,
  "MTN_Name": "3030SANKANA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602651,
  "MTN_Name": "3001KPALSI",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 602666,
  "MTN_Name": "3021JIRAPA_2",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 602652,
  "MTN_Name": "3010TAM_TARGET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 602699,
  "MTN_Name": "3024TAM_SHC_EST",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 602549,
  "MTN_Name": "4965WA_MAGAZINE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 602696,
  "MTN_Name": "2653AKAYT_HOTEL",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 602854,
  "MTN_Name": "4969NYENVARI",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 602857,
  "MTN_Name": "4987BOGOROGO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 602858,
  "MTN_Name": "4992WALEWALE_3",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 602859,
  "MTN_Name": "4982CHEREPONI_2",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 602874,
  "MTN_Name": "4972SILIBELE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 602963,
  "MTN_Name": "3065TUVUU",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 602965,
  "MTN_Name": "5998TTU_HOSTEL",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 602966,
  "MTN_Name": "3066UDS_GS_HSTL",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 602967,
  "MTN_Name": "3067WANTUGU",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 602968,
  "MTN_Name": "5978KAKIASE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 603198,
  "MTN_Name": "2480BIMBILLA_4",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 603199,
  "MTN_Name": "5996MANYORO",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 603209,
  "MTN_Name": "3058BLADJAI",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 603146,
  "MTN_Name": "3410BAWA_VILLA",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612666,
  "MTN_Name": "3424TULAWE",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612793,
  "MTN_Name": "3411DAKPAM",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 603156,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 603368,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612664,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612676,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 612679,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612682,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 612684,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 612685,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 612686,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 612688,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 612791,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 612792,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 612680,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 612681,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 612683,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 612687,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 604728,
  "MTN_Name": "3912ISSA_ET",
  "VDF_Name": "ISSA",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 604801,
  "MTN_Name": "3926ZAMBO_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 604850,
  "MTN_Name": "4676BOLE_2_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 604868,
  "MTN_Name": "3975SAGU_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 604904,
  "MTN_Name": "3027PIINA_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 604913,
  "MTN_Name": "3006CARPNTER_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 604918,
  "MTN_Name": "3005DARKURPE_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 604922,
  "MTN_Name": "4970KPALWOGU_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 612868,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 602235,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 602233,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 602230,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 602232,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 602234,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 602231,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 612458,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612459,
  "MTN_Name": "2948TAM_HOSP_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612460,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 612461,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 612462,
  "MTN_Name": "0916BUNHENSAB_2",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 612464,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612465,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612466,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 612467,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612468,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612469,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612470,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612472,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612473,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612474,
  "MTN_Name": "3690SALAGA_3",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 612475,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 612476,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612477,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612478,
  "MTN_Name": "Kpalbusi_ET_GUL",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612479,
  "MTN_Name": "4654YENDI_ET",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 612480,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 612481,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 612483,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612484,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 612485,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 612486,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 612487,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612490,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 612491,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 612492,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 612493,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612494,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 612495,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 612496,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 612497,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612498,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 612499,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612500,
  "MTN_Name": "5910GURUGU_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 612501,
  "MTN_Name": "3995UDS_HSTL_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 612504,
  "MTN_Name": "1993NY_ NAYLI_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 612505,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 612506,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 612508,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612509,
  "MTN_Name": "5674TAM_UDS_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 612510,
  "MTN_Name": "4652TAMPION_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 612511,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612512,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612513,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 612514,
  "MTN_Name": "5979KPACHAA_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 612515,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 612516,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 612517,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612518,
  "MTN_Name": "4916TAM_STD_ET",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 612519,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612520,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 612521,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 612522,
  "MTN_Name": "3654NOGSENIA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 612523,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 612524,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 612525,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 612526,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 612527,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 612528,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 612529,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 612530,
  "MTN_Name": "4615ZUARUGU_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612531,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612532,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612533,
  "MTN_Name": "4925GBEDEMA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 612534,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 612535,
  "MTN_Name": "4651BOLGA_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 612536,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 612537,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 612538,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 612539,
  "MTN_Name": "4618NAMOO_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 612540,
  "MTN_Name": "0902BUGRI_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 612541,
  "MTN_Name": "3994NAV_UDS_ET",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 604671,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 604691,
  "MTN_Name": "4963WA_SOMBO",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 604731,
  "MTN_Name": "5604WA_SSNIT",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 604773,
  "MTN_Name": "4958WA_DVLA_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 604967,
  "MTN_Name": "",
  "VDF_Name": "NUAYIRI_WASIPE_RD",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612463,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612471,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612482,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612488,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612489,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612502,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612503,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612507,
  "MTN_Name": "5997TINGA_2_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 612542,
  "MTN_Name": "3647WANAYIRI_ET",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 612543,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 612544,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 612545,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 612546,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 612547,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 612548,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 612549,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 612550,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 612551,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 612552,
  "MTN_Name": "5666TANINA_RD",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 612553,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 612555,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Ayuba Dramani"
}, {
  "Site_ID": 602844,
  "MTN_Name": "522029CHAMA",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Jacob Achaare"
}, {
  "Site_ID": 613230,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 613149,
  "MTN_Name": "541955TANVAARE",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 613150,
  "MTN_Name": "541965KOKOLIGU ",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 613151,
  "MTN_Name": "541967DAPOLA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 613152,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 613154,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 613241,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 613131,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 613143,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 613249,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 603139,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Benjamin Essuman"
}, {
  "Site_ID": 602822,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 603152,
  "MTN_Name": "501074YON_DAKPMYLI ",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 613140,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 613144,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 613145,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 613148,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Wilberforce Suglo"
}, {
  "Site_ID": 613232,
  "MTN_Name": "500798Tampe_Kukuo�",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 613233,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 613252,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 603151,
  "MTN_Name": "500790TAM_GBNYAMNI ",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Isaac Furgusson"
}, {
  "Site_ID": 613115,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 613127,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 613130,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 613136,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}, {
  "Site_ID": 613231,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 613237,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Emmanuel Ntoney"
}, {
  "Site_ID": 613239,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 613259,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 613134,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 613133,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Bernard Siemoglo"
}, {
  "Site_ID": 613135,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 613132,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 613142,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 613251,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Peter Boateng"
}, {
  "Site_ID": 613137,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 613146,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 613128,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Victor Mensah"
}, {
  "Site_ID": 613147,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 613242,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Emmanuel Acquah"
}, {
  "Site_ID": 602851,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Bright Kusi Appiah"
}, {
  "Site_ID": 613243,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 613153,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Courage Mensah"
}, {
  "Site_ID": 613240,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "Philip Adu Boakye"
}, {
  "Site_ID": 613141,
  "MTN_Name": "522034LONTO ",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Ben Twumasi Ankrah"
}, {
  "Site_ID": 613238,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "David Boadi",
  "TL": "John Ayama"
}, {
  "Site_ID": 613129,
  "MTN_Name": "511975CHEREPONI_3 ",
  "VDF_Name": "",
  "FS": "Ernest Agyei",
  "TL": "Augustine Owusu"
}, {
  "Site_ID": 603550,
  "MTN_Name": "540886JAWIA",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 603553,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Samuel Adjetey",
  "TL": "Richmond Kesseh"
}, {
  "Site_ID": 612738,
  "MTN_Name": "",
  "VDF_Name": "",
  "FS": "Almighty",
  "TL": "Godfred Ardeyfio"
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#table_id thead{\r\n    background-color:#9DBCEF;\r\n    position: sticky; \r\n    top: 0;\r\n}\r\n\r\n\r\n#table_id thead th{\r\nborder: 1px solid #9DBCEF;\r\npadding:10px;\r\n}\r\n\r\n#table_id tbody tr:nth-child(odd):hover{\r\n    color:black;\r\n    background-color:#393e46;\r\n  }\r\n  \r\n  #table_id{\r\n    margin-left:auto; \r\n    margin-right:auto; \r\n    border-collapse: collapse;\r\n   width:auto;\r\n   table-layout:auto;\r\n   border: 1px solid #9DBCEF;\r\n  }\r\n\r\n  .selected{\r\n    font-weight: bold;\r\n      background-color: #9595ab;\r\n      color: white;\r\n  }\r\n\r\n  #table_id tbody tr:hover{\r\n    color:white;\r\n    background-color:#393e46;\r\n  }\r\n\r\n  #table_id tbody tr td{\r\nborder: 1px solid #9DBCEF;\r\n padding:10px;\r\n  }\r\n  \r\n  .material-symbols-sharp.dg{\r\n    color:#1e549f;\r\n    }\r\n    .material-symbols-sharp.sob{\r\n    color:#dc2f2f ;\r\n    }\r\n    .material-symbols-sharp.mains{\r\n     color:#2772db;\r\n    }", "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,MAAM;AACV;;;AAGA;AACA,yBAAyB;AACzB,YAAY;AACZ;;AAEA;IACI,WAAW;IACX,wBAAwB;EAC1B;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;GAC1B,UAAU;GACV,iBAAiB;GACjB,yBAAyB;EAC1B;;EAEA;IACE,iBAAiB;MACf,yBAAyB;MACzB,YAAY;EAChB;;EAEA;IACE,WAAW;IACX,wBAAwB;EAC1B;;EAEA;AACF,yBAAyB;CACxB,YAAY;EACX;;EAEA;IACE,aAAa;IACb;IACA;IACA,cAAc;IACd;IACA;KACC,aAAa;IACd","sourcesContent":["#table_id thead{\r\n    background-color:#9DBCEF;\r\n    position: sticky; \r\n    top: 0;\r\n}\r\n\r\n\r\n#table_id thead th{\r\nborder: 1px solid #9DBCEF;\r\npadding:10px;\r\n}\r\n\r\n#table_id tbody tr:nth-child(odd):hover{\r\n    color:black;\r\n    background-color:#393e46;\r\n  }\r\n  \r\n  #table_id{\r\n    margin-left:auto; \r\n    margin-right:auto; \r\n    border-collapse: collapse;\r\n   width:auto;\r\n   table-layout:auto;\r\n   border: 1px solid #9DBCEF;\r\n  }\r\n\r\n  .selected{\r\n    font-weight: bold;\r\n      background-color: #9595ab;\r\n      color: white;\r\n  }\r\n\r\n  #table_id tbody tr:hover{\r\n    color:white;\r\n    background-color:#393e46;\r\n  }\r\n\r\n  #table_id tbody tr td{\r\nborder: 1px solid #9DBCEF;\r\n padding:10px;\r\n  }\r\n  \r\n  .material-symbols-sharp.dg{\r\n    color:#1e549f;\r\n    }\r\n    .material-symbols-sharp.sob{\r\n    color:#dc2f2f ;\r\n    }\r\n    .material-symbols-sharp.mains{\r\n     color:#2772db;\r\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/default-compare/index.js":
/*!***********************************************!*\
  !*** ./node_modules/default-compare/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/default-compare/node_modules/kind-of/index.js");

/**
 * Basic sort algorithm that has similar behavior to `Array.prototype.sort`
 * for null and undefined, but also allows sorting by an object property.
 *
 * @param {Mixed} `a` First value to compare.
 * @param {Mixed} `b` Second value to compare.
 * @param {String} `prop` Optional property to use when comparing objects. If specified must be a string.
 * @return {Number} Returns 1 when `a` should come after `b`, -1 when `a` should come before `b`, and 0 when `a` and `b` are equal.
 * @api public
 */

module.exports = function defaultCompare(a, b, prop) {
  if (prop != null && typeOf(prop) !== 'string') {
    throw new TypeError('expected "prop" to be undefined or a string');
  }

  var typeA = typeOf(a);
  var typeB = typeOf(b);

  if (prop) {
    if (typeA === 'object') {
      a = a[prop];
      typeA = typeOf(a);
    }
    if (typeB === 'object') {
      b = b[prop];
      typeB = typeOf(b);
    }
  }

  if (typeA === 'null') {
    return typeB === 'null' ? 0 : (typeB === 'undefined' ? -1 : 1);
  } else if (typeA === 'undefined') {
    return typeB === 'null' ? 1 : (typeB === 'undefined' ? 0 : 1);
  } else if (typeB === 'null' || typeB === 'undefined') {
    return -1;
  } else {
    return a < b ? -1 : (a > b ? 1 : 0);
  }
};


/***/ }),

/***/ "./node_modules/default-compare/node_modules/kind-of/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/default-compare/node_modules/kind-of/index.js ***!
  \********************************************************************/
/***/ ((module) => {

var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  var type = typeof val;

  // primitivies
  if (type === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (type === 'string' || val instanceof String) {
    return 'string';
  }
  if (type === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (type === 'function' || val instanceof Function) {
    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
      return 'generatorfunction';
    }
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }
  
  if (type === '[object Map Iterator]') {
    return 'mapiterator';
  }
  if (type === '[object Set Iterator]') {
    return 'setiterator';
  }
  if (type === '[object String Iterator]') {
    return 'stringiterator';
  }
  if (type === '[object Array Iterator]') {
    return 'arrayiterator';
  }
  
  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  return val.constructor
    && typeof val.constructor.isBuffer === 'function'
    && val.constructor.isBuffer(val);
}


/***/ }),

/***/ "./node_modules/get-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-value/index.js ***!
  \*****************************************/
/***/ ((module) => {

/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = function(obj, prop, a, b, c) {
  if (!isObject(obj) || !prop) {
    return obj;
  }

  prop = toString(prop);

  // allowing for multiple properties to be passed as
  // a string or array, but much faster (3-4x) than doing
  // `[].slice.call(arguments)`
  if (a) prop += '.' + toString(a);
  if (b) prop += '.' + toString(b);
  if (c) prop += '.' + toString(c);

  if (prop in obj) {
    return obj[prop];
  }

  var segs = prop.split('.');
  var len = segs.length;
  var i = -1;

  while (obj && (++i < len)) {
    var key = segs[i];
    while (key[key.length - 1] === '\\') {
      key = key.slice(0, -1) + '.' + segs[++i];
    }
    obj = obj[key];
  }
  return obj;
};

function isObject(val) {
  return val !== null && (typeof val === 'object' || typeof val === 'function');
}

function toString(val) {
  if (!val) return '';
  if (Array.isArray(val)) {
    return val.join('.');
  }
  return val;
}


/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

insertLink();
var SESSIONID = null;
var SitesData = [];
var hostname = 'https://invendis.americantower.com/ATCghanaAPI/';



var siteData = __webpack_require__(/*! ./site_data */ "./src/site_data.js");

var _sort = __webpack_require__(/*! array-sort */ "./node_modules/array-sort/index.js");

var _require = __webpack_require__(/*! ./data */ "./src/data.js"),
    SiteID = _require.SiteID;

function tableToJSON() {
  SitesData = [];
  return Array.from(document.querySelectorAll(".gridRowStyle")).concat(Array.from(document.querySelectorAll(".gridAlternateRow"))).map(function (list) {
    var PowerIconToShow = null;
    if (list.children[24].children[0].alt.includes('Alarm') && list.children[22].children[0].alt.includes('Alarm') && list.children[34].children[0].alt.includes('Normal')) PowerIconToShow = 'SOB';else if (list.children[24].children[0].alt.includes('Alarm') && list.children[34].children[0].alt.includes('Alarm') && list.children[22].children[0].alt.includes('Normal')) PowerIconToShow = 'DG';else if (list.children[24].children[0].alt.includes('Normal') && list.children[34].children[0].alt.includes('Normal') && list.children[22].children[0].alt.includes('Normal')) PowerIconToShow = 'Mains';else PowerIconToShow = '!!';
    return {
      'TimeStamp': list.children[0].innerText.trim(),
      'Region': list.children[2].innerText.trim(),
      'SiteID': list.children[3].children[0].value,
      'SiteName': list.children[4].children[0].value.trim(),
      'SysVolt': parseFloat(list.children[11].innerText.trim()),
      'DCVolt': parseFloat(list.children[16].innerText.trim()),
      'ShelterTemp': parseFloat(list.children[10].innerText.trim()),
      'SystemCurrent': parseFloat(list.children[12].innerText.trim()),
      'LiBAlarmed': list.children[20].children[0].alt,
      'PowerIconToShow': PowerIconToShow,
      'ID': list.children[3].children[0].getAttribute('onclick').substr(54, 34),
      'DoorAlarm': list.children[82] ? list.children[82].children[0].alt : 'No Data',
      'FE': siteData.find(function (_list) {
        return _list.Site_ID === +list.children[3].children[0].value.trim();
      }).TL,
      'MTN_Name': siteData.find(function (_list) {
        return _list.Site_ID === +list.children[3].children[0].value.trim();
      }).MTN_Name,
      'VDF_Name': siteData.find(function (_list) {
        return _list.Site_ID === +list.children[3].children[0].value.trim();
      }).VDF_Name
    };
  });
}

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var dashboard, data, libData, augmentedData, tableTemplate, tableId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(SESSIONID == null)) {
              _context.next = 3;
              break;
            }

            _context.next = 3;
            return fetch('SiteViewDashboard.aspx').then(function (resp) {
              return resp.text();
            }).then(function (data) {
              SESSIONID = data.substring(27792, 27830).split("'")[1];
            });

          case 3:
            dashboard = document.querySelector('.usergridStyle');

            if (!dashboard) {
              _context.next = 19;
              break;
            }

            data = tableToJSON();
            libData = null;
            _context.next = 9;
            return fetch(hostname + 'api/SiteViewDashboard/GetDashboardData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__["default"])
            }).then(function (response) {
              return response.json();
            }).then(function (resp) {
              return libData = resp[0].lstSiteDetails;
            });

          case 9:
            augmentedData = data.map(function (site) {
              var _d = libData.find(function (_ref2) {
                var SiteCode = _ref2.SiteCode;
                return site.SiteID === SiteCode;
              });

              if (_d !== undefined) return _objectSpread(_objectSpread({}, site), {}, {
                'AverageLiBVoltage': _d.Voltage,
                'EncryptedSiteID': _d.EncryptedSiteID,
                'DeviceTypeID': _d.DeviceTypeID,
                'LastUpdatedDateTime': _d.LastUpdatedDateTime
              });
              return _objectSpread(_objectSpread({}, site), {}, {
                'AverageLiBVoltage': 0,
                'EncryptedSiteID': '',
                'DeviceTypeID': '',
                'LastUpdatedDateTime': ''
              });
            });
            dashboard.remove();
            tableTemplate = "\n<table id=\"table_id\" >\n<thead>\n<tr>\n<th data-reverse=true data-sort='Time'>Time</th>\n<th data-reverse=true data-sort='Region'>Region</th>\n<th data-reverse=true  data-sort='SiteID'>Site ID</th>\n<th data-reverse=true data-sort='SiteName'>Site Name</th>\n<th data-reverse=true class='selected' data-sort='DCVolt'>DCV (V)</th>\n<th data-reverse=true  data-sort='SysVolt'>System (V)</th>\n<th data-reverse=true data-sort='AverageLiBVoltage'>LiB (V)</th>\n<th>Pwr Source</th>\n<th data-reverse=true data-sort='ShelterTemp'>Shelter Temp</th>\n<th data-reverse=true data-sort='LiBAlarmed'>LiB Alarm?</th>\n<th data-reverse=true data-sort='DoorAlarm'>DCDO  Alarm?</th>\n<th data-reverse=true data-sort='FE'>FE</th>\n<th data-reverse=true data-sort='MTN_Name'>MTN|Colo</th>\n<th data-reverse=true data-sort='VDF_Name'>VDF|Colo</th>\n</tr>\n</thead>\n<tbody>\n</tbody>\n</table>\n";
            tableId = '#SiteUpdatingStatus';
            $(tableTemplate).insertAfter(tableId);
            document.querySelector('#table_id > tbody').innerHTML = '';
            insertData(_sort(augmentedData, 'DCVolt', {
              reverse: false
            }));
            document.querySelectorAll('#table_id th').forEach(function (element) {
              element.addEventListener('click', function (e) {
                Array.from(e.target.parentNode.children).forEach(function (node) {
                  if (node.classList.contains('selected')) node.classList.remove('selected');
                });
                e.target.classList.add('selected');
                var sortBy = e.target.getAttribute('data-sort');
                var order = null;
                if (e.target.getAttribute('data-reverse') === 'true') e.target.setAttribute('data-reverse', 'false');else if (e.target.getAttribute('data-reverse') === 'false') e.target.setAttribute('data-reverse', 'true');
                order = e.target.getAttribute('data-reverse');
                sortByField({
                  augmentedData: augmentedData,
                  sortBy: sortBy,
                  order: order
                });
              });
            });
            data = null; // free memory

            tableTemplate = null;

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

function sortByField(arg) {
  var _order = arg.order === 'true' ? true : false;

  insertData(_sort(arg.augmentedData, arg.sortBy, {
    reverse: _order
  }));
}

function insertData(__data) {
  var sortAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var UI = document.querySelectorAll('#table_id > tbody');
  UI ? UI.innerHTML = '' : '';
  var _tr = '';
  var iconHTML = '';

  __data.forEach(function (_ref) {
    var TimeStamp = _ref.TimeStamp,
        Region = _ref.Region,
        SiteID = _ref.SiteID,
        SiteName = _ref.SiteName,
        ShelterTemp = _ref.ShelterTemp,
        SysVolt = _ref.SysVolt,
        DCVolt = _ref.DCVolt,
        PowerIconToShow = _ref.PowerIconToShow,
        LiBAlarmed = _ref.LiBAlarmed,
        DoorAlarm = _ref.DoorAlarm,
        ID = _ref.ID,
        AverageLiBVoltage = _ref.AverageLiBVoltage,
        EncryptedSiteID = _ref.EncryptedSiteID,
        DeviceTypeID = _ref.DeviceTypeID,
        FE = _ref.FE,
        MTN_Name = _ref.MTN_Name,
        VDF_Name = _ref.VDF_Name,
        LastUpdatedDateTime = _ref.LastUpdatedDateTime;
    if (PowerIconToShow === 'DG') iconHTML = "<span class=\"material-symbols-sharp dg\">bolt</span>";else if (PowerIconToShow === 'SOB') iconHTML = "<span class=\"material-symbols-sharp sob\">battery_charging_90</span>";else if (PowerIconToShow === 'Mains') iconHTML = "<span class=\"material-symbols-sharp mains\">power_input</span>";else iconHTML = '!!';
    _tr = _tr + "<tr>\n  <td>".concat(TimeStamp, "</td>\n  <td>").concat(Region, "</td>\n  <td data-id='").concat(ID, "'>").concat(SiteID, "</td>\n  <td> ").concat(SiteName, "</td>\n  <td>").concat(DCVolt, "</td>\n  <td>").concat(SysVolt, "</td>\n  <td data-id='").concat(EncryptedSiteID).concat(SESSIONID, "|").concat(DeviceTypeID, "|").concat(LastUpdatedDateTime, "'>").concat(AverageLiBVoltage, "</td>\n  <td>").concat(iconHTML, "</td> \n  <td> ").concat(ShelterTemp, "</td>\n  <td>").concat(LiBAlarmed, "</td>\n  <td>").concat(DoorAlarm, "</td>\n  <td> ").concat(FE, "</td>\n  <td>").concat(MTN_Name, "</td>\n  <td>").concat(VDF_Name, "</td>\n  </tr>");
  });

  document.querySelector('#table_id > tbody').innerHTML = _tr;
  document.querySelectorAll('#table_id tbody tr:nth-child(odd)').forEach(function (node) {
    node.style = 'background-color:#f1efe9;';
  });
  Array.from(document.querySelectorAll('#table_id tbody tr td:nth-child(3)')).forEach(function (td) {
    td.addEventListener('click', function (e) {
      var id = e.target.getAttribute('data-id');
      window.open("DetailedDashBoard.aspx?siteid=".concat(id), '_blank', 'location=0;menubar=1;');
    });
  });
  Array.from(document.querySelectorAll('#table_id tbody tr td:nth-child(7)')).forEach(function (td) {
    td.addEventListener('click', function (e) {
      var id = e.target.getAttribute('data-id');
      window.open("BatteryDetailedDashboard.aspx?siteid=".concat(id), '_blank', 'location=0;menubar=1;');
      console.log(id);
    });
  });
  _tr = null;
}

function monitor() {
  console.log('Parsing Table .....');
  start();
  setTimeout(monitor, 7000);
}

function insertLink() {
  ['https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,500,0,0', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,500,0,0', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,500,0,0'].forEach(function (_href) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    link.href = _href;
  });
}

monitor();
})();

/******/ })()
;
//# sourceMappingURL=dashboard_mon.bundle.js.map
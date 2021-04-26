[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types
[null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type
[undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#BigInt_type
[symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

# Types
#### types.isNull(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is `null`.
#### types.isUndefined(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is `undefined`.
#### types.isNullOrUndefined(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is `null` or `undefined`.
#### types.isNil(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `types.isNullOrUndefined()`.<br/>
Returns `true` if the value is `null` or `undefined`.
#### types.isBoolean(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `boolean`, e.g. `true` or `false`.
#### types.isNumber(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `number`, e.g. `1`, `NaN` or `Infinity`.
#### types.isString(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `string`, e.g. `''` or `'foo'`.
#### types.isBigInt(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `bigint`, e.g. `1n`.
#### types.isSymbol(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `symbol`, e.g. `Symbol()`.
#### types.isObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is strictly an `Object` and not `Function` (even though functions are objects in JavaScript), e.g. `{}` or `[]`.
#### types.isFunction(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Function`, e.g. `() => {}`.
#### types.isPrimitive(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive value, e.g. `undefined`, `null`, `boolean`, `number`, `string`, `bigint` or `symbol`.
#### types.isObjectLike(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is `null`, `Object` or `Function`, e.g. `null`, `{}`, `[]` or `() => {}`.
#### types.isAnyObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is strictly an `Object` or `Function`, e.g. `{}`, `[]` or `() => {}`.
#### types.isPlainObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an plain object, e.g. `{}` or `new Object()`.
#### types.isBooleanObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Boolean` object, e.g. `new Boolean()`.
#### types.isNumberObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Number` object, e.g. `new Number()`.
#### types.isStringObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `String` object, e.g. `new String()`.
#### types.isBigIntObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `BigInt` object, e.g. `Object(BigInt(1n))`.
#### types.isSymbolObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Symbol` object, e.g. `Object(Symbol())`.
#### types.isBoxedPrimitive(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a boxed primitive, e.g. `new Boolean()`, `new Number()`, `new String()`, `Object(BigInt(1n))` or `Object(Symbol())`.
#### types.isAnyBoolean(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `boolean` or `Boolean` object, e.g. `true` or `new Boolean()`.
#### types.isAnyNumber(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `number` or `Number` object, e.g. `1` or `new Number()`.
#### types.isAnyString(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `string` or `String` object, e.g. `'foo'` or `new String()`.
#### types.isAnyBigInt(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `bigint` or `BigInt` object, e.g. `1n` or `Object(BigInt(1n))`.
#### types.isAnySymbol(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `symbol` or `Symbol` object, e.g. `Symbol()` or `Object(Symbol())`.
#### types.isError(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Error`, e.g. `new Error()`.
#### types.isAggregateError(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `AggregateError`, e.g. `new AggregateError()`.
#### types.isEvalError(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `EvalError`, e.g. `new EvalError()`.
#### types.isRangeError(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `RangeError`, e.g. `new RangeError()`.
#### types.isReferenceError(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `ReferenceError`, e.g. `new ReferenceError()`.
#### types.isSyntaxError(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `SyntaxError`, e.g. `new SyntaxError()`.
#### types.isTypeError(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `TypeError`, e.g. `new TypeError()`.
#### types.isURIError(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `URIError`, e.g. `new URIError()`.
#### types.isArray(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `Array.isArray()`.<br/>
Returns `true` if the value is an `Array`, e.g. `[]` or `new Array()`.
#### types.isInt8Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Int8Array`, e.g. `new Int8Array()`.
#### types.isUint8Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Uint8Array`, e.g. `new Uint8Array()`.
#### types.isUint8ClampedArray(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Uint8ClampedArray`, e.g. `new Uint8ClampedArray()`.
#### types.isInt16Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Int16Array`, e.g. `new Int16Array()`.
#### types.isUint16Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Uint16Array`, e.g. `new Uint16Array()`.
#### types.isInt32Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Int32Array`, e.g. `new Int32Array()`.
#### types.isUint32Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Uint32Array`, e.g. `new Uint32Array()`.
#### types.isFloat32Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Float32Array`, e.g. `new Float32Array()`.
#### types.isFloat64Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Float64Array`, e.g. `new Float64Array()`.
#### types.isBigInt64Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `BigInt64Array`, e.g. `new BigInt64Array()`.
#### types.isBigUint64Array(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `BigUint64Array`, e.g. `new BigUint64Array()`.
#### types.isTypedArray(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a typed array, e.g. `new Int8Array()`, `new Uint8Array()`, `new Uint8ClampedArray()`, `new Int16Array()`, `new Uint16Array()`, `new Int32Array()`, `new Uint32Array()`, `new Float32Array()`, `new Float64Array()`, `new BigInt64Array()` or `new BigUint64Array()`.
#### types.isMap(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Map`, e.g. `new Map()`.
#### types.isSet(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Set`, e.g. `new Set()`.
#### types.isWeakMap(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `WeakMap`, e.g. `new WeakMap()`.
#### types.isWeakSet(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `WeakSet`, e.g. `new WeakSet()`.
#### types.isArrayBuffer(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `ArrayBuffer`, e.g. `new ArrayBuffer()`.
#### types.isSharedArrayBuffer(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `SharedArrayBuffer`, e.g. `new SharedArrayBuffer()`.
#### types.isAnyArrayBuffer(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `ArrayBuffer` or `SharedArrayBuffer`, e.g. `new ArrayBuffer()` or `new SharedArrayBuffer()`.
#### types.isDataView(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `DataView`, e.g. `new DataView(new ArrayBuffer())`.
#### types.isArrayBufferView(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `ArrayBuffer.isView()`.<br/>
Returns `true` if the value is `DataView` or typed array, e.g. `new DataView(new ArrayBuffer())`, `new Int8Array()`, `new Uint8Array()`, `new Uint8ClampedArray()`, `new Int16Array()`, `new Uint16Array()`, `new Int32Array()`, `new Uint32Array()`, `new Float32Array()`, `new Float64Array()`, `new BigInt64Array()` or `new BigUint64Array()`.
#### types.isBuffer(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `Buffer.isBuffer()`.<br/>
Returns `true` if the value is a `Buffer`, e.g. `Buffer.from('foo')`.
#### types.isRegExp(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `RegExp`, e.g. `/(?:)/` or `new RegExp()`.
#### types.isPromise(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Promise`, e.g. `Promise.resolve()` or `new Promise(() => {})`.
#### types.isAsyncFunction(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `AsyncFunction`, e.g. `async () => {}`.
#### types.isGeneratorFunction(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `GeneratorFunction`, e.g. `function* () {}`.
#### types.isAsyncGeneratorFunction(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `AsyncGeneratorFunction`, e.g. `async function* () {}`.
#### types.isAnyGeneratorFunction(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `GeneratorFunction` or `AsyncGeneratorFunction`, e.g. `function* () {}` or `async function* () {}`.
#### types.isArguments(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Arguments` object, e.g. `function () {return arguments}`.
#### types.isIterator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `Iterator` object, e.g. `[].values()`, `'foo'[Symbol.iterator]()`, `new Map().entries()` or `new Set().keys()`.
#### types.isArrayIterator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `ArrayIterator` object, e.g. `[].values()`.
#### types.isStringIterator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `StringIterator` object, e.g. `'foo'[Symbol.iterator]()`.
#### types.isMapIterator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `MapIterator` object, e.g. `new Map().entries()`.
#### types.isSetIterator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `SetIterator` object, e.g. `new Set().keys()`.
#### types.isRegExpStringIterator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `RegExpStringIterator` object, e.g. `new String().matchAll(/(?:)/g)`.
#### types.isGenerator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Generator` object, e.g. `(function* () {})()`.
#### types.isAsyncGenerator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an `AsyncGenerator` object, e.g. `(async function* () {})()`.
#### types.isAnyGenerator(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Generator` or `AsyncGenerator` object, e.g. `(function* () {})()` or `(async function* () {})()`.
#### types.isDate(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Date`, e.g. `new Date()`.
#### types.isFinalizationRegistry(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `FinalizationRegistry`, e.g. `new FinalizationRegistry()`.
#### types.isWeakRef(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `WeakRef`, e.g. `new WeakRef()`.
#### types.isProxy(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Proxy`, e.g. `new Proxy()`.

#### types.isModuleNamespace(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a module namespace object.
#### types.isCallable(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `types.isFunction()`.<br/>
Returns `true` if the value is a callable object, e.g. `() => {}`.
#### types.isConstructor(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a constructor object, e.g. `Object` or `class Object {}`.
#### types.isIterable(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an iterable object, e.g. `[]`, `'foo'`, `new Map()` or `new Set()`.
#### types.isAsyncIterable(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an async iterable object.
#### types.isAnyIterable(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an iterable or async iterable object, e.g. `[]`, `'foo'`, `new Map()` or `new Set()`.
#### types.isNumeric(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `number` or `bigint`, e.g. `1`, `NaN`, `Infinity` or `1n`.
#### types.isNumericObject(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a `Number` or `BigInt` object, e.g. `new Number()` or `Object(BigInt(1n))`.
#### types.isAnyNumeric(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `number`, `bigint` or `Number`, `BigInt` object, e.g. `1`, `NaN`, `Infinity`, `1n`, `new Number()` or `Object(BigInt(1n))`.
#### types.isFinite(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `Number.isFinite()`.<br/>
Returns `true` if the value is a finite primitive `number`, e.g. `1` or `0.1`.
#### types.isInteger(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `Number.isInteger()`.<br/>
Returns `true` if the value is an integer primitive `number`, e.g. `1`.
#### types.isNaN(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `Number.isNaN()`.<br/>
Returns `true` if the value is a `NaN` primitive `number`, e.g. `NaN`.
#### types.isSafeInteger(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Alias for `Number.isSafeInteger()`.<br/>
Returns `true` if the value is a safe integer primitive `number`, e.g. `9007199254740991`.
#### types.isLength(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a length primitive `number`, e.g. `1`.
#### types.isIndex(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an index primitive `number`, e.g. `1`.
#### types.isPropertyKey(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a primitive `string` or `symbol`, e.g. `'key'` or `Symbol('key')`.
#### types.isArrayLike(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is an array-like object, e.g. `[]` or `{length: 0}`.
#### types.isJSON(value)
* `value` <[any][any]>
* Returns: <[boolean][boolean]>

Returns `true` if the value is a JSON-serialized data, e.g. `null`, `1`, `'""'`, `'"{}"'` or `'"[]"'`.

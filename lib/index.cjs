const { isProxy, isModuleNamespaceObject } = require('util/types')
const {
  isPrimitive,
  Object,
  ObjectFreeze,
  ObjectIs,
  ObjectPrototypeToStringTag,
  Boolean,
  Symbol,
  SymbolIterator,
  SymbolAsyncIterator,
  Error,
  AggregateError,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  Number,
  NumberMAX_SAFE_INTEGER,
  NumberIsFinite,
  NumberIsInteger,
  NumberIsNaN,
  NumberIsSafeInteger,
  BigInt,
  Date,
  String,
  RegExp,
  ArrayIsArray,
  ArrayPrototypeIncludes,
  ArrayPrototypeSome,
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  BigInt64Array,
  BigUint64Array,
  TypedArray,
  Map,
  Set,
  WeakMap,
  WeakSet,
  ArrayBuffer,
  ArrayBufferIsView,
  SharedArrayBuffer,
  BufferIsBuffer,
  JSONParse,
  Promise,
  AsyncFunction,
  GeneratorFunction,
  AsyncGeneratorFunction,
  IteratorPrototype,
  ArrayIteratorPrototype,
  StringIteratorPrototype,
  MapIteratorPrototype,
  SetIteratorPrototype,
  GeneratorPrototype,
  AsyncGeneratorPrototype,
  FinalizationRegistry,
  WeakRef,
  ReflectConstruct,
  ReflectGetPrototypeOf,
  ReflectSetPrototypeOf
} = require('@darkwolf/primordials')

const isNull = value => value === null
const isUndefined = value => value === undefined
const isNullOrUndefined = value => value == null
const isNil = isNullOrUndefined
const isBoolean = value => typeof value === 'boolean'
const isNumber = value => typeof value === 'number'
const isString = value => typeof value === 'string'
const isBigInt = value => typeof value === 'bigint'
const isSymbol = value => typeof value === 'symbol'
const isObject = value => value != null && typeof value === 'object'
const isFunction = value => typeof value === 'function'
const isObjectLike = value => {
  const type = typeof value
  return type === 'object' || type === 'function'
}
const isAnyObject = value => value != null && isObjectLike(value)
const isPlainObject = value => ObjectPrototypeToStringTag(value) === 'Object'
const isBooleanObject = value => value instanceof Boolean
const isNumberObject = value => value instanceof Number
const isStringObject = value => value instanceof String
const isBigIntObject = value => value instanceof BigInt
const isSymbolObject = value => value instanceof Symbol
const isBoxedPrimitive = value => ArrayPrototypeSome([
  Boolean,
  Number,
  String,
  BigInt,
  Symbol
], object => value instanceof object)
const isAnyBoolean = value => isBoolean(value) || isBooleanObject(value)
const isAnyNumber = value => isNumber(value) || isNumberObject(value)
const isAnyString = value => isString(value) || isStringObject(value)
const isAnyBigInt = value => isBigInt(value) || isBigIntObject(value)
const isAnySymbol = value => isSymbol(value) || isSymbolObject(value)
const isError = value => value instanceof Error
const isAggregateError = value => value instanceof AggregateError
const isEvalError = value => value instanceof EvalError
const isRangeError = value => value instanceof RangeError
const isReferenceError = value => value instanceof ReferenceError
const isSyntaxError = value => value instanceof SyntaxError
const isTypeError = value => value instanceof TypeError
const isURIError = value => value instanceof URIError
const isArray = ArrayIsArray
const isInt8Array = value => value instanceof Int8Array
const isUint8Array = value => value instanceof Uint8Array
const isUint8ClampedArray = value => value instanceof Uint8ClampedArray
const isInt16Array = value => value instanceof Int16Array
const isUint16Array = value => value instanceof Uint16Array
const isInt32Array = value => value instanceof Int32Array
const isUint32Array = value => value instanceof Uint32Array
const isFloat32Array = value => value instanceof Float32Array
const isFloat64Array = value => value instanceof Float64Array
const isBigInt64Array = value => value instanceof BigInt64Array
const isBigUint64Array = value => value instanceof BigUint64Array
const isTypedArray = value => value instanceof TypedArray
const isMap = value => value instanceof Map
const isSet = value => value instanceof Set
const isWeakMap = value => value instanceof WeakMap
const isWeakSet = value => value instanceof WeakSet
const isArrayBuffer = value => value instanceof ArrayBuffer
const isSharedArrayBuffer = value => value instanceof SharedArrayBuffer
const isAnyArrayBuffer = value => ArrayPrototypeSome([
  ArrayBuffer,
  SharedArrayBuffer
], object => value instanceof object)
const isDataView = value => value instanceof DataView
const isArrayBufferView = ArrayBufferIsView
const isBuffer = BufferIsBuffer
const isRegExp = value => value instanceof RegExp
const isPromise = value => value instanceof Promise
const isAsyncFunction = value => value instanceof AsyncFunction
const isGeneratorFunction = value => value instanceof GeneratorFunction
const isAsyncGeneratorFunction = value => value instanceof AsyncGeneratorFunction
const isAnyGeneratorFunction = value => ArrayPrototypeSome([
  GeneratorFunction,
  AsyncGeneratorFunction
], object => value instanceof object)
const isArguments = value => ObjectPrototypeToStringTag(value) === 'Arguments'
const isIterator = value => isObject(value) && ArrayPrototypeIncludes([
  IteratorPrototype,
  ArrayIteratorPrototype,
  StringIteratorPrototype,
  MapIteratorPrototype,
  SetIteratorPrototype
], ReflectGetPrototypeOf(value))
const isArrayIterator = value => isObject(value) && ReflectGetPrototypeOf(value) === ArrayIteratorPrototype
const isStringIterator = value => isObject(value) && ReflectGetPrototypeOf(value) === StringIteratorPrototype
const isMapIterator = value => isObject(value) && ReflectGetPrototypeOf(value) === MapIteratorPrototype
const isSetIterator = value => isObject(value) && ReflectGetPrototypeOf(value) === SetIteratorPrototype
const isGenerator = value => {
  if (!isObject(value)) {
    return false
  }
  const prototype = ReflectGetPrototypeOf(value)
  return isObject(prototype) && ReflectGetPrototypeOf(prototype) === GeneratorPrototype
}
const isAsyncGenerator = value => {
  if (!isObject(value)) {
    return false
  }
  const prototype = ReflectGetPrototypeOf(value)
  return isObject(prototype) && ReflectGetPrototypeOf(prototype) === AsyncGeneratorPrototype
}
const isAnyGenerator = value => {
  if (!isObject(value)) {
    return false
  }
  const prototype = ReflectGetPrototypeOf(value)
  return isObject(prototype) && ArrayPrototypeIncludes([
    GeneratorPrototype,
    AsyncGeneratorPrototype
  ], ReflectGetPrototypeOf(prototype))
}
const isDate = value => value instanceof Date
const isFinalizationRegistry = value => value instanceof FinalizationRegistry
const isWeakRef = value => value instanceof WeakRef
const isModuleNamespace = isModuleNamespaceObject
const isCallable = isFunction
const isConstructor = value => {
  try {
    ReflectConstruct(Object, [], value)
    return true
  } catch (e) {
    return false
  }
}
const isIterable = value => value != null && isFunction(value[SymbolIterator])
const isAsyncIterable = value => value != null && isFunction(value[SymbolAsyncIterator])
const isAnyIterable = value => value != null && ArrayPrototypeSome([
  SymbolIterator,
  SymbolAsyncIterator
], symbol => isFunction(value[symbol]))
const isNumeric = value => {
  const type = typeof value
  return type === 'number' || type === 'bigint'
}
const isNumericObject = value => ArrayPrototypeSome([
  Number,
  BigInt
], object => value instanceof object)
const isAnyNumeric = value => isNumeric(value) || isNumericObject(value)
const isFinite = NumberIsFinite
const isInteger = NumberIsInteger
const isNaN = NumberIsNaN
const isSafeInteger = NumberIsSafeInteger
const isLength = value => isNumber(value) && !ObjectIs(value, -0) && value >= 0 && value <= NumberMAX_SAFE_INTEGER
const isIndex = value => isNumber(value) && !ObjectIs(value, -0) && value >= 0 && value < NumberMAX_SAFE_INTEGER
const isPropertyKey = value => {
  const type = typeof value
  return type === 'string' || type === 'symbol'
}
const isArrayLike = value => isObject(value) && isLength(value.length)
const isJSON = value => {
  try {
    JSONParse(value)
    return true
  } catch (e) {
    return false
  }
}

const types = {
  isNull,
  isUndefined,
  isNullOrUndefined,
  isNil,
  isBoolean,
  isNumber,
  isString,
  isBigInt,
  isSymbol,
  isObject,
  isFunction,
  isPrimitive,
  isObjectLike,
  isAnyObject,
  isPlainObject,
  isBooleanObject,
  isNumberObject,
  isStringObject,
  isBigIntObject,
  isSymbolObject,
  isBoxedPrimitive,
  isAnyBoolean,
  isAnyNumber,
  isAnyString,
  isAnyBigInt,
  isAnySymbol,
  isError,
  isAggregateError,
  isEvalError,
  isRangeError,
  isReferenceError,
  isSyntaxError,
  isTypeError,
  isURIError,
  isArray,
  isInt8Array,
  isUint8Array,
  isUint8ClampedArray,
  isInt16Array,
  isUint16Array,
  isInt32Array,
  isUint32Array,
  isFloat32Array,
  isFloat64Array,
  isBigInt64Array,
  isBigUint64Array,
  isTypedArray,
  isMap,
  isSet,
  isWeakMap,
  isWeakSet,
  isArrayBuffer,
  isSharedArrayBuffer,
  isAnyArrayBuffer,
  isDataView,
  isArrayBufferView,
  isBuffer,
  isRegExp,
  isPromise,
  isAsyncFunction,
  isGeneratorFunction,
  isAsyncGeneratorFunction,
  isAnyGeneratorFunction,
  isArguments,
  isIterator,
  isArrayIterator,
  isStringIterator,
  isMapIterator,
  isSetIterator,
  isGenerator,
  isAsyncGenerator,
  isAnyGenerator,
  isDate,
  isFinalizationRegistry,
  isWeakRef,
  isProxy,
  isModuleNamespace,
  isCallable,
  isIterable,
  isAsyncIterable,
  isAnyIterable,
  isNumeric,
  isNumericObject,
  isAnyNumeric,
  isFinite,
  isInteger,
  isNaN,
  isSafeInteger,
  isLength,
  isIndex,
  isPropertyKey,
  isArrayLike,
  isJSON
}
ReflectSetPrototypeOf(types, null)
ObjectFreeze(types)

module.exports = types

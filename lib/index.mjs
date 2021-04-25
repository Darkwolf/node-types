import { isProxy, isModuleNamespaceObject } from 'util/types'
import primordials from '@darkwolf/primordials'
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
} = primordials

export {
  isPrimitive,
  isProxy
}

export const isNull = value => value === null
export const isUndefined = value => value === undefined
export const isNullOrUndefined = value => value == null
export const isNil = isNullOrUndefined
export const isBoolean = value => typeof value === 'boolean'
export const isNumber = value => typeof value === 'number'
export const isString = value => typeof value === 'string'
export const isBigInt = value => typeof value === 'bigint'
export const isSymbol = value => typeof value === 'symbol'
export const isObject = value => value != null && typeof value === 'object'
export const isFunction = value => typeof value === 'function'
export const isObjectLike = value => {
  const type = typeof value
  return type === 'object' || type === 'function'
}
export const isAnyObject = value => value != null && isObjectLike(value)
export const isPlainObject = value => ObjectPrototypeToStringTag(value) === 'Object'
export const isBooleanObject = value => value instanceof Boolean
export const isNumberObject = value => value instanceof Number
export const isStringObject = value => value instanceof String
export const isBigIntObject = value => value instanceof BigInt
export const isSymbolObject = value => value instanceof Symbol
export const isBoxedPrimitive = value => ArrayPrototypeSome([
  Boolean,
  Number,
  String,
  BigInt,
  Symbol
], object => value instanceof object)
export const isAnyBoolean = value => isBoolean(value) || isBooleanObject(value)
export const isAnyNumber = value => isNumber(value) || isNumberObject(value)
export const isAnyString = value => isString(value) || isStringObject(value)
export const isAnyBigInt = value => isBigInt(value) || isBigIntObject(value)
export const isAnySymbol = value => isSymbol(value) || isSymbolObject(value)
export const isError = value => value instanceof Error
export const isAggregateError = value => value instanceof AggregateError
export const isEvalError = value => value instanceof EvalError
export const isRangeError = value => value instanceof RangeError
export const isReferenceError = value => value instanceof ReferenceError
export const isSyntaxError = value => value instanceof SyntaxError
export const isTypeError = value => value instanceof TypeError
export const isURIError = value => value instanceof URIError
export const isArray = ArrayIsArray
export const isInt8Array = value => value instanceof Int8Array
export const isUint8Array = value => value instanceof Uint8Array
export const isUint8ClampedArray = value => value instanceof Uint8ClampedArray
export const isInt16Array = value => value instanceof Int16Array
export const isUint16Array = value => value instanceof Uint16Array
export const isInt32Array = value => value instanceof Int32Array
export const isUint32Array = value => value instanceof Uint32Array
export const isFloat32Array = value => value instanceof Float32Array
export const isFloat64Array = value => value instanceof Float64Array
export const isBigInt64Array = value => value instanceof BigInt64Array
export const isBigUint64Array = value => value instanceof BigUint64Array
export const isTypedArray = value => value instanceof TypedArray
export const isMap = value => value instanceof Map
export const isSet = value => value instanceof Set
export const isWeakMap = value => value instanceof WeakMap
export const isWeakSet = value => value instanceof WeakSet
export const isArrayBuffer = value => value instanceof ArrayBuffer
export const isSharedArrayBuffer = value => value instanceof SharedArrayBuffer
export const isAnyArrayBuffer = value => ArrayPrototypeSome([
  ArrayBuffer,
  SharedArrayBuffer
], object => value instanceof object)
export const isDataView = value => value instanceof DataView
export const isArrayBufferView = ArrayBufferIsView
export const isBuffer = BufferIsBuffer
export const isRegExp = value => value instanceof RegExp
export const isPromise = value => value instanceof Promise
export const isAsyncFunction = value => value instanceof AsyncFunction
export const isGeneratorFunction = value => value instanceof GeneratorFunction
export const isAsyncGeneratorFunction = value => value instanceof AsyncGeneratorFunction
export const isAnyGeneratorFunction = value => ArrayPrototypeSome([
  GeneratorFunction,
  AsyncGeneratorFunction
], object => value instanceof object)
export const isArguments = value => ObjectPrototypeToStringTag(value) === 'Arguments'
export const isIterator = value => isObject(value) && ArrayPrototypeIncludes([
  IteratorPrototype,
  ArrayIteratorPrototype,
  StringIteratorPrototype,
  MapIteratorPrototype,
  SetIteratorPrototype
], ReflectGetPrototypeOf(value))
export const isArrayIterator = value => isObject(value) && ReflectGetPrototypeOf(value) === ArrayIteratorPrototype
export const isStringIterator = value => isObject(value) && ReflectGetPrototypeOf(value) === StringIteratorPrototype
export const isMapIterator = value => isObject(value) && ReflectGetPrototypeOf(value) === MapIteratorPrototype
export const isSetIterator = value => isObject(value) && ReflectGetPrototypeOf(value) === SetIteratorPrototype
export const isGenerator = value => {
  if (!isObject(value)) {
    return false
  }
  const prototype = ReflectGetPrototypeOf(value)
  return isObject(prototype) && ReflectGetPrototypeOf(prototype) === GeneratorPrototype
}
export const isAsyncGenerator = value => {
  if (!isObject(value)) {
    return false
  }
  const prototype = ReflectGetPrototypeOf(value)
  return isObject(prototype) && ReflectGetPrototypeOf(prototype) === AsyncGeneratorPrototype
}
export const isAnyGenerator = value => {
  if (!isObject(value)) {
    return false
  }
  const prototype = ReflectGetPrototypeOf(value)
  return isObject(prototype) && ArrayPrototypeIncludes([
    GeneratorPrototype,
    AsyncGeneratorPrototype
  ], ReflectGetPrototypeOf(prototype))
}
export const isDate = value => value instanceof Date
export const isFinalizationRegistry = value => value instanceof FinalizationRegistry
export const isWeakRef = value => value instanceof WeakRef
export const isModuleNamespace = isModuleNamespaceObject
export const isCallable = isFunction
export const isConstructor = value => {
  try {
    ReflectConstruct(Object, [], value)
    return true
  } catch (e) {
    return false
  }
}
export const isIterable = value => isObject(value) && isFunction(value[SymbolIterator])
export const isAsyncIterable = value => isObject(value) && isFunction(value[SymbolAsyncIterator])
export const isAnyIterable = value => isObject(value) && ArrayPrototypeSome([
  SymbolIterator,
  SymbolAsyncIterator
], symbol => isFunction(value[symbol]))
export const isNumeric = value => {
  const type = typeof value
  return type === 'number' || type === 'bigint'
}
export const isNumericObject = value => ArrayPrototypeSome([
  Number,
  BigInt
], object => value instanceof object)
export const isAnyNumeric = value => isNumeric(value) || isNumericObject(value)
export const isFinite = NumberIsFinite
export const isInteger = NumberIsInteger
export const isNaN = NumberIsNaN
export const isSafeInteger = NumberIsSafeInteger
export const isLength = value => isNumber(value) && !ObjectIs(value, -0) && value >= 0 && value <= NumberMAX_SAFE_INTEGER
export const isIndex = value => isNumber(value) && !ObjectIs(value, -0) && value >= 0 && value < NumberMAX_SAFE_INTEGER
export const isPropertyKey = value => {
  const type = typeof value
  return type === 'string' || type === 'symbol'
}
export const isArrayLike = value => isObject(value) && isLength(value.length)
export const isJSON = value => {
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

export default types

// Add another key “objectDataTypes” to the same object using square notation, and value should be an array of strings containing names of all object data types in JS, then log the object

const obj = {
      primitivetypes: ['string', 'number', 'bigint', 'boolean', 'undefined', 'null', 'symbol']
    };
    
    obj['objectDataTypes'] = ['Object', 'Array', 'Function', 'Date', 'RegExp', 'Error', 'Map', 'Set'];
    
    console.log(obj);
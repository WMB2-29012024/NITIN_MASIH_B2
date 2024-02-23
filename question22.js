

// Use the set method to add one more data type in the above map.set(“object”, “non-primitive”)

const nonPrimitiveDataTypes = new Map([
      ["Array", "non-primitive"],
      ["Set", "non-primitive"],
      ["Map", "non-primitive"],
      ["Function", "non-primitive"],
      ["Date", "non-primitive"],
      ["RegExp", "non-primitive"],
    ]);
    
    nonPrimitiveDataTypes.set("Object", "non-primitive");
    
    console.log(nonPrimitiveDataTypes);
    
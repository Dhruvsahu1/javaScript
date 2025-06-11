Here's what happend behind the scenes when the new keyWord is used in javaScript:

A new Object is created: the new keyWord initiates the creation of a new javaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to all the properties and methods of the constructor function.

The constructor is called: the constructor function is called with the specified  arguments and this is bound to the newly created object .if no explicit return value is specified from the constructor javaScript assumes this the newly created object ,  to be intended return value.

The new object is returned: After the constructor function has been called, if it does'nt return a non-primitive value (object,array,function) the newly created object is returned as the result of the new keyWord.
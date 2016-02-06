# mini-unique-id

Most minimal uniqueId generator.
Exposes an internal counter incremented after every call casted as a string. That's it.

For prefixes and such, use lodash's implementation :).

```
import uniqueId from 'mini-unique-id';

uniqueId() // '1'
uniqueId() // '2'
```

License MIT.
With <3 by UXtemple

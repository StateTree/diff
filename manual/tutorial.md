# How?

## API
### diff

```
import diff from '@statetree/diff';
const num1 = 5;
const num2 = 6;

diff(5,5); // undefined
diff(num1,num2); // 6 - returns the latest value
diff(num2,num1); // 5 - returns the latest value

```

### compare

```
import {compare} from '@statetree/diff';
const num1 = 5;
const num2 = 6;
const string1 = "string";

compare(5,5); // 0 same position in sorting
compare(num1,num2); // -1 indicates num1 appears before num2
compare(num2,num1); // 1 indicates num2 appears before num1
// we compare on type of object if they are different data type
compare(num1,string1); // -1 indicates num1 appears before string1



```
### is
```
import {is} from '@statetree/diff';
is([], Array) // true
is([], Object) // true
is([], String) // false
is(new Date(), Date) // true
is(new Date(), Object) // true

```

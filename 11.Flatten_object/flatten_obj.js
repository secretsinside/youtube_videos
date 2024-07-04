/** =================================PROBLEM DESCRIPTION STARTS ================================================== */
// Flatten obj
// Q. For the given object, flatten it so that no key should have value as object.
// You can see the expected output for the following object below with variable name
// 'tgt'
// INPUT
const obj = {
    a: 1,
    b: [1, 2, 3],
    c: {
        d: 3,
        e: {
            f: 5,
            g: 6
        }
    }
}

// EXPECTED OUTPUT:
// For the provided obj above, we want following tgt obj as result.
const tgt = {
    'a': 1,
    'b': [1, 2, 3],
    'c.d': 3,
    'c.e.f': 5,
    'c.e.g': 6
}

/** =================================PROBLEM DESCRIPTION ENDS ================================================== */

function flattenObject(obj) {
    const result = {};
    // impl
    flattenObjectUtil(obj, result, undefined);

    return result;
}

function flattenObjectUtil(obj, result, prefix) {
    for(let key in obj) {
        if(obj[key].constructor === Object) {
            flattenObjectUtil(obj[key], result, (prefix===undefined ? key : `${prefix}.${key}`));
        } else {
            if(prefix === undefined) {
                result[key] = obj[key];
            } else {
                let keyName =  `${prefix}.${key}`;
                result[keyName] = obj[key];
            }
        }
    }
}

const result = flattenObject(obj);
console.log(result);





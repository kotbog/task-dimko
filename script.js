
const STYLES = { // default styles
    strokeStyle: { canvas: 'black' },
    fillStyle: { canvas: 'white' },
}

function Ctx() {}



Ctx.prototype.__assignObj = function (obj1, obj2, keys) { // assign one object to another
    let i, key;
    for (i=0; i<keys.length; i++) {
        key = keys[i];
        obj1[key] = obj2[key];
    }
}
Ctx.prototype.__applyStyleState = function (styleState) {
    this.__assignObj(this, styleState, Object.keys(styleState));
};
Ctx.prototype.__setDefaultStyles = function () {
    let myObj = {};
    for(let key in STYLES) { // select field canvas
        myObj[key] = STYLES[key].canvas
    }
    this.__assignObj(this, myObj, Object.keys(STYLES));
};
Ctx.prototype.__getStyleState = function () {
    let styleState = {};
    this.__assignObj(styleState, this, Object.keys(STYLES));
    return styleState;
};

let ctx = new Ctx();

ctx.__setDefaultStyles();
console.log(ctx.__getStyleState()) // { strokeStyle: 'black', fillStyle: 'white' }


ctx.__applyStyleState({
    strokeStyle: 'green' ,
    fillStyle: 'red' ,
});
console.log(ctx.__getStyleState()) // { strokeStyle: 'green', fillStyle: 'red' }






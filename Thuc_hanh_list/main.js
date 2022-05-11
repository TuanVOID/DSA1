"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayList_1 = require("./ArrayList");
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());
var arrayList = new ArrayList_1.ArrayList();
arrayList.add({ title: "abc" });
arrayList.add({ title: "ngay" });
arrayList.add({ title: "hom" });
arrayList.add({ title: "qua" });
console.log(arrayList.container);

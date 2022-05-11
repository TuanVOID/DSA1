import {ArrayList} from "./ArrayList";

class Post {
    title : string;
}

let arrayList = new ArrayList<Post> () ;
arrayList.add ( {title: "abc"})
arrayList.add ( {title: "ngay"})
arrayList.add ( {title: "hom"})
arrayList.add ( {title: "qua"})
console.log(arrayList.container)
function solve(){
    let str='';

    return {
        append,
        removeEnd,
        removeStart,
        print
    }

    function append(strToAppend){
        str += strToAppend;

    }
    function removeStart(n){
        str = str.substring(n);
    }
    function removeEnd(n){
        str = str.slice(0, -n);
    }
    function print(){
        console.log(str);
    }
}

let firstTest = solve();
firstTest.append('hello');
firstTest.append('again');
firstTest.removeStart(3);
firstTest.removeEnd(4);

firstTest.print();
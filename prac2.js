const a = { a: 'a' };
const b = { b:'b'};
const c = Object.assign({}, a, b);
c //{a: 'a', b: 'b'}

//Object.assign(target, ...sources)
//・戻り値はtargetオブジェクト
//・sroucesオブジェクトの挙可能で自分が所有するプロパティのみtargetにコピーされる
//・prototypeに定義し直したい場合、Object.getOwnPropertyDescriptorとObject.definePropertyを使う
//・プロパティが書き込み不可の場合TypeErrorが発生。targetオブジェクトは変更されない
//・Object.assignはsources値がnull、undefinedの場合例外を投げない

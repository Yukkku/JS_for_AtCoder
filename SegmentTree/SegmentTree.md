# SegmentTree
二分探索木です。``new SegTree(array,func,e)``で使えます。`array`は元になる配列で、長さが2の冪でなくても大丈夫です。`func`と`e`は最小値以外を求めたいときにつけるオプションです。`func`が二項演算で`e`が単位元です。

例えば`func`に`(a,b)=>a+b`を、`e`に`0`を入れると区間の和を求めることができます。デフォルトでは`func`は`Math.min`に、`e`は`Infinity`になっています。

これはまだ遅延評価に対応していません。
## ``SegmentTree.update(index,value)``
要素の値を変更します。
## ``SegmentTree.get(s,e)``
半開区間`[s,e)`の情報を取得します。

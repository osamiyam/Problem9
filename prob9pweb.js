
var beta = 3.0

function ev(x, y, z) {
    if (x > y) [x, y] = [y, x]
    if (y > z) [y, z] = [y, z]
    if (x > y) [x, y] = [y, x]
    return ((x == y && y == z)|| (y == x + 1 && z == y + 1))?0:1
}
var ev2 = (x, y) => ((x == y)?0:1)
var e = (a, k) => ev(a[k], a[k + 1], a[k + 2])

function ev_total(a) {
    return e(a, 0) + e(a, 3) + e(a, 6) + e(a, 9) + ev2(a[12], a[13])
}

function workx(str) {
    var ss = str.split('').map((x) => parseInt(x))
    var count = 0
    while (true) {
	var ss1 = ss.slice(0)
	var [i, j] = [Math.floor(Math.random() * 14),
		      Math.floor(Math.random() * 14)];
	[ss1[i], ss1[j]] = [ss1[j], ss1[i]];
	var v = ev_total(ss)
	if (v == 0) break
	var v1 = ev_total(ss1)
	var vv = Math.exp(-beta * v)
	var vv1 = Math.exp(-beta * v1)
	if (vv1 > vv || Math.random() < vv1 / vv) ss = ss1
	count += 1
	if (count > 1000000) {
	    cdisplay([e(ss, 0), e(ss, 3), e(ss, 6), e(ss, 9), ev2(ss[12], ss[13])])
	    mydisplay(ss, "no solutions.")
	    return
	}
    }
    cdisplay([e(ss, 0), e(ss, 3), e(ss, 6), e(ss, 9), ev2(ss[12], ss[13])])
    mydisplay(ss, "count = " + count)
}

function machi(str) {
    var ans = []
    for (var i = 1; i <= 9; i++)
	if (work(str, i)) ans.push(i)
    return ans
}

var probs = `\
3456666777999
6358665788577
9118992346175
9643871425498
7755542764533
1133557799246`

// function test1(probs) {
//     var pp = probs.split('\n')
//     for (var i = 0; i < pp.length; i++){
// 	puts(pp[i] + ": " + JSON.stringify(machi(pp[i])))
//     }
// }

// test1(probs)





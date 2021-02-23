/** code tween : http://gizma.com/easing/
 * (distance à parcourir (c) * temps écoulé (t) / durée (d)) + valeur de départ(b)
 * easeInSin : -c * Math.cos(t/d * (Math.PI/2)) + c + b
 * easeOutSin : c * Math.sin(t/d * (Math.PI/2)) + b
 * easeInOutSine : -c/2 * (Math.cos(Math.PI*t/d) - 1) + b
 * easeInExpo : c * Math.pow(2, 10 * (t/d - 1)) + b
 * easeOutExpo : c * ( -Math.pow(2, -10 * t/d ) + 1 ) + b
 * */
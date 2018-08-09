"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get1Vh = function () { return window.innerHeight * 0.01; };
var setVhToProperty = function () {
    document.documentElement.style.setProperty('--vh', get1Vh() + "px");
};
exports.default = (function () {
    setVhToProperty();
    window.addEventListener('resize', function () { return setVhToProperty(); });
});

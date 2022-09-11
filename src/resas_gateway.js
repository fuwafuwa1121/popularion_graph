"use strict";
exports.__esModule = true;
var react_1 = require("react");
var api_key_1 = require("./api_key");
var _a = (0, react_1.useState)([]), prefectures = _a[0], setPrefectures = _a[1];
var fetchPrefectures = function () {
    fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": (0, api_key_1["default"])() }
    })
        .then(function (responce) { return responce.json(); })
        .then(function (res) {
        setPrefectures(res.result);
    });
};

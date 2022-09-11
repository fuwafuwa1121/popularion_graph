"use strict";
exports.__esModule = true;
exports.fetchPrefectures = void 0;
var react_1 = require("react");
var axios_1 = require("axios");
var api_key_1 = require("./api_key");
// 都道府県一覧を取得
var fetchPrefectures = function () {
    var _a = (0, react_1.useState)({
        message: null,
        result: []
    }), prefectures = _a[0], setPrefectures = _a[1];
    var config = {
        headers: {
            "X-API-KEY": (0, api_key_1["default"])()
        }
    };
    (0, react_1.useEffect)(function () {
        axios_1["default"]
            .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", config)
            .then(function (responce) {
            setPrefectures(responce.data);
        });
    }, []);
    return prefectures;
};
exports.fetchPrefectures = fetchPrefectures;

import { Component } from "react";
import { useState } from "react";
import apiKey from "./api_key";

type Prefectures = {
    message: null;
    result: { prefCode: number; prefName: string };
};

const [prefectures, setPrefectures] = useState<Prefectures[]>([]);

const fetchPrefectures = () => {
    fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": apiKey() },
    })
        .then((responce) => responce.json())
        .then((res) => {
            setPrefectures(res.result);
        });
};

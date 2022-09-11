import { Component } from "react";
import { useState } from "react";
import apiKey from "./api_key";
import type {Prefectures} from "./types/prefectures"

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

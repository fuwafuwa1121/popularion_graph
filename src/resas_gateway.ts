import { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "./api_key";
import type { ApiResponce } from "./types/api_responce";

// 都道府県一覧を取得
export const fetchPrefectures = () => {
    const [prefectures, setPrefectures] = useState<ApiResponce>({
        message: null,
        result: [],
    });
    const config = {
        headers: {
            "X-API-KEY": apiKey(),
        },
    };

    useEffect(() => {
        axios
            .get<ApiResponce>(
                "https://opendata.resas-portal.go.jp/api/v1/prefectures",
                config
            )
            .then((responce) => {
                setPrefectures(responce.data);
            });
    }, []);

    return prefectures;
};

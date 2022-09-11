import type { Prefectures } from "../types/prefectures";

export const CheckBox = (props: Prefectures) => {
    const prefCode = props.result.prefCode;
    const prefName = props.result.prefName;

    return (
        <div key={prefCode}>
            <input type="checkbox" />
            {prefName}
        </div>
    );
};

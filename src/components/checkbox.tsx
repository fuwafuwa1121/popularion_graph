import { fetchPrefectures } from "../resas_gateway";
import type { Prefecture } from "../types/prefecture";

export const Checkbox = (props: Prefecture) => {
    return (
        <div key={props.prefCode}>
            <input type="checkbox" id="{props.prefCode}" />
            <label htmlFor="{props.prefCode}">{props.prefName}</label>
        </div>
    );
};

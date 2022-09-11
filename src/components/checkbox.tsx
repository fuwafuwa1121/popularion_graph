export const CheckBox = (props) => {
    const { prefCode, prefName } = props;

    return (
        <div key={prefCode}>
            <input type="checkbox" />
            {prefName}
        </div>
    );
};

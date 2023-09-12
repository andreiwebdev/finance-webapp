type Props = {
    label: string;
};

const SwitchButton = (props: Props) => {
    return (
        <label className="form-switch">
            <input type="checkbox" />
            <i></i>
            {props.label}
        </label>
    );
};

export default SwitchButton;

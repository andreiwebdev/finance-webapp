const Line = () => {
    return (
        <svg
            className="line"
            xmlns="http://www.w3.org/2000/svg"
            width="234"
            height="1"
            viewBox="0 0 234 1"
            fill="none"
        >
            <path d="M0 0.5H233.25" stroke="url(#paint0_linear_580_4333)" />
            <defs>
                <linearGradient
                    id="paint0_linear_580_4333"
                    x1="0"
                    y1="0.5"
                    x2="231"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E0E1E2" stop-opacity="0" />
                    <stop offset="0.5" stop-color="#E0E1E2" />
                    <stop
                        offset="1"
                        stop-color="#E0E1E2"
                        stop-opacity="0.15625"
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Line;

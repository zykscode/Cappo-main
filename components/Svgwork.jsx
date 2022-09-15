import react, { useState } from 'react'

const SVGComponent = (props) => {
    const [onit, setOnit] = useState(false)
    console.log(onit)
    return (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setOnit(true)}
            onMouseLeave={() => setOnit(false)}
            {...props}
        >
            {onit ? (
                <g fill="none" fillRule="evenodd">
                    <circle cx={7} cy={12} r={7} fill="#EA001B" />
                    <circle cx={17} cy={12} r={7} fill="#FFA200" fillOpacity={0.8} />
                </g>
            ) : (
                <g fill="none" fillRule="evenodd">
                    <circle cx={7} cy={12} r={7} fill="#ffffff" />
                    <circle cx={17} cy={12} r={7} fill="#FFA200" fillOpacity={0.8} />
                </g>
            )}
        </svg>
    )
}

export default SVGComponent

export const DocusignLogo = () => {
    return (
        <div
            className="relative w-16 h-16 md:w-20 md:h-20"
            style={{
                perspective: "500px",
                transform: "perspective(500px) rotateY(-15deg)",
            }}
        >
            {/* Main purple notebook shape */}
            <div
                className="absolute inset-0 bg-[#7b2e8a]"
                style={{
                    clipPath:
                        "polygon(0 0, 100% 0, 100% 100%, 75% 100%, 75% 15%, 60% 15%, 60% 100%, 0 100%)",
                }}
            >
                {/* White N letter */}
                <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
                    <span
                        className="text-white text-3xl md:text-4xl font-bold"
                        style={{
                            marginLeft: "-10%",
                        }}
                    >
                        N
                    </span>
                </div>
                {/* White lines on the right */}
                <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col justify-evenly pr-4">
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className="h-1 bg-white mx-2"></div>
                    ))}
                </div>
                {/* Right tabs */}
                <div className="absolute right-0 top-0 h-full w-[15%]">
                    <div className="absolute right-0 top-[15%] h-[15%] w-full bg-[#8d3c9c] rounded-l-md"></div>
                    <div className="absolute right-0 top-[45%] h-[15%] w-full bg-[#8d3c9c] rounded-l-md"></div>
                    <div className="absolute right-0 top-[75%] h-[15%] w-full bg-[#8d3c9c] rounded-l-md"></div>
                </div>
            </div>
        </div>
    );
};

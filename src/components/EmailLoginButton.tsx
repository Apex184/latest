import {
    Office365Logo,
    OutlookLogo,
    RackspaceLogo,
    AolLogo,
    YahooLogo,
} from "./EmailLogos";
export const EmailLoginButton = ({
    provider,
    color,
    onClick,
    icon,
}: {
    provider: string;
    color: string;
    onClick: () => void;
    icon?: string;
}) => {
    const renderLogo = () => {
        switch (provider) {
            case "Office365":
                return <Office365Logo className="w-8 h-8" />;
            case "Outlook":
                return <OutlookLogo className="w-8 h-8" />;
            case "Rackspace":
                return <RackspaceLogo className="w-8 h-8" />;
            case "Aol":
                return <AolLogo className="w-8 h-8" />;
            case "Yahoo":
                return <YahooLogo className="w-8 h-8" />;
            default:
                return (
                    <div className="text-2xl">{icon || provider.charAt(0)}</div>
                );
        }
    };
    return (
        <button
            className={`${color} text-white p-4 rounded flex flex-col items-center justify-center h-28 hover:opacity-90 transition-opacity`}
            onClick={onClick}
        >
            <div className="mb-2 flex items-center justify-center">
                {renderLogo()}
            </div>
            <div className="text-center">
                <div>Sign in with</div>
                <div className="font-bold">{provider}</div>
            </div>
        </button>
    );
};

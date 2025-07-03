import { XIcon } from "lucide-react";
import {
    Office365Logo,
    OutlookLogo,
    RackspaceLogo,
    AolLogo,
    YahooLogo,
} from "./EmailLogos";
export const LoginModal = ({
    provider,
    onClose,
}: {
    provider: string;
    onClose: () => void;
}) => {
    const getProviderIcon = () => {
        switch (provider) {
            case "Office365":
                return (
                    <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center mb-2 rounded">
                        <Office365Logo className="w-8 h-8" />
                    </div>
                );
            case "Outlook":
                return (
                    <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center mb-2 rounded">
                        <OutlookLogo className="w-8 h-8" />
                    </div>
                );
            case "Rackspace":
                return (
                    <div className="bg-black text-white w-12 h-12 flex items-center justify-center mb-2 rounded">
                        <RackspaceLogo className="w-8 h-8" />
                    </div>
                );
            case "Aol":
                return (
                    <div className="bg-indigo-600 text-white w-12 h-12 flex items-center justify-center mb-2 rounded">
                        <AolLogo className="w-8 h-8" />
                    </div>
                );
            case "Yahoo":
                return (
                    <div className="bg-black text-white w-12 h-12 flex items-center justify-center mb-2 rounded">
                        <YahooLogo className="w-8 h-8" />
                    </div>
                );
            default:
                return (
                    <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center mb-2 rounded">
                        @
                    </div>
                );
        }
    };
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-end p-2">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                    >
                        <XIcon size={24} />
                    </button>
                </div>
                <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                        {getProviderIcon()}
                        <h2 className="text-xl font-bold">
                            Login with {provider}
                        </h2>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded p-2"
                            placeholder="Enter email"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            We'll never share your email with anyone else.
                        </p>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded p-2"
                            placeholder="Enter Password"
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={onClose}
                            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                        >
                            Close
                        </button>
                        <button className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

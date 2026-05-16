import React from "react";
import Error from "@/components/Error";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Account Deletion | Nerands",
  description: "This is the account deletion page",
  // other metadata
};

const AccountDeletion = () => {
        return (
            <main className="mt-8">
                <div className="max-w-3xl mx-auto p-6 mt-10">
                    <h1 className="text-2xl font-bold mb-4">
                        Account Deletion
                    </h1>

                    <p className="mb-4">
                        To delete your account and all associated data:
                    </p>

                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Open the Nerands app</li>
                        <li>Go to Settings</li>
                        <li>Tap Account</li>
                        <li>Select Delete Account</li>
                        <li>Confirm deletion</li>
                    </ol>

                    <p className="mt-6">
                        Or contact support: <b>support@nerands.com</b>
                    </p>
                    </div>
            </main>
        );
};

export default AccountDeletion;

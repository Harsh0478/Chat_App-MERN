import React from "react";

const SettingsPage = () => {
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
              <div className="max-w-md text-center space-y-6">
                
                {/* Icon Display */}
                <div className="flex justify-center gap-4 mb-4">
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce"
                    ></div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold">In Devlopment</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

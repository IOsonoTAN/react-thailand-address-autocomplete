import { useState } from "react";
import ThailandSearch, { ThailandData } from "./components/ThailandSearch";

function App() {
  const [language, setLanguage] = useState<"th" | "en">("th");
  const [selectedLocation, setSelectedLocation] = useState<
    ThailandData | undefined
  >();

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold text-center mb-8">
            Thailand Location Search
          </h1>
          <div className="flex justify-center mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setLanguage(language === "th" ? "en" : "th")}
            >
              {language === "th" ? "English" : "Thai"}
            </button>
          </div>
          <ThailandSearch
            language={language}
            highlightColor="bg-red-200"
            searchTermFormat=":districtName / :subdistrictName / :provinceName / :postalCode"
            onSelectLocation={setSelectedLocation}
          />
          <div className="mt-4">
            {selectedLocation ? (
              <pre>{JSON.stringify(selectedLocation, null, 2)}</pre>
            ) : (
              "No location selected"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

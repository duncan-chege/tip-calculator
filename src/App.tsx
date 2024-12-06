import { useState } from "react";
import FirstEntrySection from "./components/FirstEntrySection";
import SecondEntrySection from "./components/SecondEntrySection";

function App() {
  const [selectedVersion, setSelectedVersion] = useState<"first" | "second">(
    "first"
  );

  return (
    <main className="flex flex-col justify-center items-center gap-8 bg-light-grayish-cyan min-h-screen">
      <h1 className="text-2xl font-bold text-very-dark-cyan tracking-[.3em]">
        SPLI <br /> TTER
      </h1>

      <div className="flex max-w-3xl justify-evenly w-full">
        <button
          className={`${
            selectedVersion === "first"
              ? "bg-very-dark-cyan"
              : "bg-very-dark-cyan/40"
          } text-white p-2 px-4 rounded-md`}
          onClick={() => setSelectedVersion("first")}>
          Version 1
        </button>
        <button
          className={` ${
            selectedVersion === "second"
              ? "bg-very-dark-cyan"
              : "bg-very-dark-cyan/40"
          } text-white p-2 px-4 rounded-md`}
          onClick={() => setSelectedVersion("second")}>
          Version 2
        </button>
      </div>

      {selectedVersion === "first" && <FirstEntrySection />}
      {selectedVersion === "second" && <SecondEntrySection />}
    </main>
  );
}

export default App;

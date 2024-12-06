import { useState } from "react";
import FirstEntrySection from "./components/FirstEntrySection";
import SecondEntrySection from "./components/SecondEntrySection";

function App() {
  const [selectedVersion, setSelectedVersion] = useState(FirstEntrySection);

  return (
    <main className="flex flex-col justify-center items-center gap-8 bg-light-grayish-cyan min-h-screen">
      <h1 className="text-2xl font-bold text-very-dark-cyan tracking-[.3em]">
        SPLI <br /> TTER
      </h1>

      <div className="flex max-w-3xl justify-evenly w-full">
        <button className="bg-very-dark-cyan text-white p-2 px-4 rounded-md">
          Version 1
        </button>
        <button className="bg-very-dark-cyan/40 text-white p-2 px-4 rounded-md">
          Version 2
        </button>
      </div>

      <FirstEntrySection />
      <SecondEntrySection />
    </main>
  );
}

export default App;

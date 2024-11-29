import ResultsSection from "./ResultsSection";

const EntrySection = () => {
  return (
    <div className="bg-white w-1/2 py-10 px-8 rounded-xl text-sm flex flex-wrap">
        <div className="w-1/2">
            <div>
                <label htmlFor="bill" className="text-very-dark-cyan">Bill</label><br />
                <input type="number" className="bg-[url('./assets/icon-dollar.svg')] bg-no-repeat bg-left bg-auto w-full border-0 p-2 bg-very-light-grayish-cyan outline-0 mt-2"/>
            </div>
            <div className="mt-8">
                <label htmlFor="bill" className="text-very-dark-cyan">Select Tip %</label><br />
                <div className="mt-4 flex flex-wrap gap-4">
                    <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">5%</button>
                    <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">10%</button>
                    <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">15%</button>
                    <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">25%</button>
                    <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">50%</button>
                    <input className="p-2 w-min flex-shrink-1 bg-very-light-grayish-cyan outline-0" type="number" placeholder="Custom"/>
                </div>
            </div>
            <div className="mt-8">
                <label htmlFor="bill" className="text-very-dark-cyan">Number of People</label><br />
                <input type="number" className="bg-[url('./assets/icon-person.svg')] bg-no-repeat bg-left bg-auto w-full border-0 p-2 bg-very-light-grayish-cyan outline-0 mt-2"/>
            </div>
        </div>
        <div className="w-1/2">
            <ResultsSection />
        </div>
    </div>
  );
};

export default EntrySection;

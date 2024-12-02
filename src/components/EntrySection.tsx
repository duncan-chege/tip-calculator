import ResultsSection from "./ResultsSection";

const EntrySection = () => {
  return (
    <div className="bg-white xl:w-1/2 lg:w-2/3 md:w-4/5 w-full py-10 px-8 rounded-2xl text-sm flex md:flex-nowrap flex-wrap gap-8">
      <div className="md:w-1/2 w-full">
        <div>
          <label htmlFor="bill" className="text-very-dark-cyan">
            Bill
          </label>
          <br />
          <input
            type="number"
            className="bg-[url('./assets/icon-dollar.svg')] bg-no-repeat bg-[1rem_center] bg-auto w-full border-0 p-2 bg-very-light-grayish-cyan outline-0 mt-2 text-right"
            min="0"
          />
        </div>
        <div className="mt-8">
          <label htmlFor="bill" className="text-very-dark-cyan">
            Select Tip %
          </label>
          <br />
          <div className="mt-4 grid grid-cols-3 gap-3">
            <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              5%
            </button>
            <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              10%
            </button>
            <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              15%
            </button>
            <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              25%
            </button>
            <button className="bg-very-dark-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              50%
            </button>
            <input
              className="p-2 bg-very-light-grayish-cyan outline-0 text-right"
              type="number"
              placeholder="Custom %"
              min="0"
            />
          </div>
        </div>
        <div className="mt-8">
          <label htmlFor="bill" className="text-very-dark-cyan">
            Number of People
          </label>
          <br />
          <input
            type="number"
            className="bg-[url('./assets/icon-person.svg')] bg-no-repeat bg-[1rem_center] bg-auto w-full border-0 p-2 bg-very-light-grayish-cyan outline-0 mt-2 text-right"
            min="0"
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <ResultsSection />
      </div>
    </div>
  );
};

export default EntrySection;

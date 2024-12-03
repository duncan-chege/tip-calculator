import ResultsSection from "./ResultsSection";
import { useState } from "react";

const EntrySection = () => {
  const [values, setValues] = useState({
    people: "",
    bill: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted with values:", values);
    setSubmitted(true);
  };

  return (
    <div className="bg-white xl:w-1/2 lg:w-2/3 md:w-4/5 w-full py-10 px-8 rounded-2xl text-sm flex md:flex-nowrap flex-wrap gap-8">
      <div className="md:w-1/2 w-full">
        <div className="relative">
          <label htmlFor="bill" className="text-very-dark-cyan">
            Bill
          </label>
          {submitted && values.bill == "" && (
            <span className="absolute right-0 text-red-700 text-xs font-semibold">
              Enter your bill
            </span>
          )}
          <br />
          <input
            type="number"
            className={
              submitted && values.bill == ""
                ? "border-2 border-red-700 rounded bg-[url('./assets/icon-dollar.svg')] bg-no-repeat bg-[1rem_center] bg-auto w-full p-2 bg-very-light-grayish-cyan outline-0 mt-2 text-right"
                : "rounded bg-[url('./assets/icon-dollar.svg')] bg-no-repeat bg-[1rem_center] bg-auto w-full border-0 p-2 bg-very-light-grayish-cyan outline-0 mt-2 text-right"
            }
            min="0"
            name="bill"
            value={values.bill}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-8">
          <label htmlFor="bill" className="text-very-dark-cyan">
            Select Tip %
          </label>
          <br />
          <div className="mt-4 grid grid-cols-3 gap-3">
            <button className="bg-very-dark-cyan hover:bg-strong-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              5%
            </button>
            <button className="bg-very-dark-cyan hover:bg-strong-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              10%
            </button>
            <button className="bg-very-dark-cyan hover:bg-strong-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              15%
            </button>
            <button className="bg-very-dark-cyan hover:bg-strong-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              25%
            </button>
            <button className="bg-very-dark-cyan hover:bg-strong-cyan text-white py-1 px-6 rounded text-lg font-semibold">
              50%
            </button>
            <input
              className="rounded p-2 bg-very-light-grayish-cyan outline-0 text-right"
              type="number"
              placeholder="Custom %"
              min="0"
            />
          </div>
        </div>
        <div className="mt-8 relative">
          <label htmlFor="people" className="text-very-dark-cyan">
            Number of People
          </label>
          {(submitted && values.people == "" && (
            <span className="absolute right-0 text-red-700 text-xs font-semibold">
              Enter number of people
            </span>
          )) ||
            (submitted && values.people == "0" && (
              <span className="absolute right-0 text-red-700 text-xs font-semibold">
                Can't be zero
              </span>
            ))}
          <br />
          <input
            type="number"
            className="bg-[url('./assets/icon-person.svg')] bg-no-repeat bg-[1rem_center] bg-auto w-full border-0 p-2 bg-very-light-grayish-cyan outline-0 mt-2 text-right"
            name="people"
            min="0"
            value={values.people}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <ResultsSection onReset={handleSubmit} />
      </div>
    </div>
  );
};

export default EntrySection;

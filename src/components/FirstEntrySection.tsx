import FirstResultsSection from "./FirstResultsSection";
import { useState } from "react";

const FirstEntrySection = () => {
  const [values, setValues] = useState({
    bill: "",
    people: "",
    customPercent: "",
  });

  const [activeField, setActiveField] = useState<"button" | "input" | null>(
    null
  );

  const tipPercentageList = [5, 10, 15, 25, 50] as const;

  const [percentButtonValue, setpercentButtonValue] = useState<
    (typeof tipPercentageList)[number] | null
  >(null); // Track percentage value for both buttons and input

  const [tipPerPerson, setTipPerPerson] = useState<number | null>(null);

  const [totalPerson, setTotalPerson] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // The name attribute is used to dynamically determine which part of the values object to update.
    const { name, value } = e.target;

    if (/^\d*$/.test(value)) {  // Validate numeric output
      setValues({ ...values, [name]:value });

      if (name === "customPercent"){    // Dynamically update tips if customPercent changes
        const customPercent = parseFloat(value);
        handleCalculateTip(customPercent);  // Only pass the custom percent
      }
    }
  };

  const handleCalculateTip = (customPercent: number) => {
    const bill = parseFloat(values.bill);
    const people = parseInt(values.people, 10);

    const percentage = customPercent > 0 ? customPercent : percentButtonValue // Use custom percent if valid, otherwise button value

    if (percentage && !isNaN(bill) && !isNaN(people) && people > 0) {
      const totalTip = (bill * percentage) / 100;
      const tipPerPerson = totalTip / people;
      const totalPerson = totalTip + bill / people;

      setTipPerPerson(tipPerPerson);
      setTotalPerson(totalPerson);
    } else {
      setTipPerPerson(null);
      setTotalPerson(null);
    }
  };

  const handleReset = () => {
    setValues({
      people: "",
      bill: "",
      customPercent: "",
    });

    setTipPerPerson(null);
    setTotalPerson(null);
  };

  return (
    <div className="bg-white max-w-3xl py-10 px-8 md:mx-8 rounded-2xl text-sm flex md:flex-nowrap flex-wrap gap-8">
      <div className="md:w-1/2 w-full">
        <label htmlFor="bill" className="text-very-dark-cyan">
          Bill
        </label>
        <br />
        <input
          type="text"
          className="rounded bg-[url('../public/assets/icon-dollar.svg')] bg-no-repeat bg-[1rem_center] bg-auto w-full border-0 p-2 bg-very-light-grayish-cyan outline-0 mt-2 text-right"
          name="bill"
          id="bill"
          value={values.bill}
          onChange={(e) => handleInputChange(e)}
        />
        <div className="mt-8 relative">
          <label htmlFor="people" className="text-very-dark-cyan">
            Number of People
          </label>
          {values.people === "0" && (
            <span className="absolute right-0 text-red-700 text-xs font-semibold">
              Can't be zero
            </span>
          )}
          <br />
          <input
            type="text"
            className={
              values.people === "0"
                ? "border-2 border-red-700 rounded bg-[url('./assets/icon-person.svg')] bg-no-repeat bg-[1rem_center] bg-auto w-full p-2 bg-very-light-grayish-cyan outline-0 mt-2 text-right"
                : "rounded bg-[url('../public/assets/icon-person.svg')] bg-no-repeat bg-[1rem_center] bg-auto w-full border-0 p-2 bg-very-light-grayish-cyan outline-0 mt-2 text-right"
            }
            name="people"
            id="people"
            value={values.people}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="mt-8">
          <label htmlFor="bill" className="text-very-dark-cyan">
            Select Tip %
          </label>
          <br />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {tipPercentageList.map((item) => (
              <button
                key={item}
                className={`hover:bg-strong-cyan text-white py-1 px-6 rounded text-lg font-semibold ${
                  percentButtonValue === item && activeField === "button"
                    ? `bg-strong-cyan`
                    : `bg-very-dark-cyan`
                }`}
                onClick={() => {
                  setpercentButtonValue(item);
                  setActiveField("button"); // Mark button as active
                  setValues({ ...values, customPercent: ""}) // Clear custom input when button is clicked
                  handleCalculateTip(item)
                }}>
                {item}%
              </button>
            ))}
            <input
              className={`${
                activeField === "input"
                  ? `border-2 border-strong-cyan`
                  : `border-inherit`
              } rounded p-2 bg-very-light-grayish-cyan outline-0 text-right`}
              type="text"
              placeholder="Custom %"
              name="customPercent"
              value={values.customPercent}
              onChange={(e) => {
                handleInputChange(e);
                setActiveField("input");
              }}
              onFocus={()=> setActiveField("input")}
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <FirstResultsSection
          onReset={handleReset}
          tipPerPerson={tipPerPerson}
          totalPerson={totalPerson}
        />
      </div>
    </div>
  );
};

export default FirstEntrySection;

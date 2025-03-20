import React, { useState } from "react";

const unitConversions: Record<string, number> = {
  Meter: 1,
  Kilometer: 0.001,
  Centimeter: 100,
  Millimeter: 1000,
  Mile: 0.000621371,
};

const UnitConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>("Meter");
  const [toUnit, setToUnit] = useState<string>("Meter");
  const [result, setResult] = useState<number>(0);

  const convertUnits = () => {
    const fromUnitBase = unitConversions[fromUnit];
    const toUnitBase = unitConversions[toUnit];

    if (fromUnitBase && toUnitBase) {
      setResult((amount * toUnitBase) / fromUnitBase);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
      <h1 className="text-3xl font-bold mb-4">Unit Converter</h1>
      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        className="border rounded border-gray-300 p-2 mb-4 w-1/3"
      />
      <div className="mb-4 flex space-x-2">
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border border-gray-300 rounded p-1"
        >
          <option value="Meter">Meter</option>
          <option value="Kilometer">Kilometer</option>
          <option value="Centimeter">Centimeter</option>
          <option value="Millimeter">Millimeter</option>
          <option value="Mile">Mile</option>
        </select>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="border border-gray-300 rounded p-1"
        >
          <option value="Meter">Meter</option>
          <option value="Kilometer">Kilometer</option>
          <option value="Centimeter">Centimeter</option>
          <option value="Millimeter">Millimeter</option>
          <option value="Mile">Mile</option>
        </select>
      </div>
      <button
        onClick={convertUnits}
        className="bg-orange-400 rounded p-2 w-1/3"
      >
        Convert
      </button>
      <div className="mt-4 text-xl">Result is: {result}</div>
    </div>
  );
};

export default UnitConverter;

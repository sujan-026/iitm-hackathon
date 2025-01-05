"use client";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("calculator");
  const [scores, setScores] = useState({
    carbonEmission: "",
    energyEfficiency: "",
    waterWaste: "",
    diversity: "",
    labor: "",
    community: "",
    boardDiversity: "",
    transparency: "",
    antiCorruption: "",
  });
  const [esgScore, setEsgScore] = useState(null);

  const weights = { environmental: 0.4, social: 0.35, governance: 0.25 };

  const calculateESG = () => {
    const environmentalScore =
      (parseFloat(scores.carbonEmission || 0) +
        parseFloat(scores.energyEfficiency || 0) +
        parseFloat(scores.waterWaste || 0)) /
      3;

    const socialScore =
      (parseFloat(scores.diversity || 0) +
        parseFloat(scores.labor || 0) +
        parseFloat(scores.community || 0)) /
      3;

    const governanceScore =
      (parseFloat(scores.boardDiversity || 0) +
        parseFloat(scores.transparency || 0) +
        parseFloat(scores.antiCorruption || 0)) /
      3;

    const totalScore =
      weights.environmental * environmentalScore +
      weights.social * socialScore +
      weights.governance * governanceScore;

    setEsgScore(totalScore.toFixed(2));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScores({ ...scores, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          ESG Performance Tool
        </h1>

        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${
              view === "calculator"
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setView("calculator")}
          >
            ESG Calculator
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              view === "upload"
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setView("upload")}
          >
            Upload Document
          </button>
        </div>

        {view === "calculator" ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">ESG Performance</h2>

            {/* Environmental Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Environmental</h3>
              <InputField
                label="Carbon Emissions Reduction"
                name="carbonEmission"
                value={scores.carbonEmission}
                onChange={handleChange}
              />
              <InputField
                label="Energy Efficiency"
                name="energyEfficiency"
                value={scores.energyEfficiency}
                onChange={handleChange}
              />
              <InputField
                label="Water/Waste Management"
                name="waterWaste"
                value={scores.waterWaste}
                onChange={handleChange}
              />
            </div>

            {/* Social Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Social</h3>
              <InputField
                label="Diversity and Inclusion"
                name="diversity"
                value={scores.diversity}
                onChange={handleChange}
              />
              <InputField
                label="Labor and Employee Welfare"
                name="labor"
                value={scores.labor}
                onChange={handleChange}
              />
              <InputField
                label="Community Engagement"
                name="community"
                value={scores.community}
                onChange={handleChange}
              />
            </div>

            {/* Governance Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Governance</h3>
              <InputField
                label="Board Diversity"
                name="boardDiversity"
                value={scores.boardDiversity}
                onChange={handleChange}
              />
              <InputField
                label="Transparency"
                name="transparency"
                value={scores.transparency}
                onChange={handleChange}
              />
              <InputField
                label="Anti-Corruption Policies"
                name="antiCorruption"
                value={scores.antiCorruption}
                onChange={handleChange}
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateESG}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
              Calculate ESG Score
            </button>

            {esgScore && (
              <div className="mt-6 p-4 bg-green-100 rounded-md text-green-800">
                <h2 className="text-lg font-semibold">Your ESG Score:</h2>
                <p className="text-xl font-bold">{esgScore} / 100</p>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-gray-700 text-lg">
              Upload feature coming soon. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Reusable Input Field Component
const InputField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block font-medium text-gray-700">{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      placeholder="Enter value (out of 100)"
      className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);

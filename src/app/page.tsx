"use client";
import { useState } from "react";

export default function Home() {
  const [environmental, setEnvironmental] = useState(0);
  const [social, setSocial] = useState(0);
  const [governance, setGovernance] = useState(0);
  const [score, setScore] = useState(null);

  const calculateESG = () => {
    const weightedE = 0.4 * environmental;
    const weightedS = 0.35 * social;
    const weightedG = 0.25 * governance;
    const totalScore = weightedE + weightedS + weightedG;
    setScore(totalScore.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          ESG Score Calculator
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter the ESG performance scores (out of 100) for your company below
          to calculate the overall ESG score.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Environmental (40%)
            </label>
            <input
              type="number"
              value={environmental}
              onChange={(e) => setEnvironmental(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              min="0"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Social (35%)
            </label>
            <input
              type="number"
              value={social}
              onChange={(e) => setSocial(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              min="0"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Governance (25%)
            </label>
            <input
              type="number"
              value={governance}
              onChange={(e) => setGovernance(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={calculateESG}
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition"
          >
            Calculate ESG Score
          </button>
        </div>

        {score && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">Your ESG Score</h2>
            <p className="text-2xl text-indigo-600 font-bold">{score}</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { askAi } from "../actions/llm";
import { loadType } from "../interfaces/load";

export default function SolarLoadCalculator() {
  const [appliances, setAppliances] = useState<loadType[]>([
    { name: "", watts: "", hours: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>();

  const handleAdd = () => {
    setAppliances([...appliances, { name: "", watts: "", hours: "" }]);
  };

  const handleChange = (index: number, field: any, value: any) => {
    const updated = [...appliances];
    updated[index][field] = value;
    setAppliances(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-gray-800"
      >
        Solar Load Calculator
      </motion.h1>

      <Card className="w-full max-w-3xl shadow-xl p-6 rounded-2xl">
        <CardContent className="space-y-6">
          {appliances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <input
                type="text"
                placeholder="Appliance name"
                value={item.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                className="border p-3 rounded-xl shadow-sm"
              />
              <input
                type="number"
                placeholder="Watts"
                value={item.watts}
                onChange={(e) => handleChange(index, "watts", e.target.value)}
                className="border p-3 rounded-xl shadow-sm"
              />
              <input
                type="number"
                placeholder="Hours / day"
                value={item.hours}
                onChange={(e) => handleChange(index, "hours", e.target.value)}
                className="border p-3 rounded-xl shadow-sm"
              />
            </motion.div>
          ))}

          <div className="flex justify-between mt-4">
            <Button onClick={handleAdd} className="rounded-2xl px-6 py-3">
              + Add Appliance
            </Button>
            <Button
              onClick={async () => {
                setLoading(true);
                const response = await askAi(appliances);
                setLoading(false);
                setResult(response);
              }}
              disabled={loading}
              className="rounded-2xl px-6 py-3"
            >
              {loading ? "Calculating..." : "Ask AI For Best Solar System"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 w-full max-w-3xl p-6 bg-white shadow-xl rounded-2xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Recommended System</h2>
          <pre className="whitespace-pre-wrap text-gray-700">
            {JSON.stringify(result, null, 2)}
          </pre>
        </motion.div>
      )}
    </div>
  );
}

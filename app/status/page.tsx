"use client";
import { useEffect, useState } from "react";

export default function Status() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const getTemperature = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true`,
        );
        const data = await res.json();
        setTemperature(data);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };
    getTemperature();
  }, []);

  return (
    <div className="m-12 flex flex-col items-center">
      <div className="mx-128 flex max-w-lg flex-col gap-8 rounded-lg bg-red-700 p-8">
        <p>{new Date().toLocaleDateString("en-IN")}</p>
        {temperature ? (
          <div className="flex items-end">
            <h1 className="text-left text-8xl font-bold tracking-tight">
              {temperature.current_weather.temperature}
            </h1>
            <span className="font-semibold">°C</span>
          </div>
        ) : (
          <p>Loading temperature...</p>
        )}
        <div className="m-8 size-128 bg-pink-500 p-8"></div>
      </div>
    </div>
  );
}

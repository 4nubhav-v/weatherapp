import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: 26.7617,
  longitude: 89.0767,
  daily: ["uv_index_max"],
  hourly: "temperature_2m",
  current: [
    "is_day",
    "wind_speed_10m",
    "wind_direction_10m",
    "temperature_2m",
    "relative_humidity_2m",
  ],
  timezone: "Asia/Singapore",
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
  `\nCoordinates: ${latitude}°N ${longitude}°E`,
  `\nElevation: ${elevation}m asl`,
  `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
  `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const current = response.current()!;
const daily = response.daily()!;
const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
export const weatherData = {
  current: {
    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
    is_day: current.variables(0)!.value(),
    wind_speed_10m: current.variables(1)!.value(),
    wind_direction_10m: current.variables(2)!.value(),
    temperature_2m: current.variables(3)!.value(),
    relative_humidity_2m: current.variables(4)!.value(),
  },
  daily: {
    time: Array.from(
      {
        length:
          (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval(),
      },
      (_, i) =>
        new Date(
          (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
            1000,
        ),
    ),

    uv_index_max: daily.variables(0)!.valuesArray(),
  },
  hourly: {
    time: Array.from(
      {
        length:
          (Number(hourly.timeEnd()) - Number(hourly.time())) /
          hourly.interval(),
      },
      (_, i) =>
        new Date(
          (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
            1000,
        ),
    ),
    temperature_2m: hourly.variables(0)!.valuesArray(),
  },
};

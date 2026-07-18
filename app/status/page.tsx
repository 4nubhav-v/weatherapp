import { weatherData } from "./Weather";

function degToCompass(deg: number) {
  const dirs = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return dirs[Math.round(deg / 22.5) % 16];
}

function uvLabel(uv: number) {
  if (uv < 3) return "Low";
  if (uv < 6) return "Moderate";
  if (uv < 8) return "High";
  if (uv < 11) return "Very High";
  return "Extreme";
}

export default function Status() {
  const { current, daily, hourly } = weatherData;
  const weatherForcastTemp = hourly.temperature_2m;
  console.log(weatherForcastTemp);
  const isDay = current.is_day === 1;
  const temp = current.temperature_2m.toFixed(1);
  const uv = daily.uv_index_max[0];
  const windDeg = current.wind_direction_10m;
  const windSpeed = current.wind_speed_10m.toFixed(2);
  const humidity = Math.round(current.relative_humidity_2m);

  const dateLabel = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex items-center justify-center p-6">
      <div
        className={`relative w-full max-w-sm overflow-hidden rounded-xl p-8 shadow-2xl ${
          isDay
            ? "bg-linear-to-br from-[#7EC8E3] via-[#8FB8D6] to-[#F2994A] text-[#12202B]"
            : "bg-linear-to-br from-[#0B1120] via-[#1E2A4A] to-[#2B3A63] text-[#E7EEF6]"
        }`}
      >
        {/* ambient glow */}
        <div
          className={`pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl ${
            isDay ? "bg-white/40" : "bg-[#F2A65A]/20"
          }`}
        />

        <div className="relative flex items-center justify-between text-xs font-medium tracking-[0.2em] uppercase opacity-70">
          <span>{dateLabel}</span>
          <span className="flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${isDay ? "bg-[#F2994A]" : "bg-[#C9D6E3]"}`}
            />
            {isDay ? "Day" : "Night"}
          </span>
        </div>

        <div className="relative mt-6 flex items-end gap-2">
          <h1 className="text-8xl leading-none font-black tracking-tighter">
            {temp}
          </h1>
          <span className="mb-3 text-2xl font-semibold opacity-80">°C</span>
        </div>

        <div className="relative bg-red-600">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="relative mt-8 flex items-center justify-between border-t border-current/15 pt-6">
          {/* wind compass — signature element, driven by real wind_direction_10m */}
          <div className="flex items-center gap-3">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              className="shrink-0 opacity-90"
            >
              <circle
                cx="22"
                cy="22"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
              <g
                style={{
                  transform: `rotate(${windDeg}deg)`,
                  transformOrigin: "22px 22px",
                }}
              >
                <line
                  x1="22"
                  y1="22"
                  x2="22"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="22" cy="6" r="2.5" fill="currentColor" />
              </g>
              <circle
                cx="22"
                cy="22"
                r="2"
                fill="currentColor"
                fillOpacity="0.5"
              />
            </svg>
            <div className="font-mono text-sm leading-tight tabular-nums">
              <div className="font-semibold">{windSpeed} km/h</div>
              <div className="text-xs opacity-60">
                {degToCompass(windDeg)} · {Math.round(windDeg)}°
              </div>
            </div>
          </div>
          <div className="text-right font-mono text-sm tabular-nums">
            <div>
              <span className="opacity-60">Humidity </span>
              <span className="font-semibold">{humidity}%</span>
            </div>
            <div className="mt-1">
              <span className="opacity-60">UV </span>
              <span className="font-semibold">{uv.toFixed(1)}</span>
              <span className="ml-1 text-xs opacity-60">({uvLabel(uv)})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

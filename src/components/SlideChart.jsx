import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#2563eb", "#dc2626", "#16a34a", "#f59e0b", "#7c3aed"];

function SlideBarChart({ chart, large, tpl, accentColor }) {
  const sampleItem = chart.data[0];
  const keys = Object.keys(sampleItem).filter((k) => k !== "name" && k !== "fill");
  const isComparison = keys.length >= 2;
  const tooltipStyle = {
    backgroundColor: tpl.chartTooltipBg,
    border: tpl.chartTooltipBorder,
    borderRadius: "6px",
    color: tpl.chartTooltipColor,
    fontSize: "13px",
  };

  if (isComparison) {
    return (
      <ResponsiveContainer width="100%" height={large ? 320 : 220}>
        <BarChart data={chart.data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke={tpl.chartGridColor} />
          <XAxis dataKey="name" tick={{ fill: tpl.chartTextColor, fontSize: 12 }} />
          <YAxis tick={{ fill: tpl.chartTextColor, fontSize: 12 }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 12, color: tpl.chartTextColor }} />
          <Bar dataKey={keys[0]} fill={accentColor} radius={[4, 4, 0, 0]} />
          <Bar dataKey={keys[1]} fill="#94a3b8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={large ? 320 : 220}>
      <BarChart data={chart.data}>
        <CartesianGrid strokeDasharray="3 3" stroke={tpl.chartGridColor} />
        <XAxis dataKey="name" tick={{ fill: tpl.chartTextColor, fontSize: 12 }} />
        <YAxis tick={{ fill: tpl.chartTextColor, fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {chart.data.map((entry, i) => (
            <Cell key={i} fill={entry.fill || COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function SlidePieChart({ chart, large, tpl }) {
  const radius = large ? 120 : 90;
  const inner = large ? 55 : 40;
  const tooltipStyle = {
    backgroundColor: tpl.chartTooltipBg,
    border: tpl.chartTooltipBorder,
    borderRadius: "6px",
    color: tpl.chartTooltipColor,
    fontSize: "13px",
  };
  const isLight = tpl.chartGridColor === "#e5e7eb" || tpl.chartGridColor === "#d1d5db" || tpl.chartGridColor === "#f3f4f6";

  return (
    <ResponsiveContainer width="100%" height={large ? 340 : 240}>
      <PieChart>
        <Pie
          data={chart.data}
          cx="50%"
          cy="50%"
          outerRadius={radius}
          innerRadius={inner}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          labelLine={{ stroke: isLight ? "#9ca3af" : "rgba(255,255,255,0.3)" }}
          strokeWidth={2}
          stroke={isLight ? "#fff" : "rgba(15,12,41,0.8)"}
        >
          {chart.data.map((entry, i) => (
            <Cell key={i} fill={entry.fill || COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

function SlideLineChart({ chart, large, tpl, accentColor }) {
  const tooltipStyle = {
    backgroundColor: tpl.chartTooltipBg,
    border: tpl.chartTooltipBorder,
    borderRadius: "6px",
    color: tpl.chartTooltipColor,
    fontSize: "13px",
  };

  return (
    <ResponsiveContainer width="100%" height={large ? 320 : 220}>
      <LineChart data={chart.data}>
        <CartesianGrid strokeDasharray="3 3" stroke={tpl.chartGridColor} />
        <XAxis dataKey="name" tick={{ fill: tpl.chartTextColor, fontSize: 12 }} />
        <YAxis tick={{ fill: tpl.chartTextColor, fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line
          type="monotone"
          dataKey="value"
          stroke={accentColor}
          strokeWidth={3}
          dot={{ fill: accentColor, r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function SlideChart({ chart, large = false, tpl, accentColor }) {
  const chartTitleColor = tpl.chartTooltipColor === "#fff" ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`${large ? "mt-4" : "mt-6"} p-4 rounded-lg ${tpl.chartBg}`}>
      <p className={`${large ? "text-base" : "text-sm"} font-semibold ${chartTitleColor} mb-3 text-center`}>
        {chart.title}
      </p>
      {chart.type === "bar" && <SlideBarChart chart={chart} large={large} tpl={tpl} accentColor={accentColor} />}
      {chart.type === "pie" && <SlidePieChart chart={chart} large={large} tpl={tpl} />}
      {chart.type === "line" && <SlideLineChart chart={chart} large={large} tpl={tpl} accentColor={accentColor} />}
    </div>
  );
}

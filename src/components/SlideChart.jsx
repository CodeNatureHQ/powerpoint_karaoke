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

const COLORS = ["#a855f7", "#ec4899", "#f59e0b", "#10b981", "#6366f1"];

const tooltipStyle = {
  backgroundColor: "rgba(15, 12, 41, 0.95)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "12px",
  color: "#fff",
  fontSize: "13px",
};

function SlideBarChart({ chart }) {
  // Detect if chart has two data keys (comparison chart like ist/soll)
  const sampleItem = chart.data[0];
  const keys = Object.keys(sampleItem).filter((k) => k !== "name" && k !== "fill");
  const isComparison = keys.length >= 2;

  if (isComparison) {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chart.data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 12, color: "#d1d5db" }} />
          <Bar dataKey={keys[0]} fill="#a855f7" radius={[6, 6, 0, 0]} />
          <Bar dataKey={keys[1]} fill="#ec4899" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={chart.data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 12 }} />
        <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {chart.data.map((entry, i) => (
            <Cell key={i} fill={entry.fill || COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function SlidePieChart({ chart }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={chart.data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          innerRadius={40}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          labelLine={{ stroke: "rgba(255,255,255,0.3)" }}
          strokeWidth={2}
          stroke="rgba(15,12,41,0.8)"
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

function SlideLineChart({ chart }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={chart.data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 12 }} />
        <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#a855f7"
          strokeWidth={3}
          dot={{ fill: "#ec4899", r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function SlideChart({ chart }) {
  return (
    <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
      <p className="text-sm font-medium text-gray-300 mb-3 text-center">
        {chart.title}
      </p>
      {chart.type === "bar" && <SlideBarChart chart={chart} />}
      {chart.type === "pie" && <SlidePieChart chart={chart} />}
      {chart.type === "line" && <SlideLineChart chart={chart} />}
    </div>
  );
}

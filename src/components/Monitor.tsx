type MonitorProps = {
  expression: string;
  result: string;
};

export default function Monitor({ expression, result }: MonitorProps) {
  return (
    <div className="monitor">
      <div className="monitor-calc">{expression}</div>
      <div className="monitor-result">{result}</div>
    </div>
  );
}

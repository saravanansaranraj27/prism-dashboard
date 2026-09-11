export interface SciDataPoint {
  date: string;
  value: number;
  event: string | null;
}

export interface ScarfMetric {
  dimension: string;
  score: number | null;
  vixCorrelation: number | null;
  redemptionImpact: string;
}

export interface ComplianceMetric {
  label: string;
  value: number;
  unit: string;
  benchmark?: number;
  benchmarkLabel?: string;
  status: 'safe' | 'warning' | 'critical';
}

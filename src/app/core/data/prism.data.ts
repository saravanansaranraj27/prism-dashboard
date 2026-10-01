import {
  SciDataPoint,
  ScarfMetric,
  ComplianceMetric,
} from '../models/prism.model';

export const SCI_TREND_DATA: SciDataPoint[] = [
  { date: 'Jan 20', value: 0.52, event: 'COVID Crash' },
  { date: 'Jun 20', value: 0.58, event: null },
  { date: 'Jan 21', value: 0.72, event: 'Recovery' },
  { date: 'Jan 22', value: 0.68, event: 'Peak Valuation' },
  { date: 'Jan 23', value: 0.45, event: 'Rate Hike Cycle' },
  { date: 'Jun 23', value: 0.55, event: null },
  { date: 'Jan 24', value: 0.48, event: 'Liquidity Crisis' },
  { date: 'Jun 24', value: 0.62, event: 'PRISM Intervention' },
  { date: 'Mar 25', value: 0.81, event: 'Stabilized' },
];

export const SCARF_METRICS: ScarfMetric[] = [
  {
    dimension: 'Status',
    score: 42,
    vixCorrelation: null,
    redemptionImpact:
      'Status threat drives 42% of redemption clustering during drawdowns; mitigated via communication amplification',
  },
  {
    dimension: 'Certainty',
    score: 28,
    vixCorrelation: null,
    redemptionImpact:
      '72% misinterpreted SEBI stress tests; mitigated by T+1 settlement guarantees',
  },
  {
    dimension: 'Autonomy',
    score: null,
    vixCorrelation: null,
    redemptionImpact:
      'Algorithmic liquidity deployment prevents fire sales during control-loss panics',
  },
  {
    dimension: 'Relatedness',
    score: null,
    vixCorrelation: 0.67,
    redemptionImpact:
      'Trust deficit amplifies contagion (network ρ=0.67); resolved via AMC transparency',
  },
  {
    dimension: 'Fairness',
    score: 30,
    vixCorrelation: 0.79,
    redemptionImpact:
      'Primary variance driver (ρ=0.79 with VIX); explains >50% redemption variance (H1)',
  },
];

export const COMPLIANCE_DATA: ComplianceMetric[] = [
  {
    label: 'Liquidity Coverage',
    value: 127,
    unit: '%',
    benchmark: 110,
    benchmarkLabel: 'SEBI Minimum',
    status: 'safe',
  },
  {
    label: 'T+1 Success Rate',
    value: 94.7,
    unit: '%',
    benchmark: 72.4,
    benchmarkLabel: 'Industry Average',
    status: 'safe',
  },
  {
    label: '50% Liquidation Variance',
    value: 7.4,
    unit: '%',
    status: 'warning',
  },
  {
    label: 'Liquidation Time',
    value: 18,
    unit: 'days',
    benchmark: 30,
    benchmarkLabel: 'Maximum Allowed',
    status: 'safe',
  },
];

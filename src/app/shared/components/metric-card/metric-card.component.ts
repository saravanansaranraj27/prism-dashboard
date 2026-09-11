import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss'],
})
export class MetricCardComponent {
  label = input.required<string>();
  value = input.required<number>();
  unit = input.required<string>();
  benchmark = input<number | undefined>(undefined);
  benchmarkLabel = input<string>('Benchmark');
  status = input<'safe' | 'warning' | 'critical'>('safe');
  icon = input<string>('analytics');

  statusClass = computed(() => {
    const s = this.status();
    return `badge-${s}`;
  });

  hasBenchmark = computed(
    () => this.benchmark() !== undefined && this.benchmark() !== null,
  );
}

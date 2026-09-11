import { Component, input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ScarfMetric } from '../../core/models/prism.model';
import { curveCardinalClosed } from 'd3-shape';

@Component({
  selector: 'app-scarf-radar',
  standalone: true,
  imports: [CommonModule, NgxChartsModule, MatCardModule, MatIconModule],
  templateUrl: './scarf-radar.component.html',
  styleUrls: ['./scarf-radar.component.scss'],
})
export class ScarfRadarComponent {
  metrics = input.required<ScarfMetric[]>();

  activeImpact = signal<string | null>(null);

  colorScheme: any = {
    domain: ['#6c8aff'],
  };

  curve = curveCardinalClosed;

  chartData = computed(() => [
    {
      name: 'SCARF Bias',
      series: this.metrics()
        .filter((m) => m.score !== null)
        .map((m) => ({
          name: m.dimension,
          value: m.score as number,
        })),
    },
  ]);

  onSelect(event: any): void {
    if (event && event.name) {
      const metric = this.metrics().find((m) => m.dimension === event.name);
      if (metric) {
        let corrText = '';
        if (metric.vixCorrelation !== null) {
          if (metric.dimension === 'Relatedness') {
            corrText = ` (Network ρ=${metric.vixCorrelation})`;
          } else {
            corrText = ` (VIX ρ=${metric.vixCorrelation})`;
          }
        }
        this.activeImpact.set(`${metric.redemptionImpact}${corrText}`);
      }
    } else {
      this.activeImpact.set(null);
    }
  }

  onDeselect(): void {
    this.activeImpact.set(null);
  }
}

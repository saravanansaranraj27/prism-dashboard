import { Component, input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SciDataPoint } from '../../core/models/prism.model';
import { curveMonotoneX } from 'd3-shape';

@Component({
  selector: 'app-sci-monitor',
  standalone: true,
  imports: [CommonModule, NgxChartsModule, MatCardModule, MatIconModule],
  templateUrl: './sci-monitor.component.html',
  styleUrls: ['./sci-monitor.component.scss'],
})
export class SciMonitorComponent {
  data = input.required<SciDataPoint[]>();

  referenceLines = [{ name: 'Alert Threshold (0.6)', value: 0.6 }];

  colorScheme: any = {
    domain: ['#6c8aff'],
  };

  curve = curveMonotoneX;

  hoveredEvent = signal<string | null>(null);
  hoveredDate = signal<string | null>(null);

  currentValueNum = computed(() => {
    const d = this.data();
    return d.length ? d[d.length - 1].value : 0;
  });

  currentValueDisplay = computed(() => {
    return this.currentValueNum().toFixed(2);
  });

  chartData = computed(() => [
    {
      name: 'SCI Trend',
      series: this.data().map((p) => ({
        name: p.date,
        value: p.value,
      })),
    },
  ]);

  onSelect(event: any): void {
    if (event && event.name) {
      const cleanName = event.name.trim();
      const point = this.data().find((p) => p.date.trim() === cleanName);

      if (point && point.event) {
        this.hoveredDate.set(point.date);
        this.hoveredEvent.set(point.event);
      } else {
        this.hoveredEvent.set(null);
        this.hoveredDate.set(null);
      }
    } else {
      this.hoveredEvent.set(null);
      this.hoveredDate.set(null);
    }
  }

  onDeselect(): void {
    this.hoveredEvent.set(null);
    this.hoveredDate.set(null);
  }

  onChartLeave(): void {
    this.hoveredEvent.set(null);
    this.hoveredDate.set(null);
  }
}

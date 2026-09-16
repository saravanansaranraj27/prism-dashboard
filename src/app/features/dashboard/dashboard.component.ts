import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { SciMonitorComponent } from '../sci-monitor/sci-monitor.component';
import { ScarfRadarComponent } from '../scarf-radar/scarf-radar.component';
import { ComplianceCardsComponent } from '../compliance-cards/compliance-cards.component';

import { ExportService } from '../../core/services/export.service';
import { ThemeService } from '../../core/services/theme.service';

import {
  SCI_TREND_DATA,
  SCARF_METRICS,
  COMPLIANCE_DATA,
} from '../../core/data/prism.data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    SciMonitorComponent,
    ScarfRadarComponent,
    ComplianceCardsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  theme: ThemeService = inject(ThemeService);

  sciData = signal(SCI_TREND_DATA);

  scarfMetrics = signal(SCARF_METRICS);

  complianceData = signal(COMPLIANCE_DATA);

  isAlertActive = computed(() => {
    const latest = this.sciData()[this.sciData().length - 1];

    return latest ? latest.value < 0.6 : false;
  });

  constructor(private exportService: ExportService) {}

  exportData(): void {
    this.exportService.exportToCsv('prism-dashboard-export', {
      sci: this.sciData(),
      scarf: this.scarfMetrics(),
      compliance: this.complianceData(),
    });
  }
}

import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SciMonitorComponent } from '../sci-monitor/sci-monitor.component';
import { ScarfRadarComponent } from '../scarf-radar/scarf-radar.component';
import { ComplianceCardsComponent } from '../compliance-cards/compliance-cards.component';
import { ExportService } from '../../core/services/export.service';
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
    MatButtonModule,
    MatIconModule,
    SciMonitorComponent,
    ScarfRadarComponent,
    ComplianceCardsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sciData = signal(SCI_TREND_DATA);
  scarfMetrics = signal(SCARF_METRICS);
  complianceData = signal(COMPLIANCE_DATA);

  isDarkMode = signal(true);

  isAlertActive = computed(() => {
    const latest = this.sciData()[this.sciData().length - 1];
    return latest ? latest.value < 0.6 : false;
  });

  constructor(private exportService: ExportService) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('prism-theme');
    if (savedTheme === 'light') {
      this.isDarkMode.set(false);
    } else {
      this.isDarkMode.set(true);
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode.update((prev) => !prev);
    localStorage.setItem('prism-theme', this.isDarkMode() ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.isDarkMode() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }

  exportData(): void {
    this.exportService.exportToCsv('prism-dashboard-export', {
      sci: this.sciData(),
      scarf: this.scarfMetrics(),
      compliance: this.complianceData(),
    });
  }
}

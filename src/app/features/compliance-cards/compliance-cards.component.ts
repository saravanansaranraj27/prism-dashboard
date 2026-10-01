import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricCardComponent } from '../../shared/components/metric-card/metric-card.component';
import { ComplianceMetric } from '../../core/models/prism.model';

@Component({
  selector: 'app-compliance-cards',
  standalone: true,
  imports: [CommonModule, MetricCardComponent],
  templateUrl: './compliance-cards.component.html',
  styleUrls: ['./compliance-cards.component.scss'],
})
export class ComplianceCardsComponent {
  metrics = input.required<ComplianceMetric[]>();

  getIcon(label: string): string {
    switch (label) {
      case 'Liquidity Coverage':
        return 'water_drop';
      case 'T+1 Success Rate':
        return 'speed';
      case '50% Liquidation Variance':
        return 'warning_amber';
      case 'Liquidation Time':
        return 'timer';
      default:
        return 'analytics';
    }
  }
}

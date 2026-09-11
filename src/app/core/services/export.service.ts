import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';

@Injectable({ providedIn: 'root' })
export class ExportService {
  exportToCsv(filename: string, data: Record<string, unknown[]>): void {
    const rows: Record<string, unknown>[] = [];
    Object.entries(data).forEach(([key, items]) => {
      (items as Record<string, unknown>[]).forEach((item) => {
        rows.push({ _dataset: key, ...item });
      });
    });
    const csv = Papa.unparse(rows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  }
}

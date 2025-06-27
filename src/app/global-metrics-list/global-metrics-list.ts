import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { GlobalMetrics, GlobalMetricsService } from '../services/global-metrics';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-global-metrics-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './global-metrics-list.html',
  styleUrls: ['./global-metrics-list.scss'] 
})
export class GlobalMetricsList implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['round', 'testLoss', 'testAccuracy', 'sensitivity', 'specificity', 'dateTime'];
  dataSource = new MatTableDataSource<GlobalMetrics>([]);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private globalMetricsService: GlobalMetricsService) {}

  ngOnInit(): void {
    this.globalMetricsService.getAllMetrics().subscribe((d: GlobalMetrics[]) => {
      this.dataSource.data = d; 
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/Brand';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(data => {
      this.brands = data;
    });
  }
}

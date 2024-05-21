import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { Owner } from '../../models/Owner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OwnerComponent implements OnInit {
  owners: Owner[] = [];

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    });
  }
}

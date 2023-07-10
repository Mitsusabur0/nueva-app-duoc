import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties!: Property[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.databaseService.getAllProperties().then(properties => {
      this.properties = properties;
    });
  }
}

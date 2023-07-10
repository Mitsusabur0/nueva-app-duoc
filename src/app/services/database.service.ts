import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private storage: Storage) { 
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this.init();
  }

  async init() {
    // If not yet done, create the storage
    if (!this.storage.get('_storage')) {
      await this.storage.create();
    }
  }
  
  // Implement your methods to interact with Storage here
}

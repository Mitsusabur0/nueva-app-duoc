import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../models/user.model';
import { Client } from '../models/client.model';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.storage = storage;
  }
    
  
  async createUser(user: User) {
    const id = Date.now();
    user.id = id;
    await this.storage.set(`user${id}`, user);
  }

  async getUser(id: number): Promise<User> {
    return await this.storage.get(`user${id}`);
  }

  async updateUser(user: User) {
    await this.storage.set(`user${user.id}`, user);
  }

  async deleteUser(id: number) {
    await this.storage.remove(`user${id}`);
  }

  
  async createClient(client: Client) {
    const id = Date.now();
    client.id = id;
    await this.storage.set(`client${id}`, client);
  }

  async getClient(id: number): Promise<Client> {
    return await this.storage.get(`client${id}`);
  }

  async updateClient(client: Client) {
    await this.storage.set(`client${client.id}`, client);
  }

  async deleteClient(id: number) {
    await this.storage.remove(`client${id}`);
  }

  
  async createProperty(property: Property) {
    const id = Date.now();
    property.id = id;
    await this.storage.set(`property${id}`, property);
  }

  async getProperty(id: number): Promise<Property> {
    return await this.storage.get(`property${id}`);
  }

  async updateProperty(property: Property) {
    await this.storage.set(`property${property.id}`, property);
  }

  async deleteProperty(id: number) {
    await this.storage.remove(`property${id}`);
  }

  async getAllProperties(): Promise<Property[]> {
    const keys = await this.storage.keys();
    const propertyKeys = keys.filter(key => key.startsWith('property'));
    const properties = await Promise.all(propertyKeys.map(key => this.storage.get(key)));
    return properties;
  }
  



}

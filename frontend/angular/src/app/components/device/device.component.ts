import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/model.service';
import  Device  from '../../models/device';
import  Category  from '../../models/Category';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.sass']
})
export class DeviceComponent implements OnInit {
  deviceName: string = '';

  deviceColor: string = '';
  devicePartnumber: number;
  deviceCategory:number;


  devices: Device[] = [];

  categories: Category[] = [];


  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.listDevices()
    this.listCategories()
  }

  onCreateDevice(): void {
    const device: Device = new Device()


    device.color = this.deviceColor
    device.partnumber = this.devicePartnumber
    device.categoryId = this.deviceCategory

    this.modelService.create(device,'device').subscribe(response => {

      if (response.errors != null) {
        console.error('Erro ao criar device')
      } else {
        this.listDevices()
      }
    })
  }

  onDeleteDevice(deviceId: number): void {
    this.modelService.delete(deviceId,'device').subscribe(response => {
      this.listDevices()
      if (response.errors != null) {
        console.error('Erro ao deletar device')
      } else {
        this.listDevices()
      }
    })
  }


  listDevices(): void {
    this.modelService.read('device').subscribe(response => {
      this.devices = response.content
    })
  }

  listCategories(): void {
    this.modelService.read('category').subscribe(response => {
      this.categories = response.content
    })
  }

}

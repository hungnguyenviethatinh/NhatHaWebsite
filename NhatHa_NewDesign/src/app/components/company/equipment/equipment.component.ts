import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'nh-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.less']
})
export class EquipmentComponent implements OnInit {
  banners = [
    '../../../../assets/images/company/equipment/Megger Testing Equipment.JPG',
  ];
  equipments:any;
  

  constructor() {
      this.equipments = [
        {
          name: 'Siemens - MV Switchgear Station',
          img: '../../../../assets/images/company/equipment/Siemens - MV Switchgear Station.JPG',
          contents: [
            {
              key: 'Thiết bị thí nghiệm: ',
              value: 'Manta MTS 1710, Programma Sverker 780, Megger MPRT 8415, Vanguard EZCT-2000, '
              + 'HV Hipot CT/PT Tester, Chauvin 8510, Vanguard ATRT-03B, Megger MOM200, HV Hipot GDH-100, '
              + 'Megger BM5200, Fluke 1550B, Kyoritsu 3124, EuroSMC PME-500-TR, Sonel MRU-200, KEP HVTS-70/50, '
              + 'HV Hipot VLF Tester, Hioki 3555, Goldsol C & DF Tester.',
            },
            {
              key: 'Thiết bị bảo trì: ',
              value: 'DILO Compact Series SF6 Gas Recovery, DILO Gas Leak Detector.',
            },
            {
              key: 'Thiết bị kiểm tra tình trạng: ',
              value: 'UE System Ultraprobe 10000, EA Technology UltraTEV+, HVPD PDS Insight, '
              + 'PMDT PDetector, Flir E40, Cordex TC7150, Fluke 435 series II, Fluke 805',
            },
          ],
        },
        {
          name: 'ABB Transformer Substation',
          img: '../../../../assets/images/company/equipment/ABB Transformer Substation.JPG',
          contents: [
            {
              key: 'Thiết bị thí nghiệm: ',
              value: 'Vanguard WRM-10, Vanguard ATRT-03B, Megger BM5200, Fluke 1550B, '
              + 'Kyoritsu 3124, KEP UIM-90, Goldsol C & DF Tester.',
            },
            {
              key: 'Thiết bị bảo trì: ',
              value: 'Arras-Maxei THV-4000 Transformer Oil Treatment.',
            },
            {
              key: 'Thiết bị kiểm tra tình trạng: ',
              value: 'UE System Ultraprobe 10000, EA Technology UltraTEV+, HVPD PDS Insight, '
              + 'PMDT PDetector, Flir E40, Cordex TC7150, Fluke 435 series II, Fluke 805.'
            },
          ],
        },
        {
          name: 'Schneider LV Switchboard',
          img: '../../../../assets/images/company/equipment/Schneider LV Switchboard.JPG',
          contents: [
            {
              key: 'Thiết bị thí nghiệm: ',
              value: 'Manta MTS 1710, Programma Sverker 780, Megger MPRT 8415, Vanguard EZCT-2000, '
              + 'HV Hipot CT/PT Tester, Chauvin 8510, Vanguard ATRT-03B, Megger MOM200, HV Hipot GDH-100, '
              + 'Megger BM5200, Fluke 1550B, Kyoritsu 3124, EuroSMC Raptor, Sonel MRU-200, Chauvin 6250, '
              + 'Kyoritsu 6050, Fluke 1630, Fluke 6500, Schneider FFTK, ABB Ekip T&P, GE GTUTK20, Siemens WLTS, All-Test III BJM, Hioki 3555.',
            },
            {
              key: 'Thiết bị bảo trì: ',
              value: 'Wiha 1000V Insulated Tool Set.',
            },
            {
              key: 'Thiết bị kiểm tra tình trạng: ',
              value: 'Flir E40, Cordex TC7150, Fluke 435 series II, Fluke 805',
            },
          ],
        },
      ];
    
   }

  ngOnInit() {
  }

}

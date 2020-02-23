export const vmList = {
  "schema": {
    "inventories[2]": "org.zstack.header.vm.VmInstanceInventory",
    "inventories[0]": "org.zstack.header.vm.VmInstanceInventory",
    "inventories[6].allVolumes[1]": "org.zstack.header.volume.VolumeInventory",
    "inventories[3].vmNics[0]": "org.zstack.header.vm.VmNicInventory",
    "inventories[6]": "org.zstack.header.vm.VmInstanceInventory",
    "inventories[3].vmNics[0].usedIps[0]": "org.zstack.header.network.l3.UsedIpInventory",
    "inventories[4]": "org.zstack.header.vm.VmInstanceInventory",
    "inventories[4].allVolumes[0]": "org.zstack.header.volume.VolumeInventory",
    "inventories[2].vmNics[0].usedIps[0]": "org.zstack.header.network.l3.UsedIpInventory",
    "inventories[0].vmNics[0]": "org.zstack.header.vm.VmNicInventory",
    "inventories[4].vmNics[0]": "org.zstack.header.vm.VmNicInventory",
    "inventories[6].vmNics[0].usedIps[0]": "org.zstack.header.network.l3.UsedIpInventory",
    "inventories[5].vmCdRoms[0]": "org.zstack.header.vm.cdrom.VmCdRomInventory",
    "inventories[4].vmCdRoms[0]": "org.zstack.header.vm.cdrom.VmCdRomInventory",
    "inventories[3].vmCdRoms[0]": "org.zstack.header.vm.cdrom.VmCdRomInventory",
    "inventories[1].vmNics[0]": "org.zstack.header.vm.VmNicInventory",
    "inventories[3].allVolumes[0]": "org.zstack.header.volume.VolumeInventory",
    "inventories[6].vmCdRoms[0]": "org.zstack.header.vm.cdrom.VmCdRomInventory",
    "inventories[1].vmNics[0].usedIps[0]": "org.zstack.header.network.l3.UsedIpInventory",
    "inventories[6].allVolumes[0]": "org.zstack.header.volume.VolumeInventory",
    "inventories[1]": "org.zstack.header.vm.VmInstanceInventory",
    "inventories[5].vmNics[0]": "org.zstack.header.vm.VmNicInventory",
    "inventories[5]": "org.zstack.header.vm.VmInstanceInventory",
    "inventories[5].vmNics[0].usedIps[0]": "org.zstack.header.network.l3.UsedIpInventory",
    "inventories[3]": "org.zstack.header.vm.VmInstanceInventory",
    "inventories[0].vmCdRoms[0]": "org.zstack.header.vm.cdrom.VmCdRomInventory",
    "inventories[2].vmCdRoms[0]": "org.zstack.header.vm.cdrom.VmCdRomInventory",
    "inventories[2].vmNics[0]": "org.zstack.header.vm.VmNicInventory",
    "inventories[0].vmNics[0].usedIps[0]": "org.zstack.header.network.l3.UsedIpInventory",
    "inventories[0].vmNics[1].usedIps[0]": "org.zstack.header.network.l3.UsedIpInventory",
    "inventories[2].allVolumes[0]": "org.zstack.header.volume.VolumeInventory",
    "inventories[0].vmNics[1]": "org.zstack.header.vm.VmNicInventory",
    "inventories[1].vmCdRoms[0]": "org.zstack.header.vm.cdrom.VmCdRomInventory",
    "inventories[0].allVolumes[0]": "org.zstack.header.volume.VolumeInventory",
    "inventories[5].allVolumes[0]": "org.zstack.header.volume.VolumeInventory",
    "inventories[6].vmNics[0]": "org.zstack.header.vm.VmNicInventory",
    "inventories[4].vmNics[0].usedIps[0]": "org.zstack.header.network.l3.UsedIpInventory",
    "inventories[1].allVolumes[0]": "org.zstack.header.volume.VolumeInventory"
  },
  "total": 7,
  "inventories": [
    {
      "vmNics": [
        {
          "usedIpUuid": "7e0580268cbb3264927d7dc4d4ff4d8a",
          "ip": "192.168.3.204",
          "l3NetworkUuid": "4a75d8ad26384c229f455aa176131257",
          "hypervisorType": "KVM",
          "uuid": "c9d9890091cc4ce49a8f8a1cce2970d2",
          "deviceId": 0,
          "mac": "fa:b0:90:af:ba:00",
          "internalName": "vnic1807.0",
          "ipVersion": 4,
          "netmask": "255.255.255.0",
          "lastOpDate": "Jan 6, 2020 8:40:11 PM",
          "usedIps": [
            {
              "ipInLong": 3232236492,
              "ipVersion": 4,
              "ipRangeUuid": "68a323f075d54568ad369c132459ea67",
              "netmask": "255.255.255.0",
              "vmNicUuid": "c9d9890091cc4ce49a8f8a1cce2970d2",
              "ip": "192.168.3.204",
              "lastOpDate": "Jan 6, 2020 8:40:11 PM",
              "l3NetworkUuid": "4a75d8ad26384c229f455aa176131257",
              "uuid": "7e0580268cbb3264927d7dc4d4ff4d8a",
              "gateway": "192.168.3.1",
              "createDate": "Jan 6, 2020 8:40:11 PM"
            }
          ],
          "gateway": "192.168.3.1",
          "vmInstanceUuid": "46ddd00c42434ffcb40936456678c21f",
          "createDate": "Jan 6, 2020 8:40:11 PM"
        },
        {
          "usedIpUuid": "f27be76aebe53cd09ec8e9584f8acd70",
          "ip": "192.168.2.209",
          "l3NetworkUuid": "162415ef6b2d4c6e95a11c4444b479d7",
          "hypervisorType": "KVM",
          "uuid": "f36b0ab6b0554cd48470b569f42746ff",
          "deviceId": 1,
          "mac": "fa:d4:cc:8b:ef:01",
          "internalName": "vnic1807.1",
          "ipVersion": 4,
          "netmask": "255.255.255.0",
          "lastOpDate": "Feb 19, 2020 9:16:39 PM",
          "usedIps": [
            {
              "ipInLong": 3232236241,
              "ipVersion": 4,
              "ipRangeUuid": "bcda9aaf151445bfa844cb7af3f189f6",
              "netmask": "255.255.255.0",
              "vmNicUuid": "f36b0ab6b0554cd48470b569f42746ff",
              "ip": "192.168.2.209",
              "lastOpDate": "Feb 19, 2020 9:16:39 PM",
              "l3NetworkUuid": "162415ef6b2d4c6e95a11c4444b479d7",
              "uuid": "f27be76aebe53cd09ec8e9584f8acd70",
              "gateway": "192.168.2.1",
              "createDate": "Feb 19, 2020 9:16:39 PM"
            }
          ],
          "gateway": "192.168.2.1",
          "vmInstanceUuid": "46ddd00c42434ffcb40936456678c21f",
          "createDate": "Feb 19, 2020 9:16:39 PM"
        }
      ],
      "cpuSpeed": 0,
      "zoneUuid": "c782f9e5bda544c4ac59dadfc8cf64a2",
      "description": "",
      "type": "UserVm",
      "uuid": "46ddd00c42434ffcb40936456678c21f",
      "platform": "Linux",
      "internalId": 1807,
      "hostUuid": "d8cdd8171841467a810339996b6de469",
      "lastOpDate": "Feb 19, 2020 11:18:30 PM",
      "instanceOfferingUuid": "212a84a3c5324d8b880def26bbbcf31f",
      "state": "Running",
      "imageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
      "createDate": "Jan 6, 2020 8:40:11 PM",
      "clusterUuid": "0f86d8671dff49aaa5955254bb67dc9e",
      "allVolumes": [
        {
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-ac2701b6d1f04602a9946d9b8adc050f/ac2701b6d1f04602a9946d9b8adc050f.qcow2",
          "actualSize": 7995392,
          "format": "qcow2",
          "description": "Root volume for VM[uuid:46ddd00c42434ffcb40936456678c21f]",
          "type": "Root",
          "uuid": "ac2701b6d1f04602a9946d9b8adc050f",
          "deviceId": 0,
          "size": 12682240,
          "name": "ROOT-for-VPC-11",
          "lastOpDate": "Jan 6, 2020 8:40:11 PM",
          "isShareable": false,
          "state": "Enabled",
          "primaryStorageUuid": "b1296dc880984edeb6ec05d2c9d7e243",
          "vmInstanceUuid": "46ddd00c42434ffcb40936456678c21f",
          "rootImageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
          "status": "Ready",
          "createDate": "Jan 6, 2020 8:40:11 PM"
        }
      ],
      "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
      "hypervisorType": "KVM",
      "cpuNum": 1,
      "defaultL3NetworkUuid": "4a75d8ad26384c229f455aa176131257",
      "lastHostUuid": "d8cdd8171841467a810339996b6de469",
      "memorySize": 1073741824,
      "rootVolumeUuid": "ac2701b6d1f04602a9946d9b8adc050f",
      "vmCdRoms": [
        {
          "name": "vm-46ddd00c42434ffcb40936456678c21f-cdRom",
          "lastOpDate": "Jan 6, 2020 8:40:11 PM",
          "uuid": "dfb9ea6c327341ce8bbac3d25d95fb5e",
          "deviceId": 0,
          "vmInstanceUuid": "46ddd00c42434ffcb40936456678c21f",
          "createDate": "Jan 6, 2020 8:40:11 PM"
        }
      ],
      "name": "VM-VPC-3"
    },
    {
      "clusterUuid": "0f86d8671dff49aaa5955254bb67dc9e",
      "vmNics": [
        {
          "usedIpUuid": "92d573bc57cf39f59237c8cf320fa976",
          "ip": "192.168.4.145",
          "l3NetworkUuid": "35962e1e4bac455ca88ecf665f85a04f",
          "hypervisorType": "KVM",
          "uuid": "dea4038472f341db8aec4a80e055e00b",
          "deviceId": 0,
          "mac": "fa:99:d5:16:31:00",
          "internalName": "vnic1806.0",
          "ipVersion": 4,
          "netmask": "255.255.255.0",
          "lastOpDate": "Jan 6, 2020 8:15:56 PM",
          "usedIps": [
            {
              "ipInLong": 3232236689,
              "ipVersion": 4,
              "ipRangeUuid": "537b29b61bb1448ba2b0b33c8fdd38a3",
              "netmask": "255.255.255.0",
              "vmNicUuid": "dea4038472f341db8aec4a80e055e00b",
              "ip": "192.168.4.145",
              "lastOpDate": "Jan 6, 2020 8:15:56 PM",
              "l3NetworkUuid": "35962e1e4bac455ca88ecf665f85a04f",
              "uuid": "92d573bc57cf39f59237c8cf320fa976",
              "gateway": "192.168.4.1",
              "createDate": "Jan 6, 2020 8:15:56 PM"
            }
          ],
          "gateway": "192.168.4.1",
          "vmInstanceUuid": "65b648cf057241e89d587249f483e42a",
          "createDate": "Jan 6, 2020 8:15:56 PM"
        }
      ],
      "cpuSpeed": 0,
      "allVolumes": [
        {
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-5d450ebfca9544b684f7e8fc30b4ced5/5d450ebfca9544b684f7e8fc30b4ced5.qcow2",
          "actualSize": 7995392,
          "format": "qcow2",
          "description": "Root volume for VM[uuid:65b648cf057241e89d587249f483e42a]",
          "type": "Root",
          "uuid": "5d450ebfca9544b684f7e8fc30b4ced5",
          "deviceId": 0,
          "size": 12682240,
          "name": "ROOT-for-VM-3",
          "lastOpDate": "Jan 6, 2020 8:15:57 PM",
          "isShareable": false,
          "state": "Enabled",
          "primaryStorageUuid": "b1296dc880984edeb6ec05d2c9d7e243",
          "vmInstanceUuid": "65b648cf057241e89d587249f483e42a",
          "rootImageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
          "status": "Ready",
          "createDate": "Jan 6, 2020 8:15:56 PM"
        }
      ],
      "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
      "zoneUuid": "c782f9e5bda544c4ac59dadfc8cf64a2",
      "description": "",
      "hypervisorType": "KVM",
      "type": "UserVm",
      "uuid": "65b648cf057241e89d587249f483e42a",
      "platform": "Linux",
      "cpuNum": 1,
      "defaultL3NetworkUuid": "35962e1e4bac455ca88ecf665f85a04f",
      "internalId": 1806,
      "lastHostUuid": "d8cdd8171841467a810339996b6de469",
      "memorySize": 1073741824,
      "rootVolumeUuid": "5d450ebfca9544b684f7e8fc30b4ced5",
      "vmCdRoms": [
        {
          "name": "vm-65b648cf057241e89d587249f483e42a-cdRom",
          "lastOpDate": "Jan 6, 2020 8:15:56 PM",
          "uuid": "35bdd66abbaf4713b0e72c5fc7c37b84",
          "deviceId": 0,
          "vmInstanceUuid": "65b648cf057241e89d587249f483e42a",
          "createDate": "Jan 6, 2020 8:15:56 PM"
        }
      ],
      "name": "VM-3",
      "lastOpDate": "Jan 15, 2020 10:22:27 AM",
      "instanceOfferingUuid": "212a84a3c5324d8b880def26bbbcf31f",
      "state": "Stopped",
      "imageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
      "createDate": "Jan 6, 2020 8:15:56 PM"
    },
    {
      "clusterUuid": "0f86d8671dff49aaa5955254bb67dc9e",
      "vmNics": [
        {
          "usedIpUuid": "3317a935de0d3d22b4763be4e13ad48c",
          "ip": "192.168.5.218",
          "l3NetworkUuid": "60145e8409694366a8368263053b0440",
          "hypervisorType": "KVM",
          "uuid": "9413ce1e4f794d4d9060c9b74ef6f7c9",
          "deviceId": 0,
          "mac": "fa:28:41:61:26:00",
          "internalName": "vnic1804.0",
          "ipVersion": 4,
          "netmask": "255.255.255.0",
          "lastOpDate": "Jan 6, 2020 2:37:39 PM",
          "usedIps": [
            {
              "ipInLong": 3232237018,
              "ipVersion": 4,
              "ipRangeUuid": "7ade6f2eb22143f49ef2fa99edfe8825",
              "netmask": "255.255.255.0",
              "vmNicUuid": "9413ce1e4f794d4d9060c9b74ef6f7c9",
              "ip": "192.168.5.218",
              "lastOpDate": "Jan 6, 2020 2:37:39 PM",
              "l3NetworkUuid": "60145e8409694366a8368263053b0440",
              "uuid": "3317a935de0d3d22b4763be4e13ad48c",
              "gateway": "192.168.5.1",
              "createDate": "Jan 6, 2020 2:37:39 PM"
            }
          ],
          "gateway": "192.168.5.1",
          "vmInstanceUuid": "fd989aa9d9d24be2a12a8b1fe4b4cb89",
          "createDate": "Jan 6, 2020 2:37:39 PM"
        }
      ],
      "cpuSpeed": 0,
      "allVolumes": [
        {
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-b9b3b3937f6748979f031524db497c72/b9b3b3937f6748979f031524db497c72.qcow2",
          "actualSize": 7995392,
          "format": "qcow2",
          "description": "Root volume for VM[uuid:fd989aa9d9d24be2a12a8b1fe4b4cb89]",
          "type": "Root",
          "uuid": "b9b3b3937f6748979f031524db497c72",
          "deviceId": 0,
          "size": 12682240,
          "name": "ROOT-for-VM-VPC2",
          "lastOpDate": "Jan 6, 2020 2:37:40 PM",
          "isShareable": false,
          "state": "Enabled",
          "primaryStorageUuid": "b1296dc880984edeb6ec05d2c9d7e243",
          "vmInstanceUuid": "fd989aa9d9d24be2a12a8b1fe4b4cb89",
          "rootImageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
          "status": "Ready",
          "createDate": "Jan 6, 2020 2:37:39 PM"
        }
      ],
      "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
      "zoneUuid": "c782f9e5bda544c4ac59dadfc8cf64a2",
      "description": "",
      "hypervisorType": "KVM",
      "type": "UserVm",
      "uuid": "fd989aa9d9d24be2a12a8b1fe4b4cb89",
      "platform": "Linux",
      "cpuNum": 1,
      "defaultL3NetworkUuid": "60145e8409694366a8368263053b0440",
      "internalId": 1804,
      "lastHostUuid": "d8cdd8171841467a810339996b6de469",
      "memorySize": 1073741824,
      "rootVolumeUuid": "b9b3b3937f6748979f031524db497c72",
      "vmCdRoms": [
        {
          "name": "vm-fd989aa9d9d24be2a12a8b1fe4b4cb89-cdRom",
          "lastOpDate": "Jan 6, 2020 2:37:39 PM",
          "uuid": "7c096a9596a04410ace5c2d6ddcf1c82",
          "deviceId": 0,
          "vmInstanceUuid": "fd989aa9d9d24be2a12a8b1fe4b4cb89",
          "createDate": "Jan 6, 2020 2:37:39 PM"
        }
      ],
      "name": "VM-VPC2",
      "lastOpDate": "Jan 15, 2020 10:22:27 AM",
      "instanceOfferingUuid": "212a84a3c5324d8b880def26bbbcf31f",
      "state": "Stopped",
      "imageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
      "createDate": "Jan 6, 2020 2:37:39 PM"
    },
    {
      "clusterUuid": "0f86d8671dff49aaa5955254bb67dc9e",
      "vmNics": [
        {
          "usedIpUuid": "4bcb19e099e134079d9064593560c007",
          "ip": "192.168.1.244",
          "l3NetworkUuid": "3b60d16ead2f4a07a7869258315a3511",
          "hypervisorType": "KVM",
          "uuid": "d8cf0f423a1841e99c05d591e3ef4243",
          "deviceId": 0,
          "mac": "fa:be:fe:db:ad:00",
          "internalName": "vnic1803.0",
          "ipVersion": 4,
          "netmask": "255.255.255.0",
          "lastOpDate": "Jan 6, 2020 2:35:59 PM",
          "usedIps": [
            {
              "ipInLong": 3232236020,
              "ipVersion": 4,
              "ipRangeUuid": "2080f7c304974b66b4477cfca0091f1c",
              "netmask": "255.255.255.0",
              "vmNicUuid": "d8cf0f423a1841e99c05d591e3ef4243",
              "ip": "192.168.1.244",
              "lastOpDate": "Jan 6, 2020 2:35:59 PM",
              "l3NetworkUuid": "3b60d16ead2f4a07a7869258315a3511",
              "uuid": "4bcb19e099e134079d9064593560c007",
              "gateway": "192.168.1.1",
              "createDate": "Jan 6, 2020 2:35:59 PM"
            }
          ],
          "gateway": "192.168.1.1",
          "vmInstanceUuid": "d5fc43e12876451883fd879a2a074b60",
          "createDate": "Jan 6, 2020 2:35:59 PM"
        }
      ],
      "cpuSpeed": 0,
      "allVolumes": [
        {
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-8202143d45a94092b73a55634a957bdd/8202143d45a94092b73a55634a957bdd.qcow2",
          "actualSize": 7995392,
          "format": "qcow2",
          "description": "Root volume for VM[uuid:d5fc43e12876451883fd879a2a074b60]",
          "type": "Root",
          "uuid": "8202143d45a94092b73a55634a957bdd",
          "deviceId": 0,
          "size": 12682240,
          "name": "ROOT-for-VM-云路由",
          "lastOpDate": "Jan 6, 2020 2:35:59 PM",
          "isShareable": false,
          "state": "Enabled",
          "primaryStorageUuid": "b1296dc880984edeb6ec05d2c9d7e243",
          "vmInstanceUuid": "d5fc43e12876451883fd879a2a074b60",
          "rootImageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
          "status": "Ready",
          "createDate": "Jan 6, 2020 2:35:59 PM"
        }
      ],
      "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
      "zoneUuid": "c782f9e5bda544c4ac59dadfc8cf64a2",
      "description": "",
      "hypervisorType": "KVM",
      "type": "UserVm",
      "uuid": "d5fc43e12876451883fd879a2a074b60",
      "platform": "Linux",
      "cpuNum": 1,
      "defaultL3NetworkUuid": "3b60d16ead2f4a07a7869258315a3511",
      "internalId": 1803,
      "lastHostUuid": "d8cdd8171841467a810339996b6de469",
      "memorySize": 1073741824,
      "rootVolumeUuid": "8202143d45a94092b73a55634a957bdd",
      "vmCdRoms": [
        {
          "name": "vm-d5fc43e12876451883fd879a2a074b60-cdRom",
          "lastOpDate": "Jan 6, 2020 2:35:59 PM",
          "uuid": "a3dd69c2232248fa962a74db570a99ae",
          "deviceId": 0,
          "vmInstanceUuid": "d5fc43e12876451883fd879a2a074b60",
          "createDate": "Jan 6, 2020 2:35:59 PM"
        }
      ],
      "name": "VM-云路由",
      "lastOpDate": "Jan 15, 2020 10:22:27 AM",
      "instanceOfferingUuid": "212a84a3c5324d8b880def26bbbcf31f",
      "state": "Stopped",
      "imageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
      "createDate": "Jan 6, 2020 2:35:58 PM"
    },
    {
      "clusterUuid": "0f86d8671dff49aaa5955254bb67dc9e",
      "vmNics": [
        {
          "usedIpUuid": "14f0a9c79bc03fcf935617299d8f13da",
          "ip": "192.168.3.173",
          "l3NetworkUuid": "4a75d8ad26384c229f455aa176131257",
          "hypervisorType": "KVM",
          "uuid": "bb571ade9bf044c7a1e5b13afe0c5c71",
          "deviceId": 0,
          "mac": "fa:13:9f:b8:93:00",
          "internalName": "vnic1802.0",
          "ipVersion": 4,
          "netmask": "255.255.255.0",
          "lastOpDate": "Jan 6, 2020 2:35:35 PM",
          "usedIps": [
            {
              "ipInLong": 3232236461,
              "ipVersion": 4,
              "ipRangeUuid": "68a323f075d54568ad369c132459ea67",
              "netmask": "255.255.255.0",
              "vmNicUuid": "bb571ade9bf044c7a1e5b13afe0c5c71",
              "ip": "192.168.3.173",
              "lastOpDate": "Jan 6, 2020 2:35:35 PM",
              "l3NetworkUuid": "4a75d8ad26384c229f455aa176131257",
              "uuid": "14f0a9c79bc03fcf935617299d8f13da",
              "gateway": "192.168.3.1",
              "createDate": "Jan 6, 2020 2:35:35 PM"
            }
          ],
          "gateway": "192.168.3.1",
          "vmInstanceUuid": "3a3c710bdd384f658ba9aa722cad9de9",
          "createDate": "Jan 6, 2020 2:35:35 PM"
        }
      ],
      "cpuSpeed": 0,
      "allVolumes": [
        {
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-92d8911cb9194bebb9eba156fcf2dccc/92d8911cb9194bebb9eba156fcf2dccc.qcow2",
          "actualSize": 7995392,
          "format": "qcow2",
          "description": "Root volume for VM[uuid:3a3c710bdd384f658ba9aa722cad9de9]",
          "type": "Root",
          "uuid": "92d8911cb9194bebb9eba156fcf2dccc",
          "deviceId": 0,
          "size": 12682240,
          "name": "ROOT-for-VM-VPC",
          "lastOpDate": "Jan 6, 2020 2:35:36 PM",
          "isShareable": false,
          "state": "Enabled",
          "primaryStorageUuid": "b1296dc880984edeb6ec05d2c9d7e243",
          "vmInstanceUuid": "3a3c710bdd384f658ba9aa722cad9de9",
          "rootImageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
          "status": "Ready",
          "createDate": "Jan 6, 2020 2:35:35 PM"
        }
      ],
      "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
      "zoneUuid": "c782f9e5bda544c4ac59dadfc8cf64a2",
      "description": "",
      "hypervisorType": "KVM",
      "type": "UserVm",
      "uuid": "3a3c710bdd384f658ba9aa722cad9de9",
      "platform": "Linux",
      "cpuNum": 1,
      "defaultL3NetworkUuid": "4a75d8ad26384c229f455aa176131257",
      "internalId": 1802,
      "lastHostUuid": "d8cdd8171841467a810339996b6de469",
      "memorySize": 1073741824,
      "rootVolumeUuid": "92d8911cb9194bebb9eba156fcf2dccc",
      "vmCdRoms": [
        {
          "name": "vm-3a3c710bdd384f658ba9aa722cad9de9-cdRom",
          "lastOpDate": "Jan 6, 2020 2:35:35 PM",
          "uuid": "764bca0770a34dde890f47e97e9a9d12",
          "deviceId": 0,
          "vmInstanceUuid": "3a3c710bdd384f658ba9aa722cad9de9",
          "createDate": "Jan 6, 2020 2:35:35 PM"
        }
      ],
      "name": "VM-VPC-1",
      "lastOpDate": "Feb 19, 2020 11:18:36 PM",
      "instanceOfferingUuid": "212a84a3c5324d8b880def26bbbcf31f",
      "state": "Stopped",
      "imageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
      "createDate": "Jan 6, 2020 2:35:35 PM"
    },
    {
      "clusterUuid": "0f86d8671dff49aaa5955254bb67dc9e",
      "vmNics": [
        {
          "usedIpUuid": "62aa4110267732328b8875f6699b2ad4",
          "ip": "10.151.0.253",
          "l3NetworkUuid": "78103412052c43cabc5b29e347cf7126",
          "hypervisorType": "KVM",
          "uuid": "0325be017abb42628241ea6d482afa5a",
          "deviceId": 0,
          "mac": "fa:e6:9a:7c:00:00",
          "internalName": "vnic1801.0",
          "ipVersion": 4,
          "netmask": "255.0.0.0",
          "lastOpDate": "Jan 6, 2020 2:34:51 PM",
          "usedIps": [
            {
              "ipInLong": 177668349,
              "ipVersion": 4,
              "ipRangeUuid": "d0e6d4d5b69a4562a1ddc552ec238723",
              "netmask": "255.0.0.0",
              "vmNicUuid": "0325be017abb42628241ea6d482afa5a",
              "ip": "10.151.0.253",
              "lastOpDate": "Jan 6, 2020 2:34:51 PM",
              "l3NetworkUuid": "78103412052c43cabc5b29e347cf7126",
              "uuid": "62aa4110267732328b8875f6699b2ad4",
              "gateway": "10.0.0.1",
              "createDate": "Jan 6, 2020 2:34:51 PM"
            }
          ],
          "gateway": "10.0.0.1",
          "vmInstanceUuid": "81050f9bd8ce45dd97321ddee28d1fe2",
          "createDate": "Jan 6, 2020 2:34:51 PM"
        }
      ],
      "cpuSpeed": 0,
      "allVolumes": [
        {
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-aa04c4b9de4745fa80f06495df3bf36a/aa04c4b9de4745fa80f06495df3bf36a.qcow2",
          "actualSize": 7995392,
          "format": "qcow2",
          "description": "Root volume for VM[uuid:81050f9bd8ce45dd97321ddee28d1fe2]",
          "type": "Root",
          "uuid": "aa04c4b9de4745fa80f06495df3bf36a",
          "deviceId": 0,
          "size": 12682240,
          "name": "ROOT-for-VM-公网",
          "lastOpDate": "Jan 6, 2020 2:34:52 PM",
          "isShareable": false,
          "state": "Enabled",
          "primaryStorageUuid": "b1296dc880984edeb6ec05d2c9d7e243",
          "vmInstanceUuid": "81050f9bd8ce45dd97321ddee28d1fe2",
          "rootImageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
          "status": "Ready",
          "createDate": "Jan 6, 2020 2:34:51 PM"
        }
      ],
      "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
      "zoneUuid": "c782f9e5bda544c4ac59dadfc8cf64a2",
      "description": "",
      "hypervisorType": "KVM",
      "type": "UserVm",
      "uuid": "81050f9bd8ce45dd97321ddee28d1fe2",
      "platform": "Linux",
      "cpuNum": 1,
      "defaultL3NetworkUuid": "78103412052c43cabc5b29e347cf7126",
      "internalId": 1801,
      "lastHostUuid": "d8cdd8171841467a810339996b6de469",
      "memorySize": 1073741824,
      "rootVolumeUuid": "aa04c4b9de4745fa80f06495df3bf36a",
      "vmCdRoms": [
        {
          "name": "vm-81050f9bd8ce45dd97321ddee28d1fe2-cdRom",
          "lastOpDate": "Jan 6, 2020 2:34:51 PM",
          "uuid": "79e6ae19939d47b3a69b2a998f634c1c",
          "deviceId": 0,
          "vmInstanceUuid": "81050f9bd8ce45dd97321ddee28d1fe2",
          "createDate": "Jan 6, 2020 2:34:51 PM"
        }
      ],
      "name": "VM-公网",
      "lastOpDate": "Jan 15, 2020 10:22:26 AM",
      "instanceOfferingUuid": "212a84a3c5324d8b880def26bbbcf31f",
      "state": "Stopped",
      "imageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
      "createDate": "Jan 6, 2020 2:34:51 PM"
    },
    {
      "clusterUuid": "0f86d8671dff49aaa5955254bb67dc9e",
      "vmNics": [
        {
          "usedIpUuid": "1754e47352a03733bb718e2f5d80091d",
          "ip": "192.168.0.225",
          "l3NetworkUuid": "fd4eca3d6d5d4d30afea94a1be6d48da",
          "hypervisorType": "KVM",
          "uuid": "1482da79031c479883f2042e207aa916",
          "deviceId": 0,
          "mac": "fa:82:bf:c2:8d:00",
          "internalName": "vnic1797.0",
          "ipVersion": 4,
          "netmask": "255.255.255.0",
          "lastOpDate": "Sep 12, 2019 5:19:30 PM",
          "usedIps": [
            {
              "ipInLong": 3232235745,
              "ipVersion": 4,
              "ipRangeUuid": "61eff03e13194029b9128b60d24b7e40",
              "netmask": "255.255.255.0",
              "vmNicUuid": "1482da79031c479883f2042e207aa916",
              "ip": "192.168.0.225",
              "lastOpDate": "Sep 12, 2019 5:19:30 PM",
              "l3NetworkUuid": "fd4eca3d6d5d4d30afea94a1be6d48da",
              "uuid": "1754e47352a03733bb718e2f5d80091d",
              "gateway": "192.168.0.1",
              "createDate": "Sep 12, 2019 5:19:30 PM"
            }
          ],
          "gateway": "192.168.0.1",
          "vmInstanceUuid": "c0220ee607bf4afabc2a66532b0b0387",
          "createDate": "Sep 12, 2019 5:19:30 PM"
        }
      ],
      "cpuSpeed": 0,
      "allVolumes": [
        {
          "installPath": "/zstack_ps/dataVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-1b746a6adb584ee89c65ab51c3634416/snapshots/88864416e95846f68b5e881cdca1eedf.qcow2",
          "actualSize": 0,
          "format": "qcow2",
          "description": "",
          "type": "Data",
          "uuid": "1b746a6adb584ee89c65ab51c3634416",
          "deviceId": 1,
          "diskOfferingUuid": "8a1844d9042c4284966bce1e88075589",
          "size": 10485760,
          "name": "云盘-1",
          "lastOpDate": "Jan 3, 2020 3:07:35 PM",
          "isShareable": false,
          "state": "Enabled",
          "primaryStorageUuid": "b1296dc880984edeb6ec05d2c9d7e243",
          "vmInstanceUuid": "c0220ee607bf4afabc2a66532b0b0387",
          "status": "Ready",
          "createDate": "Sep 12, 2019 5:25:11 PM",
          "volumeQos": "write=31457280,read=10485760"
        },
        {
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-b2026ce722584b0383b247640e2961e2/snapshots/9eac8e8d51fc450d91e713bc4fdd20a2.qcow2",
          "actualSize": 17383424,
          "format": "qcow2",
          "description": "Root volume for VM[uuid:c0220ee607bf4afabc2a66532b0b0387]",
          "type": "Root",
          "uuid": "b2026ce722584b0383b247640e2961e2",
          "deviceId": 0,
          "size": 12682240,
          "name": "ROOT-for-VM-1",
          "lastOpDate": "Sep 12, 2019 5:26:28 PM",
          "isShareable": false,
          "state": "Enabled",
          "primaryStorageUuid": "b1296dc880984edeb6ec05d2c9d7e243",
          "vmInstanceUuid": "c0220ee607bf4afabc2a66532b0b0387",
          "rootImageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
          "status": "Ready",
          "createDate": "Sep 12, 2019 5:19:30 PM"
        }
      ],
      "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
      "zoneUuid": "c782f9e5bda544c4ac59dadfc8cf64a2",
      "description": "",
      "hypervisorType": "KVM",
      "type": "UserVm",
      "uuid": "c0220ee607bf4afabc2a66532b0b0387",
      "platform": "Linux",
      "cpuNum": 1,
      "defaultL3NetworkUuid": "fd4eca3d6d5d4d30afea94a1be6d48da",
      "internalId": 1797,
      "lastHostUuid": "d8cdd8171841467a810339996b6de469",
      "memorySize": 1073741824,
      "rootVolumeUuid": "b2026ce722584b0383b247640e2961e2",
      "vmCdRoms": [
        {
          "name": "vm-c0220ee607bf4afabc2a66532b0b0387-cdRom",
          "lastOpDate": "Sep 12, 2019 5:19:30 PM",
          "uuid": "1cf68d5905fa46c3a6201818418da810",
          "deviceId": 0,
          "vmInstanceUuid": "c0220ee607bf4afabc2a66532b0b0387",
          "createDate": "Sep 12, 2019 5:19:30 PM"
        }
      ],
      "name": "VM-扁平",
      "lastOpDate": "Jan 16, 2020 10:19:35 AM",
      "instanceOfferingUuid": "212a84a3c5324d8b880def26bbbcf31f",
      "state": "Stopped",
      "imageUuid": "ccddc92afcc5155d9b7add10a0cd2b68",
      "createDate": "Sep 12, 2019 5:19:30 PM"
    }
  ]
}

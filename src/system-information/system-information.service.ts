import { Injectable } from '@nestjs/common';
import si from "systeminformation";
const six = require("systeminformation");

@Injectable()
export class SystemInformationService {

    async getSerialNumber(): Promise<string|undefined> {
        try {
            // Obtener información del sistema
            const systemInfo = await six.system();
            const sysbis = await six.bios();
            const sychasis = await six.chassis();
            const baseboardInfo = await six.baseboard();

            console.log(systemInfo)
            console.log(sysbis)
            console.log(sychasis)
            console.log(baseboardInfo)



            //const serial1 = systemInfo.serial
            //const serial2 = baseboardInfo.serial;

            //console.log("Serial del Sistema:", serial1 || "No disponible");
            //console.log("Serial de la Placa Base:", serial2 || "No disponible");

            return "xxx"//serial1 + "-" + serial2;

        } catch (error) {
            console.error("Error obteniendo el serial:", error);
        }
    }
}

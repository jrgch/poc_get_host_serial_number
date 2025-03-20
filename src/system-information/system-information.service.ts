import { Injectable } from '@nestjs/common';
import si from "systeminformation";

export interface SystemSerialInfo {
    systemInfoSerial: string;
    sysbiosSerial: string;
    sychasisSerial: string;
    baseboardInfoSerial: string;
}

@Injectable()
export class SystemInformationService {

    async getSerialNumber(): Promise<SystemSerialInfo | undefined> {
        try {
            // Obtener información del sistema
            const systemInfo = await si.system();
            const sysbios = await si.bios();
            const sychasis = await si.chassis();
            const baseboardInfo = await si.baseboard();

            const resp = {
                systemInfoSerial: systemInfo?.serial ?? "",
                sysbiosSerial: sysbios?.serial ?? "",
                sychasisSerial: sychasis?.serial ?? "",
                baseboardInfoSerial: baseboardInfo?.serial ?? ""
            }

            return resp;

        } catch (error) {
            console.error("Error obteniendo el serial:", error);
        }
    }
}

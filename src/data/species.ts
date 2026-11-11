import {getAllRawSpecies, type RawSpecies, type Threat} from "./api.ts";

export type Species = {
    readonly id: string,
    readonly icon: string,
    readonly name: string,
    readonly scientificName: string,
    readonly islands: string[],
    readonly threat: Threat,
    readonly threatLabel: string,
    readonly description: string,
    readonly habitat: string,
    readonly height: string
}
const getThreatLabel = (threat: Threat): string => {
    switch (threat) {
        case 'EN':
            return 'En peligro';
        case 'VU':
            return 'Vulnerable';
        case 'LC':
            return 'Preocupación menor';
        default:
            return '';
    }
}
export const rawToSpecies = (raw: RawSpecies): Species => ({
    id: raw.id,
    icon: raw.icono,
    name: raw.nombre,
    scientificName: raw.cientifico,
    islands: raw.islas.map(i => i.nombre),
    threat: raw.amenaza,
    threatLabel: getThreatLabel(raw.amenaza),
    description: raw.descripcion,
    habitat: raw.habitat,
    height: raw.tamano
});
const getSpecies = async (): Promise<Species[]> => {
    return (await getAllRawSpecies()).map(rawToSpecies);
}
export const allSpecies = await getSpecies();

type Island = {
    readonly id: string
    readonly nombre: string
}

export type Threat = 'EN' | 'VU' | 'LC';

export type RawSpecies = {
    readonly id: string,
    readonly nombre: string
    readonly cientifico: string
    readonly icono: string
    readonly tipo: string
    readonly amenaza: Threat
    readonly habitat: string
    readonly tamano: string
    readonly descripcion: string
    readonly islas: Island[]
}

const URL_API = import.meta.env.PUBLIC_GRAPHQL_URL;

const queryApi = async (query: string,
                        variables: Record<string, unknown> = {}) => {
    const answer = await fetch(URL_API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query, variables}),
    });
    const {data, errors} = await answer.json();
    if (errors) {
        throw new Error(errors.map((e: { message: any; }) => e.message)
            .join('\n'));
    }
    return data;
};

export const getRawSpecies = async (): Promise<RawSpecies[]> => {
    const query =
        `query getSpecies {
            especies {
            id
            nombre
            cientifico
            icono
            tipo
            amenaza
            habitat
            tamano
            descripcion
            islas {
              id
              nombre
            }
          }
        }`;
    return (await queryApi(query)).especies;
}


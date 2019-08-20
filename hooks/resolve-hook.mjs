const baseURL = new URL(`${process.cwd()}/`, 'file://');

export async function resolve(specifier,
                              parentModuleURL = baseURL,
                              defaultResolver) {
    return {
        url: new URL(specifier, parentModuleURL).href,
        format: 'module'
    };
}
import debug from "debug";

const appName = "AplicationFinal";

export const serverDebug = debug(`${appName}:server`);
export const dbDebug = debug(`${appName}:db`);
export const envDebug = debug(`${appName}:env`);

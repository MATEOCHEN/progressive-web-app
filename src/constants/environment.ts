enum Environment {
    LOCAL = "LOCAL",
    DEV = "DEV",
    PROD = "PROD"
}

enum DataSource {
    PROD = "PROD",
    MOCK = "MOCK"
}

const CURRENT_ENVIRONMENT = process.env.CURRENT_ENVIRONMENT
const DATA_SOURCE = process.env.DATA_SOURCE

const CDN_DOMAIN = "https://greenblob.azureedge.net"

export {
    CURRENT_ENVIRONMENT,
    DATA_SOURCE,
    CDN_DOMAIN,
    Environment,
    DataSource
}
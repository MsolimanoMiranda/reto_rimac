module.exports = {
    dbConfig(user, password, host,database){
        return {
            user: user || process.env.PC_CLOUD_USER ,
            password:  password || process.env.PC_CLOUD_PASSWORD,
            host:  host || process.env.PC_CLOUD_HOST,
            port: process.env.PC_CLOUD_PORT,
            database: database || process.env.PC_CLOUD_DATABASE,
        }
    }
}
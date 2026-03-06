module.exports = {
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$12$DhhDmrR0Df8fji10QUxNauvwXFiZgSKG5pQ3RVEKetYTMDa.EZ/1G",
            permissions: "*"
        }]
    },
    httpNodeCors: {
        origin: "*",
        methods: "GET,PUT,POST,DELETE"
    },
    ui: { path: "ui" }
}

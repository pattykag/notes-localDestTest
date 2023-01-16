const cds = require('@sap/cds');

module.exports = cds.service.impl(async (srv) => {
    const { Infos } = srv.entities;

    srv.before('READ', Infos, async (req) => {
        try {
            console.log('Debug test');
        } catch (error) {
            console.log("Error", error);
            req.reject(400, error);
        }
    });
});
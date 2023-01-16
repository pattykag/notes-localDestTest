const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const notes = await cds.connect.to("notes"); 
      srv.on('READ', 'Notes', req => notes.run(req.query)); 
      srv.on('READ', 'Type', req => notes.run(req.query)); 
}
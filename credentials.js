
var credentials ={

	credentials: {
		// Replace placeholder below by the Consumer Key and Consumer Secret you got from
		// http://developer.autodesk.com/ for the production server
		client_id: process.env.FORGE_CLIENT_ID || '<your key>',
		client_secret: process.env.FORGE_CLIENT_SECRET || '<your secret>',
		test_urn: process.env.FORGE_TEST_URN || '<your secret>',

		grant_type: 'client_credentials',
        scope: 'data:read',		
	},
	
	// If you which to use the Autodesk View & Data API on the staging server, change this url
	BaseUrl: 'https://developer.api.autodesk.com',
	Version: 'v1'
} ;

credentials.Authentication =credentials.BaseUrl + '/authentication/' + credentials.Version + '/authenticate'

module.exports =credentials ;

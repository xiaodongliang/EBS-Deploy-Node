
var viewer = null;
 
$(document).ready( function(){

    $.get('/api/token',function(tokenResponse) {

        var jsonValue =  JSON.parse(tokenResponse);
        var token  = jsonValue.token.access_token;
        var documentId = jsonValue.urn;
        
        var options = {
            env: 'AutodeskProduction',
            accessToken: token,
            api:'modelDerivativeV2'
         };  
 
        Autodesk.Viewing.Initializer(options, function onInitialized(){
            Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
        });

        /**
        * Autodesk.Viewing.Document.load() success callback.
        * Proceeds with model initialization.
        */
        function onDocumentLoadSuccess(doc) {

            // A document contains references to 3D and 2D viewables.
            var viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {'type':'geometry'}, true);
            if (viewables.length === 0) {
                console.error('Document contains no viewables.');
                return;
            }

            // Choose any of the avialble viewables
            var initialViewable = viewables[0];
            var svfUrl = doc.getViewablePath(initialViewable);
            var modelOptions = {
                sharedPropertyDbPath: doc.getPropertyDbPath()
            };

            var viewerDiv = document.getElementById('myViewer');
            viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);
            viewer.start(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);
        }

        /**
         * Autodesk.Viewing.Document.load() failuire callback.
         */
        function onDocumentLoadFailure(viewerErrorCode) {
            console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
        }

        /**
         * viewer.loadModel() success callback.
         * Invoked after the model's SVF has been initially loaded.
         * It may trigger before any geometry has been downloaded and displayed on-screen.
         */
        function onLoadModelSuccess(model) {
            console.log('onLoadModelSuccess()!');
            console.log('Validate model loaded: ' + (viewer.model === model));
            console.log(model);
            
            viewer.addEventListener(
                 Autodesk.Viewing.GEOMETRY_LOADED_EVENT, onGeometryLoaded); 
            
         }

        /**
         * viewer.loadModel() failure callback.
         * Invoked when there's an error fetching the SVF file.
         */
        function onLoadModelError(viewerErrorCode) {
            console.error('onLoadModelError() - errorCode:' + viewerErrorCode);
        }
        
         function onGeometryLoaded(event)
         { 
         }
        
    });  

});
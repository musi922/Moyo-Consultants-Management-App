sap.ui.define(["./BaseController", "sap/m/MessageBox",
	"sap/ui/model/odata/v2/ODataModel"
], function (BaseController, MessageBox,ODataModel) {
	"use strict";

	return BaseController.extend("moyotech.controller.Main", {
		onInit() {
			let oModel = new ODataModel("http://localhost:4000/odata", {
                defaultBindingMode: "TwoWay",
                useBatch: false,
                headers: {
                    "Content-Type": "application/atom+xml",
                },
                json: false,
                maxDataServiceVersion: "3.0"
            } 
			); this.getView().setModel(oModel)}
			
	});
});

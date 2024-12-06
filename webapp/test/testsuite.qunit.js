sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: moyotech",
		defaults: {
			page: "ui5://test-resources/moyotech/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "moyotech/",
				never: "test-resources/moyotech/"
			},
			loader: {
				paths: {
					"moyotech": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for moyotech"
			},
			"integration/opaTests": {
				title: "Integration tests for moyotech"
			}
		}
	};
});

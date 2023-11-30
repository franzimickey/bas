sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskManagement/RiskManagement/test/integration/FirstJourney',
		'RiskManagement/RiskManagement/test/integration/pages/RisksList',
		'RiskManagement/RiskManagement/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskManagement/RiskManagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);
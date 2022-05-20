'use strict';

const logoutButton = new LogoutButton();
logoutButton.action = () => {
	ApiConnector.logout(response => {
		if (response.successfully === true)
			location.reload();
	});
};

ApiConnector.current(response => {
	if (response.successfully === true)
		ProfileWidget.showProfile(response.data);
});

const ratesBoard = new RatesBoard();
let courseRequest = () => ApiConnector.getStocks(response => {
	if (response.successfully === true)
		ratesBoard.clearTable();
	ratesBoard.fillTable(response.data);
});
courseRequest();
setTimeout(courseRequest, 60000);
function ItemSettingModal() {

	var ItemSettingMask = document.getElementById("add-ItemSettingMask");
	if (ItemSettingMask.style.display === "none") {
		ItemSettingMask.style.display = "block";
	} else {
		ItemSettingMask.style.display = "none";
	};

	var ItemSettingPopup = document.getElementById("ItemSetting");
	if (ItemSettingPopup.style.display === "none") {
		ItemSettingPopup.style.display = "block";
	} else {
		ItemSettingPopup.style.display = "none";
	};

	var height100 = document.getElementById("item-setting-outer");
	if (ItemSettingPopup.style.display === "none") {
		height100.classList.remove("height-100");
	} else {
		height100.classList.add("height-100");
	};

};











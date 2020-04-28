import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../background/store/modules/settings";
import backgroundLog from "utils/backgroundLog";

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.settings.currentUser);

  backgroundLog(currentUser);

  try {
    const bkg = chrome.extension.getBackgroundPage();
    backgroundLog(bkg);
  } catch (err) {
    backgroundLog(err);
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    const tab_id = currentTab.id;
    const tab_url = currentTab.url;
    backgroundLog(currentTab);
    backgroundLog(tab_id);
    backgroundLog(tab_url);
  });

  const handleLogout = () => {
    dispatch(setLogout());
  };

  const getDom = () => {};

  return (
    <div>
      <div style={{ background: "whiteSmoke", padding: 12 }}>
        <div style={{ float: "right" }}>
          <a onClick={handleLogout}>Logout</a>
        </div>
        <span>{currentUser.email}</span>
      </div>
      <div style={{ padding: 12 }}>
        <button onClick={getDom}>Create Contact</button>
        <div>
          This button should only show up if the user is browsing Linkedin.
        </div>
      </div>
    </div>
  );
};

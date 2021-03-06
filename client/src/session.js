//Code copied from "https://www.jmfurlott.com/handling-user-session-react-context/"

import * as Cookies from "js-cookie";

export const setSessionCookie = (session) => {
  Cookies.remove("session");
  Cookies.set("session", session, { expires: 14 });
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get("session");

  if (
    sessionCookie === undefined ||
    sessionCookie === { uid: null, hid: null }
  ) {
    return "none";
  } else {
    return JSON.parse(sessionCookie);
  }
};

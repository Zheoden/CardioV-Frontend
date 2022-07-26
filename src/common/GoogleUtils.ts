export const refreshToken = (res: any) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('newAuthRes:', newAuthRes);
    console.log('new auth token', newAuthRes.id_token);

    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};

export const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ?? '';

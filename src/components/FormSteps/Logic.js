export const SendRequest = async (email, name, phone, country, developer, long) => {

    const formData = new FormData();

      formData.append("access_key", "c3af62f9-d3eb-4155-b1da-0c40589040dd");
      formData.append("email", email);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("country", country);
      formData.append("radioDeveloper", developer);
      formData.append("radioLong", long);

      const object = Object.fromEntries(formData);
      const jsonData = JSON.stringify(object);

    const result = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: jsonData,
    });

    return result;
};


export const SendRequestEmail = async (email) => {
  const url = `https://macber.live/email/email.php?email=${email}`;

  const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      
  });

  return result;
};





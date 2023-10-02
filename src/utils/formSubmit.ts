type FormSubmit = {
  name: string;
  email: string;
  message: string;
};

const formSubmit = (data: FormSubmit) =>
  new Promise<boolean>(async (resolve, reject) => {
    const URI = process.env.NEXT_PUBLIC_FORM_SUBMIT_URL;
    try {
      if (!URI) throw new Error("FormSubmit URI is not provided");
      await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      resolve(true);
    } catch (error) {
      console.log(error);
      reject(false);
    }
  });

export default formSubmit;

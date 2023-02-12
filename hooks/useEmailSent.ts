import emailjs from '@emailjs/browser';

export const useEmailSent = () => {
  function sendMail(
    formRef: React.MutableRefObject<string | HTMLFormElement>
  ) {
    emailjs.sendForm(
      'service_4oth4uf',
      'template_hpn6ejc',
      formRef.current,
      'kvBgQaiESMgrzldlU'
    )
      .then((result) => {
        console.log(result.text);
        console.log('message sent');

      }, (error) => {
        console.log(error.text);
      });
  }

  return { sendMail };
}


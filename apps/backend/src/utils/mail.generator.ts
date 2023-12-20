import MailGen from 'mailgen';

const mailGenerator = new MailGen({
  theme: "default",
  product: {
    name: "Sashay",
    logo: "Sashay",
    link: "#"
  }
});

export default mailGenerator;
import MailGen from 'mailgen';

const mailGenerator = new MailGen({
  theme: "default",
  product: {
    name: "Sashay",
    logo: "http://localhost:5173/Logo.svg",
    link: "#"
  }
});

export default mailGenerator;
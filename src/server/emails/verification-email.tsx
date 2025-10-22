import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  verificationUrl: string;
  userEmail: string;
}

export const VerificationEmail = ({
  verificationUrl,
  userEmail,
}: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verify your email address</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Heading style={h1}>OpenNext Template</Heading>
          </Section>
          <Heading style={h2}>Verify your email address</Heading>
          <Text style={text}>
            Thanks for signing up! We need to verify your email address{" "}
            <strong>{userEmail}</strong> to complete your account setup.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={verificationUrl}>
              Verify Email Address
            </Button>
          </Section>
          <Text style={text}>
            If you didn't create an account, you can safely ignore this email.
          </Text>
          <Text style={footer}>
            If the button doesn't work, copy and paste this link into your
            browser:{" "}
            <Link href={verificationUrl} style={link}>
              {verificationUrl}
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "system-ui, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const logoContainer = {
  marginTop: "32px",
};

const h1 = {
  color: "#333",
  fontFamily: "system-ui, sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  textAlign: "center" as const,
};

const h2 = {
  color: "#333",
  fontFamily: "system-ui, sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "30px 0 15px",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontFamily: "system-ui, sans-serif",
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "left" as const,
  padding: "0 20px",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "30px 0",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "system-ui, sans-serif",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "200px",
  padding: "14px 7px",
  margin: "0 auto",
};

const link = {
  color: "#007ee6",
  textDecoration: "underline",
};

const footer = {
  color: "#666",
  fontFamily: "system-ui, sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
  textAlign: "left" as const,
  padding: "0 20px",
  marginTop: "20px",
};

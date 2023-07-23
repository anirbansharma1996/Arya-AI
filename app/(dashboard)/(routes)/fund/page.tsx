// Fund.tsx
import Head from "next/head";
import Image from "next/image";

const Fund = () => {
  return (
    <div className="p-8">
      <Head>
        <title>Fund the App</title>
        <meta name="description" content="Support the app by funding it." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Fund the App</h1>
      <p className="text-lg mb-6">
        Thank you for using our app, powered by ChatGPT&apos;s free API! Your support helps us
        keep the app running and serving users like you. As a free user of the API, we
        have limited resources and can only generate a certain number of responses per
        month.
      </p>
      <p className="text-lg mb-6">
        To continue using the app without interruptions and help us cover the costs of
        API usage, we kindly request you to consider contributing to our app. Your
        generous donations will enable us to scale our service and provide an even better
        experience to all users.
      </p>
      <div className="w-96 mx-auto mb-8">
        <Image
          src="/QR-code.jpeg"
          alt="Bank UPI QR Code"
          width={300}
          height={300}
        
        />
      </div>
      <p className="text-lg">
        Scan the QR code above using your UPI-enabled mobile banking app to make a
        donation. We appreciate any amount you can contribute to support our mission.
        Thank you!
      </p>
    </div>
  );
};

export default Fund;

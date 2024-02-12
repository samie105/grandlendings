/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F9wtd9ySdNo
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { UtensilsIcon } from "lucide-react";

export default function Component() {
  return (
    <main>
      <header className="container mx-auto px-6 py-10 text-center">
        <h1 className="text-3xl font-semibold mb-2">
          Emergency Rental Assistance Can Help
        </h1>
        {/* <h2 className="text-sm text-gray-600">With Expenses Like:</h2> */}
      </header>
      <section className="container mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <div className="flex items-center gap-2 text-[#111]">
              <HomeIcon className="w-5 h-5" />
              <CardTitle className="text-base text-[#111]">
                Rent Assistance
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Receive support for your rental expenses without added stress.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <div className="flex items-center gap-2 text-[#111]">
              <HomeIcon className="w-5 h-5" />
              <CardTitle className="text-base text-[#111]">
                Essential Utilities
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Ensure your home has the necessary utilities with ease.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <div className="flex items-center gap-2 text-[#111]">
              <WrenchIcon className="w-5 h-5" />
              <CardTitle className="text-base text-[#111]">
                Maintenance Support
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Get assistance for home maintenance without worrying about costs.
            </p>
          </CardContent>
        </Card>
        {/* <Card className="rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <div className="flex items-center gap-2 text-[#111]">
              <HomeIcon className="w-5 h-5" />
              <CardTitle className="text-base text-[#111]">
                Medical Expenses
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Cover medical expenses and focus on your health without financial
              concerns.
            </p>
          </CardContent>
        </Card> */}
        {/* Additional Cards */}
      </section>
    </main>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}

function MicrowaveIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="15" x="2" y="4" rx="2" />
      <rect width="8" height="7" x="6" y="8" rx="1" />
      <path d="M18 8v7" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
    </svg>
  );
}

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function WrenchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

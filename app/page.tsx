import Image from "next/image";
import QrCodeGenerator from "./QrCodeGenerator";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] h-full flex justify-center items-center">
      <QrCodeGenerator />
    </div>
  );
}

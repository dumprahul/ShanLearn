import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 mt-12 bg-gray-900 text-gray-200 flex justify-center gap-8 rounded-t-2xl shadow-lg">
      <a
        href="https://docs.gator.metamask.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={18}
          height={18}
          className="opacity-80"
        />
        Docs
      </a>
      <a
        href="https://github.com/metamask/gator-examples"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={18}
          height={18}
          className="opacity-80"
        />
        Examples
      </a>
    </footer>
  );
}

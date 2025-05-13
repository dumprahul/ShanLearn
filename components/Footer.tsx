import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 border-t border-gray-200 flex justify-center gap-6">
      <a
        href="https://docs.gator.metamask.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Docs
      </a>
      <a
        href="https://github.com/metamask/gator-examples"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
    </footer>
  );
}

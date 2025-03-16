export default function BtnSignOut() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 hover:text-primary transition duration-200 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        
      >
        <path d="M3 4h10v16H3z" />

        <path d="M7.5 12h.01" />

        <path d="M14 12h7m-3-3 3 3-3 3" />
      </svg>
      Sign Out
    </a>
  );
}

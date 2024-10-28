import React from "react";
import { Link } from "@nextui-org/link";
import { LINKEDIN_PROFILE } from "@/constants/generalConstants";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href={LINKEDIN_PROFILE}
        title="Daria Shpak LinkedIn"
        aria-label="Daria Shpak LinkedIn Profile"
      >
        <span className="text-default-600">Developed by</span>
        <span className="text-primary">Daria Shpak</span>
      </Link>
    </footer>
  );
};

export default Footer;

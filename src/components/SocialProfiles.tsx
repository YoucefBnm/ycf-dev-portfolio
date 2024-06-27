import { socialProfiles } from "@/constants/data";

const SocialProfiles = () => {
  return (
    <ul className="flex items-center  flex-row gap-6">
      {socialProfiles.map((profile) => (
        <li key={profile.id}>
          <a
            href={
              profile.title === "gmail"
                ? `mailto:${profile.link}`
                : profile.link
            }
            aria-label={profile.label}
            title={profile.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width={20}
              height={20}
              aria-hidden
              loading="lazy"
              decoding="async"
              src={profile.icon}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialProfiles;

import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";

export default function Person({ member }) {
  return (
    <li class="w-fit rounded-lg bg-gray-100 text-center relative flex flex-col align-center items-center gap-1 pb-8 pt-10 px-6 hover:shadow-md hover:shadow-primary border-2 border-transparent hover:border-2 hover:border-primary transition">
      <img class="w-1/2 mb-4 object-cover aspect-square rounded-full" src={member.photo} alt="" />
      <p class="text-2xl m-0">{member.name}</p>
      <p class="text-lg m-0">{member.role}</p>
      <p class="text-lg m-0">{member.description}</p>
      <div class="flex flex-row flex-wrap text-lg justify-center">
        {member.link?.email && (
          <Tooltip title="Email" placement="bottom">
            <IconButton  size="large" color="primary" href={"mailto:" + member.link.email}>
              <Email fontSize="inherit" />
            </IconButton>
          </Tooltip>
        )}
        {member.link?.linkedin && (
          <Tooltip title="LinkedIn" placement="bottom">
            <IconButton size="large" color="primary" href={member.link.linkedin}>
              <LinkedIn fontSize="inherit" />
            </IconButton>
          </Tooltip>
        )}
        {member.link?.github && (
          <Tooltip title="Github" placement="bottom">
          <IconButton size="large" color="primary" href={member.link.github}>
            <GitHub fontSize="inherit" />
          </IconButton>
        </Tooltip>
        )}
      </div>
    </li>
  );
}

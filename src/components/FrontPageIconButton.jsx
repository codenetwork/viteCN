import { IconButton } from "@mui/material";
export default function SpecialIconButton(props) {
  return (
    <>
      <IconButton
        href={props.href}
        {...props}
        sx={{
          height: "64px",
          width: "64px",
          margin: 0,
          padding: 0,
          transition: "all 0.3s ease-in-out",
          ":hover": {
            boxShadow: "0px 0px 12px 4px rgba(1, 214, 9, 1)",
          },
        }}
        color="secondary">
        <>{props.icon}</>
      </IconButton>
    </>
  );
}

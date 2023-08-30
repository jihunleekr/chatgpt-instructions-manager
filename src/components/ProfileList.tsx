import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function ProfileList() {
  return (
    <div>
      <h1>프로필 목록</h1>
      <Link to="/avatar/new">
        <Button variant="text">새로운 프로필</Button>
      </Link>
    </div>
  );
}

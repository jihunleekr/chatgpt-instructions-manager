import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export default function ProfileForm() {
  return (
    <div>
      <Link to="/">
        <Button variant="text">목록</Button>
      </Link>
      <h1>새 프로필</h1>
      <form>
        <div>
          <TextField
            multiline
            variant="filled"
            label="What would you like ChatGPT to know about you to provide better responses?"
          />
        </div>
        <div>
          <TextField
            multiline
            variant="filled"
            label="How would you like ChatGPT to respond?"
          />
        </div>
        <div>
          <Button>저장</Button>
        </div>
      </form>
    </div>
  );
}

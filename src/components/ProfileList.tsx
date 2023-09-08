import { Link } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../database/db";

export default function ProfileList() {
  const profiles = useLiveQuery(() => db.profiles.toArray(), []);

  return (
    <div>
      <h1>프로필 목록</h1>
      <Link to="/avatar/new">
        <Button variant="text">새로운 프로필</Button>
      </Link>
      <List>
        {profiles?.map((profile) => (
          <ListItem key={profile.id}>
            <Link to={`/avatar/${profile.id}`}>
              <Button variant="text">{profile.name}</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

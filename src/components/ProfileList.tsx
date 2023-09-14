import { Link } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { Profile, db } from "../database/db";
import { getAccessToken, updateCustomInstructions } from "../api";

export default function ProfileList() {
  const profiles = useLiveQuery(() => db.profiles.toArray(), []);

  const applyProfile = async (profile: Profile) => {
    const accessToken = await getAccessToken();
    const response = await updateCustomInstructions(accessToken, {
      about_user_message: profile.about,
      about_model_message: profile.response,
      enabled: true,
    });
    console.log(response);
  };

  return (
    <div>
      <h1>프로필 목록</h1>
      <Link to="/profiles/new">
        <Button variant="text">새로운 프로필</Button>
      </Link>
      <List>
        {profiles?.map((profile) => (
          <ListItem
            key={profile.id}
            secondaryAction={
              <Button
                variant="contained"
                color="primary"
                onClick={() => applyProfile(profile)}
              >
                적용
              </Button>
            }
          >
            <Link to={`/profiles/${profile.id}`}>
              <Button variant="text">{profile.name}</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

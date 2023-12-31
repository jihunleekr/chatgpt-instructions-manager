import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { db } from "../database/db";
import { useEffect } from "react";

interface ProfileFormValues {
  name: string;
  about: string;
  response: string;
}

export default function ProfileForm() {
  const methods = useForm<ProfileFormValues>();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit: SubmitHandler<ProfileFormValues> = async (data) => {
    if (id) {
      await db.profiles.update(Number(id), { ...data, updatedAt: new Date() });
    } else {
      await db.profiles.add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      const fetchProfile = async () => {
        const profile = await db.profiles.get(Number(id));
        if (profile) {
          methods.setValue("name", profile.name);
          methods.setValue("about", profile.about);
          methods.setValue("response", profile.response);
        }
      };
      fetchProfile();
    }
  }, [id]);

  return (
    <div>
      <Link to="/">
        <Button variant="text">목록</Button>
      </Link>
      <h1>새 프로필</h1>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <TextField
            variant="filled"
            label="이름"
            fullWidth
            {...methods.register("name", { required: true })}
          />
          <TextField
            multiline
            variant="filled"
            label="What would you like ChatGPT to know about you to provide better responses?"
            fullWidth
            minRows={3}
            {...methods.register("about", { required: true })}
          />
          <TextField
            multiline
            variant="filled"
            label="How would you like ChatGPT to respond?"
            fullWidth
            minRows={3}
            {...methods.register("response", { required: true })}
          />
          <Button fullWidth type="submit">
            저장
          </Button>
        </Box>
      </form>
    </div>
  );
}

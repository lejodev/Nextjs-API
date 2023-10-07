import { NextResponse } from "next/server";
import { databaseConnect } from "@/utils/db";
import User from "@/models/User";

export async function POST(request) {
  databaseConnect();
  const { id, name, last_name, password } = await request.json();

  if (!id || !name || !last_name || !password) {
    return NextResponse.json({
      message: "Incomplete data, you must provide all fields",
    });
  } else if (!password || password.length <= 6) {
    return NextResponse.json({
      message: "Password must be at least 6 character long",
    });
  } else {
    const user = await User.findOne({ name: name })
      .then((user) => {
        if (user === null) {
          console.log("user", user);
          return false;
        } else {
          return true;
        }
      })
      .catch((err) => {
        return NextResponse.json({ Error: err });
      });

    if (user) {
      return NextResponse.json({ message: "User already exists" });
    } else {
      const newUser = await new User({
        id: id,
        name: name,
        last_name: last_name,
        password: password,
      });

      return await User.create(newUser)
        .then((doc) => {
          console.log(doc);
          return NextResponse.json({ message: "User created successfully" });
        })
        .catch((err) => {
          console.log(err);
          return NextResponse.json({ Error: err });
        });
    }
  }
}

import faker from "faker";
import { Role } from "../components/helpers/role";

const data = {
  user: {
    userName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: "https://i.pravatar.cc/200",
  },

  users: [
    {
      id: 1,
      username: "admin",
      password: "admin",
      firstName: "Admin",
      lastName: "User",
      role: Role.Admin,
      avatar: "https://i.pravatar.cc/200",
    },
    {
      id: 2,
      username: "planner",
      password: "planner",
      firstName: "Planner",
      lastName: "User",
      role: Role.Planner,
      avatar: "https://i.pravatar.cc/200",
    },
    {
      id: 3,
      username: "approver",
      password: "approver",
      firstName: "approval",
      lastName: "User",
      role: Role.Approver,
      avatar: "https://i.pravatar.cc/200",
    },
    {
      id: 4,
      username: "user1",
      password: "user1",
      firstName: "Test",
      lastName: "User",
      role: Role.User,
      avatar: "https://i.pravatar.cc/200",
    },
    {
      id: 5,
      username: "user2",
      password: "user2",
      firstName: "Second",
      lastName: "User",
      role: Role.User,
      avatar: "https://i.pravatar.cc/200",
    },
  ],

  messages: Array.from({ length: 15 }, (item, index) => ({
    id: index,
    text: faker.lorem.sentence(5, 15),
    date: faker.date.recent(1, new Date()),
    src: "https://i.pravatar.cc/200",
  })),
};

export default data;

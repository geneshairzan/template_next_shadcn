import { faker } from "@faker-js/faker";
import UI from "@ui";

// https://v10.fakerjs.dev/guide/

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export default function App(props) {
  const users = faker.helpers.multiple(createRandomUser, {
    count: 100,
  });
  return (
    <UI.Col p={2}>
      <UI.Text variant="h2" color="primary">
        Chat
      </UI.Text>
      {users.map((d, ix) => (
        <UI.Row key={ix}>
          <UI.Text variant="body1" className="flex-1">
            {d.userId}
          </UI.Text>
          <UI.Text variant="body1" className="flex-2">
            {d.username}
          </UI.Text>
          <UI.Text variant="body1" className="flex-2">
            {d.email}
          </UI.Text>
        </UI.Row>
      ))}
    </UI.Col>
  );
}
